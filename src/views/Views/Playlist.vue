<template>
    <section>
        <PlaylistHeader
            :name="PLAYLIST.name"
            class="mb-8"
        />
        <SongDeck
            :songs="PLAYLIST.songs"
        />
    </section>
</template>

<script>
import { PlaylistHeader, SongDeck } from './../../components';
import { MY_PLAYLISTS } from './../../mock-data';
export default {
    name: 'Playlist',
    components: {
        PlaylistHeader,
        SongDeck,
    },
    data(){
        return {
            PLAYLIST: {
                name: '',
                imgSrc: '',
                songs: [],
            },
        }
    },
    mounted(){
        const PLAYLIST = MY_PLAYLISTS.find(PROXY => PROXY.name === this.$route.params["name"]);
        if (!PLAYLIST) this.$router.push('/app/home');
        else this.PLAYLIST = PLAYLIST;
    }
}
</script>