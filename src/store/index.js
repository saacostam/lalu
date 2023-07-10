import { createStore } from 'vuex'
import { SongQueue } from '@/classes/SongQueue.js'
import { SONGS } from './../mock-data'

const store =  createStore({
    state: {
        songQueue: new SongQueue(),
        username: 'Friend',
        navbarOpen: false,
    },
    mutations: {},
    actions: {},
    modules: {}
})

store.state.songQueue.setQueue(SONGS);

export default store;