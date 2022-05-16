<template>
    <div class="music-player">
        <input type="range" id="progress" v-model="this.currentTime" min="0" :max="this.totalTime" :style="`background-size: ${this.currentTime*100/this.totalTime}% 100%;`">
        <audio id="audio"></audio>

        <div class="row">
          <div class="volume-control col-md-4 col-12">
            <i class="bi bi-volume-down"></i>
            <input type="range" id="volume" v-model="this.volume" min="0" :max="100" :style="`background-size: ${this.volume*100/100}% 100%;`">
            <i class="bi bi-volume-up"></i>
          </div>

          <div class="panel col-md-4 col-sm-6 col-12">
            <a class="control"><i class="bi bi-shuffle"></i></a>
            <a class="control"><i class="bi bi-skip-start"></i></a>
            <a class="control play-control" @click="play" v-if="this.isPlaying==false"><i class="bi bi-play"></i></a>
            <a class="control play-control" @click="pause" v-else><i class="bi bi-pause"></i></a>
            <a class="control"><i class="bi bi-skip-end"></i></a>
            <a class="control"><i class="bi bi-arrow-repeat"></i></a>
          </div>

          <div class="panel col-md-4 col-sm-6 col-12">
            <a @click="play"><i class="bi bi-play"></i></a>
          </div>
        </div>
    </div>
</template>

<script>
import { file } from '@/mock-data/binaryAudioFile.js'

export default {
    name: 'MusicPlayer',
    data(){
      return {
        currentTime: 0,
        totalTime: 0,
        volume: 100,
        src:'',
        isPlaying:false
      }
    },
    mounted(){
      const audioElement = document.getElementById("audio");
      audioElement.addEventListener("ended", ()=>{
        this.forward();
      })

      audioElement.addEventListener("timeupdate", ()=>{
        this.currentTime = audioElement.currentTime;
      })

      audioElement.addEventListener("durationchange", ()=>{
        this.totalTime = audioElement.duration;
      })

      audioElement.addEventListener("play", ()=>{
        this.isPlaying = true;
      })

      audioElement.addEventListener("pause", ()=>{
        this.isPlaying = false;
      })

      const progressBar = document.getElementById("progress");
      progressBar.addEventListener("input", (e)=>{
        audioElement.currentTime = e.target.value;
      });

      this.load();
    },
    watch: {
      volume: function(vol) {
        const audioElement = document.getElementById("audio");
        audioElement.volume = vol/100;
      }
    },
    methods:{
      forward(){
        const audioElement = document.getElementById("audio");
        this.$store.state.player.forward();
        audioElement.load();
      },
      load(){
        const audioElement = document.getElementById("audio");
        audioElement.src = `data:audio/mp3;base64,${file}`;
      },
      play(){
        const audioElement = document.getElementById("audio");
        audioElement.play();
      },
      pause(){
        const audioElement = document.getElementById("audio");
        audioElement.pause();
      }
    }
}
</script>

<style scoped>
.music-player{
    width: 100vw;
    height: 100px;
    min-height: 100px;
    
    position: fixed;
    bottom: 0;

    background-color: #1a1a1a;
}
#progress{
    margin: 0;
    padding: 0;
    width: 100%;
    position:relative;
    top: -0.8em;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 0.3em;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(var(--pink), var(--pink));
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 0.3em;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; cursor: pointer;
  height: 1.2em;
  width: 1.2em;
  border-radius: 50%;
  background: white;
  border: solid 2px var(--pink);
  /* cursor: ew-resize; */
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none; cursor: pointer;
  box-shadow: none;
  border: none;
  background: transparent;
}
.bi{
  color:white;
  font-size: 1.5em;
  padding-bottom: 0.3em;
  line-height: 0.8em;
}
.volume-control{
  display: flex;
  justify-content: center;
  align-content: center;
}
.row{
  align-items:center;
  height: 60%;
}
#volume{
  vertical-align: middle;
  margin-top: 0.6em;
  width: 12em;
}
.panel{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.panel a.control{
  cursor: pointer;
  margin: 0 1em;
  transition: transform 0.1s ease-in;
}

.panel a.control:hover{
  transform: scale(1.1);
}

.panel a.control.play-control{
  background: #042259;
  border: solid 3px #CA6AE5;
  padding: 0.2em;
  border-radius: 50%;
}

.panel a.control:not(.play-control){
  margin-top: 0.2em;
}

.panel a.control i.bi{
  transition: color 0.1s ease-in;
  font-size: 1.7em;
}

.panel a.control i.bi:hover{
  color: var(--pink);
}
</style>