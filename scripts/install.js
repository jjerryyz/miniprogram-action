const { execSync } = require('child_process');

function exec(command) {
  execSync(command, {
    cwd: __dirname,
    stdio: 'inherit',
  });
}

exec('npm install pnpm@8 -g --registry=https://registry.npm.taobao.org');
exec('pnpm install --frozen-lockfile');
