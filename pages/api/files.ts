import execa from "execa";

export default async function handle(req, res) {
  const {stdout} = await execa('ls', ['-a']);
  return res.json(stdout);
}
.
..
db
.next
node_modules
now__bridge.js
now__launcher.js
package.json