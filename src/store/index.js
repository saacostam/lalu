import { createStore } from 'vuex'
import { SongQueue } from '@/classes/SongQueue.js'

export default createStore({
    state: {
        songQueue: new SongQueue()
    },
    mutations: {},
    actions: {},
    modules: {}
})