import { createStore } from 'vuex'
import { SongQueue } from '@/classes/SongQueue.js'

export default createStore({
    state: {
        songQueue: new SongQueue(),
        currentSong: {
            artist: {
                artist_name: ''
            }
        },
        username: ''
    },
    mutations: {},
    actions: {},
    modules: {}
})