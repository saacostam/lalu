<template>
    <main>
        <Header text="Recently Heard [10]" class="mb-4"/>
        <SongDeck :songs="POPULAR_SONGS"/>
        <Header text="Library" class="my-4"/>
        <PlaylistPrev :playlists="MY_PLAYLISTS"/>
    </main>
</template>

<script>
import { Header, SongDeck, PlaylistPrev } from './../../components';
import { POPULAR_SONGS, MY_PLAYLISTS } from '../../mock-data';
export default {
    name: 'Library',
    components: {
        Header,
        SongDeck,
        PlaylistPrev
    },
    data(){
        return {
            POPULAR_SONGS,
            MY_PLAYLISTS
        }
    }
}
</script>