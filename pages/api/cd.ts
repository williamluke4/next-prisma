import execa from 'execa';

export default async function handle(res, req) {
  const { stdout } = await execa('ls', ['-a'], { cwd: process.cwd() });
  const data = { cwd: process.cwd(), stdout: stdout };
  return res.json(data);
}
