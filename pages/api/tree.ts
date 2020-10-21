  
import execa from 'execa';

export default async function handle(req, res) {
  const { stdout } = await execa('du', [process.cwd(), `--max-depth=4`])
  const data = { cwd: process.cwd(), stdout: stdout }
  return res.json(data);
}
