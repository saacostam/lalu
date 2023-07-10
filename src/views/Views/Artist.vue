<template>
    <main>
        <ArtistBanner
            :name="CURRENT_ARTIST.name"
            :imgSrc="CURRENT_ARTIST.imgSrc"
            :description="CURRENT_ARTIST.description"
        />
        <Header text="Songs" class="my-4"/>
        <SongDeck
            :songs="CURRENT_ARTIST.songs"
            class="justify-center"
        />
    </main>
</template>

<script>
import { POPULAR_ARTISTS_AND_SONGS } from '../../mock-data';
import { Header, ArtistBanner, SongDeck } from './../../components'
export default {
    name: 'Artist',
    components: {
        Header,
        ArtistBanner,
        SongDeck,
    },
    data(){
        const CURRENT_ARTIST = POPULAR_ARTISTS_AND_SONGS.find(ARTIST => ARTIST.name === this.$route.params['name']);
        if (!CURRENT_ARTIST) this.$router.push('/app/home');
        return {
            CURRENT_ARTIST,
        }
    },
}
</script>