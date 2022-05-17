<template>
    <div class="nav-bar">
        <div class="nav-container">
            <div class="nav-header">
                <img src="https://picsum.photos/125/125" alt="Avatar">
            </div>
            <div class="nav-main">
                <nav>
                    <ul>
                        <li>
                            <span class="home-menu" :class="{'active':$route.name==='Home'}">
                                <img src="/icons/home (1).png"  alt="Home-icon" >
                                <router-link :to="{path:'/app/home'}">Home</router-link>
                            </span>
                        </li>
                        <li>
                            <span class="library-menu" :class="{'active':$route.name==='Library'}">
                                <img src="/icons/library(0).png"  alt="Library-icon" >
                                <router-link :to="{path:'/app/library'}">Library</router-link>
                            </span>
                        </li>
                        <li>
                            <span class="artist-menu" :class="{'active':$route.name==='Artists'}">
                                <img src="/icons/artist(0).png"  alt="artist-icon" >
                                <router-link :to="{path:'/app/artists'}">Artists</router-link>
                            </span>
                        </li>
                        <li>
                            <span class="be-artist-menu" :class="{'active':$route.name==='BecomeArtist'}">
                                <img src="/icons/be-artist(0).png"  alt="headphones-icon" >
                                <router-link :to="{path:'/app/become-artist'}">Be an Artist</router-link>
                            </span>
                        </li>
                        <!--
                    <li>
                        <span class="upload-menu">
                            <img src="icons/cloud-upload(0).png"  alt="upload-icon" >
                            <a href="#">upload Song</a>
                        </span>
                    </li>
                    <li>
                        <span class="artist-profile-menu">
                            <img src="icons/artist-profile(0).png"  alt="artist-profile-icon" >
                            <a href="#">Artist profile</a>
                        </span>
                    </li>
                    -->
                    </ul>
                </nav>
            </div>
            <div class="nav-footer">
                <img src="/images/lalu_logo 3.png" alt="Lalu_logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data:()=>{
        return {
        }
    }
}
</script>

<style scoped>
.nav-main nav ul li *{
    margin: 0.3em;
}
.nav-bar{
    overflow-y: auto;
    width: 190px;
}
/*==============================*/
/* nav style */

.nav-container{
    width: 190px;
    height: 100%;
    background: linear-gradient(180deg, #A325AD 0%, #1A1A1A 17.19%);
    transform: rotate(0.05deg);
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Inter', sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* nav-bar header */
.nav-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

.nav-header img{
    border-radius: 200px;
    width : 125px; 
    height : 125px;
    margin: 30px 20px 30px 20px;
    -webkit-box-shadow: 0px 2px 5px 5px rgba(203, 107, 230, 0.42);
    -moz-box-shadow: 0px 2px 5px 5px rgba(203, 107, 230, 0.42);
    box-shadow: 0px 2px 5px 5px rgba(203, 107, 230, 0.42); 

}

/*nav main style */

.nav-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    list-style: none;
    text-decoration: none;
    height: 45%;
}

.nav-main ul{
    list-style: none;
    margin: auto;
    padding: 0;
}

.nav-main li{
    margin: 5px;
}
.nav-main a{
    color: #FFFFFF;
    text-decoration: none;
}
.nav-main img{
    width: 25px;
    height: 25px;
    margin: 5px;
}
.home-menu, .library-menu, .artist-menu, .be-artist-menu, .upload-menu, .artist-profile-menu{
    opacity: 0.2;
}
.home-menu:hover , .library-menu:hover , .artist-menu:hover , .be-artist-menu:hover, .upload-menu:hover, .artist-profile-menu:hover{
    opacity: 1;
    transition: 0.3s;
}
.upload-menu img{
    width: 30px;
    height: 30px;
    margin: 5px 5px 5px 3px;
}

.artist-profile-menu img{
    width: 30px;
    height: 30px;
    margin: 5px 5px 5px 3px;
}

/*Example of select option*/
.active{
    opacity: 1;
}

span.active *{
    color: #FA62EA;
}


/*nav footer*/
.nav-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: 15px;
}

.nav-footer img{
    width: 150px;
    height: 60px;
}

/*==============================*/
</style>