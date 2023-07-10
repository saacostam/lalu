import { SONGS } from "./songs"

export const POPULAR_SONGS = SONGS.filter(
    song => {
        return [11, 16, 20, 22, 23, 28, 31, 33, 34, 36, 37, 39].includes(song.id);
    }
)