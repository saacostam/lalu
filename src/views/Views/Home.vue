<template>
    <main>
        <HomeMessage/>
        <Header text="POPULAR SONGS" class="my-4"/>
        <SongDeck :songs="POPULAR_SONGS"/>
        <Header text="POPULAR ARTISTS" class="my-4"/>
        <ArtistDeck :artists="ARTISTS"/>
    </main>
</template>

<script>
import { HomeMessage, Header, SongDeck, ArtistDeck } from './../../components';
import { POPULAR_SONGS, ARTISTS } from './../../mock-data';
export default {
    components:{
        HomeMessage,
        Header,
        SongDeck,
        ArtistDeck
    },
    name: 'Home',
    data(){
        return {
            POPULAR_SONGS,
            ARTISTS,
        }
    }
}
</script>