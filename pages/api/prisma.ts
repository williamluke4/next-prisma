import execa from 'execa';
import path from 'path';

export default async function handle(req, res) {
  const { stdout: atPrisma } = await execa('ls', ['-a'], { cwd: '/var/task/node_modules/@prisma/client'});
  const { stdout: dotPrisma } = await execa('ls', ['-a'], { cwd: '/var/task/node_modules/.prisma/client'});

  return res.json({atPrisma, dotPrisma});
}
