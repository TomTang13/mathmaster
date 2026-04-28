#!/bin/bash

# 自动增加版本号的脚本

# 切换到项目根目录
cd "$(dirname "$0")"

# 版本号文件路径
VERSION_FILE="src/config/version.ts"

# 读取当前版本号和构建号
if [ -f "$VERSION_FILE" ]; then
  VERSION=$(grep "VERSION" $VERSION_FILE | cut -d'"' -f2)
  BUILD_NUMBER=$(grep "BUILD_NUMBER" $VERSION_FILE | cut -d'=' -f2 | tr -d ' ;')
  
  # 增加构建号
  NEW_BUILD_NUMBER=$((BUILD_NUMBER + 1))
  
  # 更新版本号文件
  sed -i '' "s/BUILD_NUMBER = [0-9]*/BUILD_NUMBER = $NEW_BUILD_NUMBER/" $VERSION_FILE
  
  echo "版本号已更新: $VERSION (Build: $NEW_BUILD_NUMBER)"
  
  # 将更新后的版本号文件添加到git
  git add $VERSION_FILE
else
  echo "版本号文件不存在: $VERSION_FILE"
  exit 1
fi