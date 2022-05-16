<template>
    <div class="library">
        <div class="liked-songs">
            <h3 class="header">LIKED SONGS</h3>
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item" :class="{'active':j===1}" v-for="j in Math.floor((this.songs.length)/5)" :key="j">
                        <div class="tarj" v-for="i in 5" :key="i">
                            <div class="image"></div>
                            <div class="data">
                                <span class="title">{{this.songs[5*(j-1)+(i-1)].title}}</span>
                                <span class="artist">{{this.songs[5*(j-1)+(i-1)].artist}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="scroll">
                <div class="tarj" v-for="song in this.songs" :key="song.title">
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
                },
                {
                    title: 'Blinding Lights',
                    artist: 'The Weeknd'
                },
                {
                    title: 'Blinding Lights',
                    artist: 'The Weeknd'
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
.carousel-inner{
    align-items: center;
    justify-content: center;
}
.library{
    overflow-y: auto;
    padding: 1em 3em;
}
.header{
    color: white;
    font-size: 1.2em;
    font-weight: 500;
}
.tarj{
    display:inline-block;
    width: calc(80%/5);
    border: none;
    border-radius: 1.5em;
    background-color: #1a1a1a;
    margin: 1em;
}
.tarj .image{
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: var(--pink);
    border-radius: 1.5em;
}
.tarj .data{
    padding: 10px 20px;
}
.tarj .data span{
    display: block;
}
.tarj .data span.title{
    font-size: 0.9em;
    color: white;
}
.tarj .data span.artist{
    font-size: 0.7em;
    color: #B594B1
}
</style>