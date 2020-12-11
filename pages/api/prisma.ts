import execa from 'execa';

export default async function handle(req, res) {
  const { stdout: dbParent } = await execa('ls', ['-a'], { cwd: '/var/db' });

  return res.json({ dbParent });
}
