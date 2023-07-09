<template>
    <section 
        class="inline-grid grid-cols-2 sm:grid-cols-3 md:flex flex-row w-100 flex-nowrap md:overflow-x-auto p-1 pb-3"
    >
        <SongCard 
            v-for="song in songs"
            :name="song.name"
            :artist="song.artists"
            :imgSrc="song.imgSrc"
            :src="song.src"
            :id="song.id"
            class="mb-8 md:mb-0 song-card"
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

<style scoped>
.song-card{
    margin: auto;
    margin-bottom: 32px;
}
@media (min-width: 768px) {
    .song-card{
        margin: 0;
        margin-right: 32px;
    }
}
</style>