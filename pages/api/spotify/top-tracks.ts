import type {NextApiRequest, NextApiResponse} from 'next';
import {getTopTracks} from '../../../lib/spotify';

interface Artist {
  name: string;
}

interface Track {
  external_urls: Record<string, unknown>;
  name: string;
  artists: Artist[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getTopTracks();
  const {items} = await response.json();

  const tracks = items.slice(0, 10).map((track: Track) => ({
    artist: track.artists.map((_artist: Artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({tracks});
}
