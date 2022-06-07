import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Auth from '../views/Auth.vue'
import NotFound from '../views/NotFound.vue'

import AppNotFound from '../components/Auth/Layout/NotFound.vue'

import Home from '../components/Auth/Views/Home.vue'
import Library from '../components/Auth/Views/Library.vue'
import MyLikes from '../components/Auth/Views/MyLikes.vue'
import Playlist from '../components/Auth/Views/Playlist.vue'
import Artist from '../components/Auth/Views/Artist.vue'
import Artists from '../components/Auth/Views/Artists.vue'
import BecomeArtist from '../components/Auth/Views/BecomeArtist.vue'
import ArtistProfile from '../components/Auth/Views/ArtistProfile.vue'
import UploadSong from '../components/Auth/Views/UploadSong.vue'

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
                path: 'playlist/:id',
                name: 'Playlist',
                component: Playlist
            },
            {
                path: 'artists',
                name: 'Artists',
                component: Artists
            },
            {
                path: 'artist/:id',
                name: 'Artist',
                component: Artist
            },
            {
                path: 'become-artist',
                name: 'BecomeArtist',
                component: BecomeArtist
            },
            {
                path: 'upload-song',
                name: 'UploadSong',
                component: UploadSong
            },
            {
                path: 'artist-profile/:id',
                name: 'ArtistProfile',
                component: ArtistProfile
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

export default router