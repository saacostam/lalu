<template>
    <div class="library">
        <div class="liked-songs">
            <h3 class="header">LIKED SONGS</h3>
            <div class="scroll">
                <div class="card" v-for="song in this.songs" :key="song.title">
                    <div class="image">{{song.title}}</div>
                    <div class="data">
                        <span class="title">{{song.title}}</span>
                        <span class="artist">{{song.artist}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="playlists">
            <h3 class="header">PLAYLISTS</h3>
            <div class="scroll">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Library',
    data(){
        return {
            songs: [
                {
                    title: 'Levitating',
                    artist: 'Dua Lipa'
                },
                {
                    title: 'Breathin',
                    artist: 'Ariana Grande'
                },
                {
                    title: 'Bite Me',
                    artist: 'Avril Lavigne'
                },
                {
                    title: 'Summer',
                    artist: 'Calvin Harris'
                },
                {
                    title: 'Blinding Lights',
                    artist: 'The Weeknd'
                },
                {
                    title: 'Blinding Lights',
                    artist: 'The Weeknd'
                }
            ]
        }
    }
}
</script>

<style scoped>
.library{
    overflow-y: auto;
    padding: 1em 3em;
}
.header{
    color: white;
    font-size: 1.2em;
    font-weight: 500;
}
.scroll{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
.card{
    flex: 0 0 10em;
    width: 10em;
    border: none;
    border-radius: 1.5em;
    background-color: #1a1a1a;
    margin: 1em;
}
.card .image{
    width: 10em;
    height: 10em;
    background-color: var(--pink);
    border-radius: 1.5em;

    display:flex; align-items: center; justify-content: center;
}
.card .data{
    padding: 10px 20px;
}
.card .data span{
    display: block;
}
.card .data span.title{
    font-size: 0.9em;
    color: white;
}
.card .data span.artist{
    font-size: 0.7em;
    color: #B594B1
}
</style>