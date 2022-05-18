<template>
    <div id="library">
        <div class="playlists mb-3">
            <h3 class="header">PLAYLISTS</h3>
            <CarouselPlaylist :songs="this.getAllUsernamePlaylistsAndAlbums" />
        </div>

        <div class="liked-songs mb-3">
            <h3 class="header">LIKED SONGS</h3>
            <Carousel :songs="this.songs" />
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import Carousel from '../../Util/Carousel.vue'
import CarouselPlaylist from '../../Util/CarouselPlaylist.vue'
export default {
    name: 'Library',
    components:{Carousel, CarouselPlaylist},
    data(){
        return {
            getAllUsernamePlaylistsAndAlbums:[
                {playlist_name: 'Playlist #1', _id:1},
                {playlist_name: 'Playlist #2', _id:2},
                {playlist_name: 'Playlist #3', _id:3},
            ],
            songs: [
                {title: 'Levitating',artist: 'Dua Lipa', src:'/images/dua-lipa.png'}, 
                {title: 'Breathin',artist: 'Ariana Grande', src:'/images/ariana-grande.png'}, 
                {title: 'Bite Me',artist: 'Avril Lavigne', src:'/images/avril-artist.png'}, 
                {title: 'Summer', artist: 'Calvin Harris', src:'/images/calvin-harris.png'},
                {title: 'Blinding Lights',artist: 'The Weeknd', src:'/images/the-weeknd.png'},
                {title: 'As It Was',artist: 'Harry Styles', src:'/images/harry-styles.png'},
                {title: 'N95',artist: 'Kendrick Lamar', src:'/images/kendrick-lamar.png'},
                {title: 'First Class',artist: 'Jack Harlow', src:'/images/jack-harlow.png'},
                {title: 'Heat Waves',artist: 'Glass Animals', src:'/images/glass-animals.png'},
                {title: 'Savage',artist: 'Tiësto & Deorro', src:'/images/tiesto.png'},
            ],
            view_width: 0
        }
    },
    apollo:{
        // getAllUsernamePlaylistsAndAlbums: {
        //     query: gql`
        //         query ($playlistUsername: String!){
        //             getAllUsernamePlaylists(playlist_username: $playlistUsername) {
        //                 _id
        //                 playlist_name
        //             }
        //         }
        //     `,
        //     variables: {
        //         "playlistUsername": this.$store.state.username
        //     },
        // }
    }
    // mounted(){
    //     const library = document.getElementById('library');
    //     window.addEventListener('resize', ()=>{
    //         this.view_width = parseInt(library.clientWidth);
    //         console.log(this.view_width);
    //     });
    // }
}
</script>

<style scoped>
#library{
    padding: 1em 3em;
}
.header{
    color: white;
    font-size: 1.2em;
    font-weight: 500;
}
</style>