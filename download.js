import { exec } from 'node:child_process';

async function run(cmd, waitForText) {
  return new Promise((resolve) => {
    const process = exec(cmd);
    process.stdout
      ?.on('data', (data) => {
        if (waitForText && data.includes(waitForText)) {
          resolve();
        }
      })
      .on('close', resolve);
  });
}

const commands = [
  `git clone --depth 1 --filter=blob:none --sparse https://github.com/vscode-icons/vscode-icons`,
  `git -C vscode-icons sparse-checkout set icons`,
  `mv vscode-icons/icons .`,
  `rm -rf vscode-icons`
];

export async function getIcons() {
  for (const command of commands) {
    console.log(`Running: ${command}`);
    await run(command);
  }
  console.log('Done! Icons in ./icons')
}

getIcons();
