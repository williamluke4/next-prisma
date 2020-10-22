  
import execa from 'execa';
import path from 'path';

export default async function handle(req, res) {
  const { stdout } = await execa('du', [path.join(process.cwd(), '../'), `--max-depth=4`])
  const data = { cwd: process.cwd(), stdout: stdout }
  return res.json(data);
}
