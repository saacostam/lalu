<template>
    <div class="nav-bar">
        <div>
            <img src="https://picsum.photos/250/250" class="user-image">
        </div>
        <div class="nav-items">
            <div class="nav-item" :class="{'active':$route.name==='Home'}">
                <router-link :to="{path:'/app/home'}">Home</router-link>
            </div>
            <div class="nav-item" :class="{'active':$route.name==='Library'}">
                <router-link :to="{path:'/app/library'}">Library</router-link>
            </div>
        </div>
        <img src="/lalu_logo 2.png" alt="" id="logo">
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
.nav-bar{
    width: 250px;
    min-width: 250px;
    height: calc(100vh - 100px);
    min-height: calc(100vh - 100px);
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
    display: block;
}
.nav-items{
    display: block;
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
.nav-items .nav-item.active *{
    color: var(--pink);
}
.nav-items .nav-item *:hover{
    color: var(--pink);
}
#logo{
    margin: auto;
    width: 90%;
    height: auto;
}
</style>