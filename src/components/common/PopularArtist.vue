<template>
    <section class="flex flex-row items-center p-1 pb-3">
        <ArtistBlob
            :name="name"
            :imgSrc="imgSrc"
            class="ml-8 mr-20"
        />
        <div class="flex flex-column overflow-x-auto h-fit">
            <div class="flex flex-row overflow-x-auto h-fit">
                <SongCard
                    v-for="song in songs"
                    :name="song.name"
                    :artist="song.artists"
                    :src="song.src"
                    :horizontal="true"
                    :id="song.id"
                    class="mr-8 mb-3"
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