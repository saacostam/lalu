<template>
    <section class="flex flex-row flex-wrap" :class="commonContainerClass">
        <PlaylistPrevCard
            v-for="playlist in playlists" 
            :name="playlist.name"
            :number="playlist.number"
            :duration="playlist.duration"
            :imgSrc="playlist.imgSrc"
            :src="playlist.src"
        />
    </section>
</template>

<script>
import { PlaylistPrevCard } from '.';
export default {
    props: [
        'playlists',
    ],
    components:{
        PlaylistPrevCard
    },
    data(){
        return {
            commonContainerClass: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
        }
    }
}
</script>