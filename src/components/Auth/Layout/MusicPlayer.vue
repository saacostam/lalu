<template>
    <div class="music-player">
        <audio id="audio" src="https://raw.githubusercontent.com/saacostam/vanilla-dj-app/main/songs/Music Pack 1/Daft Punk - One More Time.mp3"></audio>
        <input type="range" id="progress">
    </div>
</template>

<script>
export default {
    name: 'MusicPlayer'
}
</script>

<style scoped>
.music-player{
    width: 100vw;
    height: 140px;
    min-height: 140px;
    
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
</style>