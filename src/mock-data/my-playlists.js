import { SONGS } from './songs'

export const MY_PLAYLISTS = [
    {
        name: 'Electronic Dance Music',
        number: 18,
        duration: 1.1,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/audio/Felix Jaehn - All For Love ft. Sandro Cavazza/img.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 1 || SONG.artist === 0 || SONG.artist === 5),
    },
    {
        name: 'Best of: CamelPhat',
        number: 6,
        duration: 0.3,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/camelphat.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 1),
    },
    {
        name: 'Acoustic',
        number: 18,
        duration: 1.3,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/audio/Sasha Alex Sloan - Is It Just Me ft. Charlie Puth/img.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 2 || SONG.artist === 3 || SONG.artist === 4),
    },
    {
        name: 'Best of: Fred Again..',
        number: 6, 
        duration: 0.4,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/fred_again...jpg',
        songs: SONGS.filter(SONG => SONG.artist === 0),
    },
    {
        name: 'Best of: Jack Back',
        number: 6,
        duration: 0.4,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/jack_back.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 5),
    },
    {
        name: 'Best of: Sandro Cavazza',
        number: 6, 
        duration: 0.4,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sandro_cavazza.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 3),
    },
    {
        name: 'Best of: Sasha Alex Sloan',
        number: 6, 
        duration: 0.3,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sasha_alex_sloan.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 2),
    },
    {
        name: 'Best of: The Beatles',
        number: 6, 
        duration: 0.3,
        imgSrc:'https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/the_beatles.jpg',
        songs: SONGS.filter(SONG => SONG.artist === 4),
    },
]