<template>
    <div class="home-container">
        <div class="home-header">
            <img src="/images/Lalu-home-header-font.png" alt="Font" >
            <img src="/images/Sound-wave-1.png"  class="home-header-wave" alt="wave">
            <div class="user-name">
                <h2>Hi {{ this.$store.state.username}}!</h2>
            </div>
        </div>
        <div class="home-main-contain">
            <h2>
                Popular Songs
            </h2>
            <div class="popular-songs">
                <!--EXAMPLE OF ALL VIEW-->
                    <!--Main component-->
                    <div class="song-card">
                        <img src="/images/dua-lipa.png" alt="dualipa" >
                        <div class="contain-info">
                            <div class="text-content">
                                <section class="song-name">
                                    <h3>
                                        Levitating
                                    </h3>
                                </section>
                                <section class="artist-name">
                                    <h3>
                                        Dua Lipa
                                    </h3>
                                </section>
                            </div>
                            <div class="music-play">
                                <img src="/icons/play-content.png" alt="play-button" >
                            </div>
                        </div>
                    </div>
                        <!--Main component-->

                <!--Repetition-->
                <div class="song-card">
                    <img src="/images/ariana-grande.png" alt="Ariana grande" >
                    <div class="contain-info">
                        <div class="text-content">
                            <section class="song-name">
                                <h3>
                                    Breathin
                                </h3>
                            </section>
                            <section class="artist-name">
                                <h3>
                                    Ariana Grande
                                </h3>
                            </section>
                        </div>
                        <div class="music-play">
                            <img src="/icons/play-content.png" alt="play-button" >
                        </div>
                    </div>
                </div>
                <div class="song-card">
                    <img src="/images/avril-artist.png" alt="dualipa" >
                    <div class="contain-info">
                        <div class="text-content">
                            <section class="song-name">
                                <h3>
                                    Bite Me
                                </h3>
                            </section>
                            <section class="artist-name">
                                <h3>
                                    Avril Lavigne
                                </h3>
                            </section>
                        </div>
                        <div class="music-play">
                            <img src="/icons/play-content.png" alt="play-button" >
                        </div>
                    </div>
                </div>
                <div class="song-card">
                    <img src="/images/calvin-harris.png" alt="dualipa" >
                    <div class="contain-info">
                        <div class="text-content">
                            <section class="song-name">
                                <h3>
                                    Summer
                                </h3>
                            </section>
                            <section class="artist-name">
                                <h3>
                                    Calvin Harris
                                </h3>
                            </section>
                        </div>
                        <div class="music-play">
                            <img src="/icons/play-content.png" alt="play-button" >
                        </div>
                    </div>
                </div>
                <div class="song-card">
                    <img src="/images/the-weeknd.png" alt="dualipa" >
                    <div class="contain-info">
                        <div class="text-content">
                            <section class="song-name">
                                <h3>
                                    Blinding Lights
                                </h3>
                            </section>
                            <section class="artist-name">
                                <h3>
                                    The Weeknd
                                </h3>
                            </section>
                        </div>
                        <div class="music-play">
                            <img src="/icons/play-content.png" alt="play-button" >
                        </div>
                    </div>
                </div>
                <!--Repetition-->

                
            <!--Artitst section-->
            </div>
            <h2>
                Artists
            </h2>
            <div class="home-artist">
                <!--Artist-card-->
                <div class="artist-card">
                    <img src="/images/ariana-grande.png" alt="ariana-grande">
                    <section class="artist-name">
                        <h3>
                            Ariana Grande
                        </h3>
                    </section>
                </div>
                <!--Artist-card-->

                <!--Examples-->
                    <div class="artist-card">
                        <img src="/images/dua-lipa.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                Dua Lipa
                            </h3>
                        </section>
                    </div>
                    <div class="artist-card">
                        <img src="/images/the-weeknd.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                The Weeknd
                            </h3>
                        </section>
                    </div>
                    <div class="artist-card">
                        <img src="/images/avril-artist.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                Avril Lavigne
                            </h3>
                        </section>
                    </div>
                    <div class="artist-card">
                        <img src="/images/billie-eilish.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                Billie Eilish
                            </h3>
                        </section>
                    </div>
                    <div class="artist-card">
                        <img src="/images/little-mix.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                Little Mix
                            </h3>
                        </section>
                    </div>
                    <div class="artist-card">
                        <img src="/images/maroon-v.png" alt="ariana-grande">
                        <section class="artist-name">
                            <h3>
                                Maroon V
                            </h3>
                        </section>
                    </div>
                <!--Examples-->
            </div>
        </div>
       <hr class="pt-6">
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Trebuchet MS', 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #101010;
}

input {
    border: 0;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
}

.flex-container {
    display: flex;
    flex-direction: row;
}

/*Home-container*/

.home-container {
    padding: 3.2em;
    display: flex;
    flex-direction: column;
}


/*Home-header*/

.home-header {
    width: auto;
    height: auto;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 5px;
}

.home-header img {
    width: 995px;
    height: 178px;
    mix-blend-mode: hard-light;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    height: inherit;
    width: 100%;
}

.home-header .home-header-wave {
    width: 300px;
    height: 150px;
    position: absolute;
    right: -12%;
    top: -35px;
    transform: translate(-50%, -50%);
}

.home-header .user-name {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
}

.home-header .user-name h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 56px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #FFFFFF;
}


/*Home-body*/

.home-main-contain {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
}


/* Home title */

.home-main-contain h2 {
    color: #FFFFFF;
    font-size: 30px;
    margin: 5px;
}


/*==============================*/


/*Home-body-songs-part*/

.home-main-contain .popular-songs {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
}

.song-card {
    width: 175px;
    height: 212px;
    display: flex;
    flex-direction: column;
    background-color: rgba(41, 41, 41, 0.31);
    border-radius: 15px;
    margin: 10px;
}


/*contain-info: info of song and play icon*/

.contain-info {
    display: flex;
    flex-direction: row;
}

.text-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.song-card .music-play {
    margin-top: 30px;
    margin-left: 10px;
}

.song-card .music-play img {
    width: 40px;
    height: 40px;
    opacity: 0;
}

.song-card:hover {
    box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -webkit-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -moz-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    transition: .2s;
    cursor: pointer;
}

.song-card:hover .music-play img {
    opacity: 1;
    transition: .6s;
}

.song-card img {
    width: 175px;
    height: 156px;
    border-radius: 15px;
}

.song-card .song-name {
    margin: 10px 0px 1px 10px;
}

.song-card .song-name h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #FFFFFF;
}

.song-card .artist-name {
    margin: 2px 0px 2px 10px;
}

.song-card .artist-name h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #B594B1;
}


/*==============================*/


/*Song artirt-part*/

.home-main-contain .home-artist {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.artist-card {
    width: 100px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin: 20px;
}

.artist-card:hover {
    cursor: pointer;
}

.artist-card img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
}

.artist-card img:hover {
    box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -webkit-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    -moz-box-shadow: 0px 4px 4px rgba(203, 107, 230, 0.42);
    transition: .2s;
}

.artist-card .artist-name {
    margin: 10px 0px 0px 0px;
}

.artist-card .artist-name h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #FFFFFF;
}
</style>