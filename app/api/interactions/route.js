import { verifyKey } from 'discord-interactions';
import cord from './cord';

export async function POST(re) {
  const raw = await re.text(); // verifyKey wants it raw }:)

  const { sign, ts, key } = process.env; // env: headers & key

  const isOk = await verifyKey(
    raw,
    re.headers.get(sign),
    re.headers.get(ts),
    key
  );

  if (!isOk) {
    return Response.json({ error: 'cant verify ;-;' }, { status: 401 });
  }

  const data = JSON.parse(raw); // raw to data :3

  if (data.type === 1) {
    return Response.json({ type: 1 });
  }

  if (data.type === 2) {
    return Response.json(cord(data));
  }

  return Response.json({ error: 'unknown type ;-;' }, { status: 400 });
}
