<template>
    <div class="my-carousel">
        <div id="carousel-empty" v-if="this.songs.length===0"><span>No Playlist Found</span></div>

        <div id="carousel1" class="carousel slide" data-ride="carousel1" v-if="this.view_width>1000 && this.songs.length!==0">
            <div class="carousel-inner">
                <div class="carousel-item scroll" :class="{'active':j===1}" v-for="j in Math.ceil((this.songs.length)/5)" :key="j">
                    <div class="tarj" v-for="i in Math.min(5, this.songs.length-((j-1)*5))" :key="i" @click="goToPlaylistById(this.songs[5*(j-1)+(i-1)]._id)">
                        <div class="image">{{this.songs[5*(j-1)+(i-1)].playlist_name}}</div>
                        <div class="data">
                            <span class="title">{{this.songs[5*(j-1)+(i-1)].playlist_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="control carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="control carousel-control-next" href="#carousel1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div id="carousel2" class="carousel slide" data-ride="carousel2" v-if="(900<this.view_width && this.view_width<=1000) && this.songs.length!==0">
            <div class="carousel-inner">
                <div class="carousel-item scroll" :class="{'active':j===1}" v-for="j in Math.ceil((this.songs.length)/4)" :key="j">
                    <div class="tarj" v-for="i in Math.min(4, this.songs.length-((j-1)*4))" :key="i" @click="goToPlaylistById(this.songs[4*(j-1)+(i-1)]._id)">
                        <div class="image">{{this.songs[4*(j-1)+(i-1)].playlist_name}}</div>
                        <div class="data">
                            <span class="title">{{this.songs[4*(j-1)+(i-1)].playlist_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="control carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="control carousel-control-next" href="#carousel2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div id="carousel" class="carousel slide" data-ride="carousel" v-if="(750<this.view_width && this.view_width<=900) && this.songs.length!==0">
            <div class="carousel-inner">
                <div class="carousel-item scroll" :class="{'active':j===1}" v-for="j in Math.ceil((this.songs.length)/3)" :key="j" >
                    <div class="tarj" v-for="i in Math.min(3, this.songs.length-((j-1)*3))" :key="i" @click="goToPlaylistById(this.songs[3*(j-1)+(i-1)]._id)">
                        <div class="image">{{this.songs[3*(j-1)+(i-1)].playlist_name}}</div>
                        <div class="data">
                            <span class="title">{{this.songs[3*(j-1)+(i-1)].playlist_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="control carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="control carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div id="carousel" class="carousel slide" data-ride="carousel" v-if="(500<this.view_width && this.view_width<=750) && this.songs.length!==0">
            <div class="carousel-inner">
                <div class="carousel-item scroll" :class="{'active':j===1}" v-for="j in Math.ceil((this.songs.length)/2)" :key="j">
                    <div class="tarj" v-for="i in Math.min(2, this.songs.length-((j-1)*2))" :key="i" @click="goToPlaylistById(this.songs[2*(j-1)+(i-1)]._id)">
                        <div class="image">{{this.songs[2*(j-1)+(i-1)].playlist_name}}</div>
                        <div class="data">
                            <span class="title">{{this.songs[2*(j-1)+(i-1)].playlist_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="control carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="control carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div id="carousel" class="carousel slide" data-ride="carousel" v-if="(this.view_width<=500) && this.songs.length!==0">
            <div class="carousel-inner">
                <div class="carousel-item scroll" :class="{'active':j===1}" v-for="j in Math.ceil((this.songs.length)/1)" :key="j">
                    <div class="tarj" v-for="i in Math.min(1, this.songs.length-((j-1)*1))" :key="i" @click="goToPlaylistById(this.songs[1*(j-1)+(i-1)]._id)">
                        <div class="image">{{this.songs[1*(j-1)+(i-1)].playlist_name}}</div>
                        <div class="data">
                            <span class="title">{{this.songs[1*(j-1)+(i-1)].playlist_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="control carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="control carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data(){
        return {
            view_width: 0,
            ranges: []
        }
    },
    props:['songs'],
    mounted(){
        const library = document.getElementById('library');
        this.view_width = parseInt(library.clientWidth);
        window.addEventListener('resize', ()=>{
            this.view_width = parseInt(library.clientWidth);
        });
    },
    methods:{
        goToPlaylistById(id){
            this.$router.push({path:`/app/playlist/${id}`});
        }
    }
}
</script>

<style scoped>
#carousel-empty{
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
.tarj{
    display:inline-block;
    width: 150px;
    border: none;
    border-radius: 1.5em;
    background-color: #1a1a1a;
    margin: 1em;
    cursor: pointer;
}
.tarj:hover{
    box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -webkit-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -moz-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    transition: .2s;
}
.tarj .image{
    width: 150px;
    height: 150px;
    border-radius: 1.5em;

    display: flex;
    align-content: center;
    justify-content: center;
    background-color: var(--pink);
    color: white;
    line-height :150px;
}
.tarj .data{
    padding: 10px 20px;
}
.tarj .data span{
    display: block;
    max-width: 100%;
}
.tarj .data span.title{
    font-size: 0.9em;
    color: white;
    text-align: center;
}
.tarj .data span.artist{
    font-size: 0.7em;
    color: #B594B1
}
/* .scroll{
    transition: display 0s ease-in;
} */
.scroll.active{
    display: flex;
    justify-content: center;
}
a.control{
    width: 5%;
}
</style>