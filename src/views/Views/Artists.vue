<template>
    <main>
        <ArtistsHeader/>
        <Header text="Popular Artists Right Now" class="my-6 mb-12"/>
        <PopularArtist
            v-for="popularArtist in POPULAR_ARTISTS_AND_SONGS"
            :name="popularArtist.name"
            :imgSrc="popularArtist.imgSrc"
            :songs="popularArtist.songs"
            class="mb-8"
        />
    </main>
</template>

<script>
import {ArtistsHeader, Header, PopularArtist} from '../../components';
import {POPULAR_ARTISTS_AND_SONGS} from './../../mock-data';
export default {
    name: 'Artists',
    components: {
        ArtistsHeader,
        Header,
        PopularArtist,
    },
    data(){
        return {
            POPULAR_ARTISTS_AND_SONGS
        }
    }
}
</script>