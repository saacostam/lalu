<template>
    <div class="navbar">
        <div class="user-image"></div>
        <div class="nav-items">
            <div class="nav-item">
                <router-link :to="{path:'/app/home'}">Home</router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{path:'/app/library'}">Library</router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{path:'/app/artists'}">Artists</router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{path:'/app/home'}">Create a Playlist**</router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{path:'/app/become-artist'}">Become an Artist</router-link>
            </div>
        </div>
        <img src="/lalu_logo 2.png" class="image-responsive" alt="" id="logo">
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
.navbar{
    width: 300px;
    min-width: 300px;
    min-height: calc(100vh - 140px);
    background: linear-gradient(#A325AD , #1a1a1a 20%);
    overflow-y: auto;
}
.user-image{
    width: 8em;
    height: 8em;
    border-radius: 50%;
    background: black;
    box-shadow: 0px 2px 5px 5px rgba(203, 107, 230, 0.42);
    margin: 1.5em auto 0 auto;
}
.nav-items{
    margin: 1em auto 0 auto;
    padding: 1em;
}
.nav-item{
    margin-top: 0.2em;
}
.nav-items .nav-item *{
    text-decoration: none;
    color: white;
    font-weight: 200;
    font-size: 1.2em;
    transition: color 0.2s ease;
}
.nav-items .nav-item *:hover{
    color: #FA62EA;
}
#logo{
    margin: auto auto 0.8em auto;
}
</style>