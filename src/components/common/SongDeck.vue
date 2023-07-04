<template>
    <section class="flex flex-row overflow-x-auto p-1 pb-3">
        <SongCard 
            v-for="song in songs"
            :name="song.name"
            :artist="song.artists"
            :imgSrc="song.imgSrc"
            :src="song.src"
            :id="song.id"
            class="mr-8"
        />
    </section>
</template>

<script>
import {SongCard} from '.';
export default{
    components:{
        SongCard
    },
    props: [
        'songs'
    ]
}
</script>