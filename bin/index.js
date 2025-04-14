#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

async function main() {
  // 사용자로부터 디렉토리 경로를 명령어 인자로 받음
  const targetDir = process.argv[2] || process.cwd(); // 두 번째 인자가 없으면 현재 작업 디렉토리 사용
  const templateDir = path.join(__dirname, '../template');

  if (!targetDir) {
    console.log('❌ No target directory specified!');
    return;
  }

  console.log(`🚀 Creating project in: ${targetDir}`);

  try {
    await fs.copy(templateDir, targetDir);
    console.log('✅ Project created successfully!');
  } catch (err) {
    console.error('❌ Failed to create project:', err);
  }
}

main();
