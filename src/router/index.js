import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Auth from '../views/Auth.vue'
import NotFound from '../views/NotFound.vue'

import AppNotFound from '../components/Auth/Layout/NotFound.vue'

import Home from '../views/Views/Home.vue'
import Library from '../views/Views/Library.vue'
import MyLikes from '../views/Views/MyLikes.vue'
import Playlist from '../views/Views/Playlist.vue'
import Artist from '../views/Views/Artist.vue'
import Artists from '../views/Views/Artists.vue'

const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/app',
        name: 'Auth',
        component: Auth,
        children: [{
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'library',
                name: 'Library',
                component: Library
            },
            {
                path: 'my-likes',
                name: 'MyLikes',
                component: MyLikes
            },
            {
                path: 'playlist/:name',
                name: 'Playlist',
                component: Playlist
            },
            {
                path: 'artists',
                name: 'Artists',
                component: Artists
            },
            {
                path: 'artist/:name',
                name: 'Artist',
                component: Artist
            },
            {
                path: ':pathMatch(.*)*',
                name: 'AppNotFound',
                component: AppNotFound
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;