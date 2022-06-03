<template>
    <div class="music-player">
        <input type="range" id="progress" v-model="this.currentTime" min="0" :max="this.totalTime" :style="`background-size: ${this.currentTime*100/this.totalTime}% 100%;`">
        <audio id="audio" :src="`https://storage.googleapis.com/lalu-data-storage/songs/${this.$store.state.currentSong._id}.mp3`">
        </audio>
        <span class="time time-elapsed">{{formatTime(this.currentTime)}}</span>
        <span class="time time-left">-{{formatTime(this.totalTime-this.currentTime)}}</span>

        <div class="row">
          <div class="volume-control col-md-4 col-4">
            <i class="bi bi-volume-down d-none d-md-block"></i>
            <input type="range" id="volume" v-model="this.volume" min="0" :max="100" :style="`background-size: ${this.volume*100/100}% 100%;`">
            <i class="bi bi-volume-up"></i>
          </div>

          <div class="panel col-md-4 col-5">
            <a class="control strategy" @click="toggleShuffle"><i :class="{'active':this.strategy==='shuffle'}" class="bi bi-shuffle"></i></a>
            <a class="control"><i class="bi bi-skip-start"></i></a>
            <a class="control play-control" @click="play" v-if="this.isPlaying==false"><i class="bi bi-play"></i></a>
            <a class="control play-control" @click="pause" v-else><i class="bi bi-pause"></i></a>
            <a class="control"><i class="bi bi-skip-end"></i></a>
            <a class="control strategy" @click="toggleRepeat"><i :class="{'active':this.strategy==='repeat'}" class="bi bi-arrow-repeat"></i></a>
          </div>

          <div class="info col-md-4 col-3" v-if="this.$store.state.currentSong.title||this.$store.state.currentSong.artist||this.date">
            <div class="image d-none d-md-block"></div>
            <div class="info-table d-none d-md-block">
              <span class="title">{{this.$store.state.currentSong.title}}</span>
              <span class="artist">{{this.$store.state.currentSong.artists[0]}}</span> 
              <span class="date">{{this.date}}</span>
            </div>
            <div class="wrapper-like">
              <a class="like"><i class="bi bi-heart-fill"></i><span class="n-likes">{{this.likes}}</span></a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusicPlayer',
    data(){
      return {
        currentTime: 0,
        totalTime: 0,
        volume: 50,
        src:'',
        isPlaying:false,
        strategy:'order',
        date: 2022,
        likes: '0'
      }
    },
    mounted(){
      const audioElement = document.getElementById("audio");
      audioElement.addEventListener("ended", ()=>{
        audioElement.pause();
      })

      audioElement.addEventListener('abort', ()=>{
        audioElement.play();
      })

      audioElement.addEventListener("timeupdate", ()=>{
        this.currentTime = audioElement.currentTime;
      })

      audioElement.addEventListener("canplay", ()=>{
         audioElement.play();
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
    },
    watch: {
      volume: function(vol) {
        const audioElement = document.getElementById("audio");
        audioElement.volume = vol/100;
      }
    },
    methods:{
      load(){
        const audioElement = document.getElementById("audio");
        // audioElement.src = `data:audio/mp3;base64,${file}`;
        audioElement.src = 'https://storage.googleapis.com/lalu-data-storage/songs/62718e54b9621e3a0066d49f.mp3';
      },
      play(){
        const audioElement = document.getElementById("audio");
        audioElement.play();
      },
      pause(){
        const audioElement = document.getElementById("audio");
        audioElement.pause();
      },
      toggleShuffle(){
        if (this.strategy === 'shuffle'){
          this.strategy = 'linear';
        }else{
          this.strategy = 'shuffle';
        }
      },
      toggleRepeat(){
        if (this.strategy === 'repeat'){
          this.strategy = 'linear';
        }else{
          this.strategy = 'repeat';
        }
      },
      formatTime(sec){
        const sec_num = parseInt(sec, 10); // don't forget the second param
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        if (hours!=='00'){
          return hours+':'+minutes+':'+seconds;
        }
        return minutes+':'+seconds;
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
.time{
  position:absolute;
  color: white;
  top: 0.8em;
  font-size: 0.7em;
  cursor:pointer;
}
.time-elapsed{
  left: 0.3em;
}
.time-left{
  right: 0.3em;
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
.panel a.control i.bi.active{
  color: var(--pink);
}
.panel a.control.strategy i.bi{
  font-size: 1.3em;
  margin-top: 5em;
  line-height: 1.3em;
}
.bi-play{
  margin-left: 0.1em;
}
.info{
  display: flex;
  flex-direction: row;
}
.info .image{
  min-width: 3.8em;
  min-height: 3.8em;
  background-color: #042259;
  background-image:url('/images/reproductor_image.jpg');
  background-size: contain;
  color: white;
  border-radius: 0.7em;
}
.info-table{
  margin-left: 1em;
}
.info-table span{
  display: block;
  color: white;
}
.info-table span.title{
  display: block;
  font-size: 1.2em;
  line-height: 1.2em;
}
.info-table span.artist{
  font-size: 0.7em;
}
.info-table span.date{
  font-size: 0.7em;
}
.wrapper-like{
  flex: auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
.wrapper-like .like{
  flex: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}
.wrapper-like .like i{
  background-color: #ffffff40;
  height: 2em;
  width: 2em;
  text-align: center;
  line-height: 1.9em;
  border-radius: 50%;

  transition: color 0.1s ease-in, transform 0.1s ease-in;
}
.wrapper-like .like i:hover{
  color: var(--pink);
  transform: scale(1.05);
}
span.n-likes{
  position: absolute;
  color: white;
  top: 3.3em;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  #volume{
    margin-left: 0.5em;
    width: calc(100%);
  }

  .panel a.control{
    margin: 0 0.5em;
  }
}
</style>