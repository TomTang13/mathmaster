import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async findByToken(token: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { t: token },
    });
    if (!user) {
      throw new NotFoundException(`User with token not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  async recordLogin(userId: number): Promise<void> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    await this.dataSource.query(
      'INSERT IGNORE INTO user_login_records (user_id, login_date) VALUES (?, ?)',
      [userId, todayStr]
    );
  }

  async getConsecutiveLoginDays(userId: number): Promise<number> {
    const [result] = await this.dataSource.query(`
      SELECT COUNT(DISTINCT login_date) as streak 
      FROM user_login_records 
      WHERE user_id = ?
    `, [userId]);

    return result?.streak || 0;
  }

  async findByTokenWithStreak(token: string): Promise<{ user: User; streak: number }> {
    const user = await this.findByToken(token);
    
    // 记录本次登录
    await this.recordLogin(user.id);
    
    // 计算累计登录天数
    const streak = await this.getConsecutiveLoginDays(user.id);
    
    return { user, streak };
  }

  async uploadAudio(userId: number, questionId: string, file: Express.Multer.File): Promise<{ success: boolean; message: string }> {
    // 确保用户存在
    await this.findOne(userId);

    // 创建音频存储目录
    const audioDir = path.join(process.cwd(), 'audio', userId.toString());
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // 定义音频文件路径
    const audioPath = path.join(audioDir, `${questionId}.wav`);

    // 写入文件（覆盖原有文件）
    fs.writeFileSync(audioPath, file.buffer);

    return { success: true, message: '音频上传成功' };
  }
}
