import { ARTISTS } from "./artists"
import { SONGS } from './songs';

export const POPULAR_ARTISTS_AND_SONGS = [];

for (let i = 0; i < ARTISTS.length; i++){
    const ARTIST = ARTISTS[i];
    POPULAR_ARTISTS_AND_SONGS.push({
        ...ARTIST,
        songs: SONGS.filter(song => song.artist === ARTIST.id),
    })
}