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
            songs: [{title: 'Levitating',artist: 'Dua Lipa'}, {title: 'Breathin',artist: 'Ariana Grande'},{title: 'Bite Me',artist: 'Avril Lavigne'}, {title: 'Summer', artist: 'Calvin Harris'},{title: 'Blinding Lights',artist: 'The Weeknd'},{title: 'Blinding Lights',artist: 'The Weeknd'},{title: 'Blinding Lights',artist: 'The Weeknd'},{title: 'Blinding Lights',artist: 'The Weeknd'},{title: 'Blinding Lights',artist: 'The Weeknd'}],
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
    overflow-y: auto;
    padding: 1em 3em;
}
.header{
    color: white;
    font-size: 1.2em;
    font-weight: 500;
}
</style>