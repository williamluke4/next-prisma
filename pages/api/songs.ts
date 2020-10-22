import path from 'path';
import { PrismaClient } from '../../db';
const prisma = new PrismaClient();
path.join('../../db/query-engine-rhel-openssl-1.0.x')
export default async function handle(req, res) {
  const songs = await prisma.song.findMany({ include: { artist: true } });
  return res.json(songs);
}
