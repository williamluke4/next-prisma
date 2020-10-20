import execa from 'execa';
import path from 'path';

export default async function handle(req, res) {
  const { stdout } = await execa('ls', ['-a'], { cwd: path.join(process.cwd(), '../') });
  return res.json(stdout);
}
