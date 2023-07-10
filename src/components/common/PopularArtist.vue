<template>
    <section class="grid md:flex flex-row items-center p-1 pb-3">
        <ArtistBlob
            :name="name"
            :imgSrc="imgSrc"
            class="place-self-center block md:inline artist-blob"
        />
        <div class="flex flex-column md:overflow-x-auto h-fit">
            <div class="grid md:flex flex-row h-fit w-auto-md">
                <SongCard
                    v-for="song in songs"
                    :name="song.name"
                    :artist="song.artists"
                    :src="song.src"
                    :horizontal="true"
                    :id="song.id"
                    class="place-self-center w-100 song-card"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { ArtistBlob, SongCard } from '.';
export default {
    components: {
        ArtistBlob,
        SongCard,
    },
    props: [
        'name',
        'imgSrc',
        'songs',
    ]
}
</script>

<style scoped>
.song-card{
    margin: 0;
    margin-bottom: 16px;
}
.artist-blob{
    margin-bottom: 16px;
}
@media (min-width: 768px) {
    .song-card{
        margin-right: 32px;
        margin-bottom: 12px;
    }
    .artist-blob{
        margin-left: 32px;
        margin-right: 80px;
    }
}
</style>