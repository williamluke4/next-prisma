import execa from 'execa';
import path from 'path';

export default async function handle(req, res) {
  const { stdout } = await execa('ls', ['-a'], { cwd: path.join(process.cwd(), 'db') });
  const data = { cwd: process.cwd(), stdout: stdout, req: require.resolve('../../db') }
  return res.json(data);
}
