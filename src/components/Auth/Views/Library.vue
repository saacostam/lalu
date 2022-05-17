<template>
    <div id="library">
        <div class="liked-songs">
            <h3 class="header">LIKED SONGS</h3>
            <Carousel :songs="this.songs" />
        </div>

        <div class="playlists">
            <h3 class="header">PLAYLISTS</h3>
        </div>
    </div>
</template>

<script>
import Carousel from '../../Util/Carousel.vue'
export default {
    name: 'Library',
    components:{Carousel},
    data(){
        return {
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