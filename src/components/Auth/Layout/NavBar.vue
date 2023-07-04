<template>
    <div class="nav-bar">
        <div class="nav-container">
            <div class="nav-header">
                <img src="https://picsum.photos/450" alt="Avatar">
            </div>
            <div class="nav-main">
                <nav>
                    <ul class="mx-auto">
                        <li>
                            <router-link class="home-menu" :class="{'active':$route.name==='Home'}" :to="{path:'/app/home'}">
                                <img :src="`/icons/home (${$route.name==='Home' ? 1: 0}).png`"  alt="Home-icon" class="d-inline">
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="library-menu" :class="{'active':$route.name==='Library'||$route.name==='Playlist'}" :to="{path:'/app/library'}">
                                <img :src="`/icons/library(${$route.name==='Library'||$route.name==='Playlist' ? 1: 0}).png`"  alt="Library-icon" class="d-inline">
                                <span>Library</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="artist-menu" :class="{'active':$route.name==='Artists'||$route.name==='Artist'}" :to="{path:'/app/artists'}">
                                <img :src="`/icons/artist(${$route.name==='Artists'||$route.name==='Artist' ? 1: 0}).png`"  alt="artist-icon" class="d-inline">
                                <span>Artists</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="nav-footer">
                <img src="/images/lalu_logo 2.png" alt="Lalu_logo">
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
    min-width: 190px;
    max-width: 190px;
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

.active span{
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