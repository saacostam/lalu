<template>
    <section class="flex flex-row overflow-x-auto pb-3">
        <ArtistBlob 
            v-for="artist in artists"
            :name="artist.name"
            :imgSrc="artist.imgSrc"
            :src="artist.src"
            class="mr-8"
        />
    </section>
</template>

<script>
import { ArtistBlob } from '.';
export default{
    components:{
        ArtistBlob
    },
    props: [
        'artists'
    ]
}
</script>