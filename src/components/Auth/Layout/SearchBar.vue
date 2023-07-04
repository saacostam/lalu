<template>
    <div class="sb">
        <div class="search-bar-container">
            <span class="search-bar">
                <img src="/icons/musical-note-menu.png" alt="search-icon" style="width: 25px;height: 25px;">
                <input id="sb-input" type="text" placeholder="Search...">
                <img src="/icons/settings.png" alt="settings-icon" 
                style="width: 30px;height: 30px;" >
                <button class="btn" style="margin: 0; padding: 0;" @click="logOut"><i class="bi bi-box-arrow-right" style="color:white; font-size:1.4em;"></i></button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data:()=>{
        return {
        }
    },
    methods:{
        logOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$router.push( {path: '/'} );
        }
    }
}
</script>

<style scoped>
/*Search-bar*/
.sb{
    padding: 0 2.5em;
}
.search-bar-container {
    width: 100%;
    margin-top: 10px;
    height: 50px;
}

.search-bar{
    margin-top:12px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-bar *{
    margin: 0 0.5em;
}

.search-bar img:hover {
    cursor: pointer;
}

.search-bar input {
    width: 90%;
    background: rgba(255, 249, 249, 0.13);
    border-radius: 100px;
    padding: 5px 0px 5px 10px;
    font-size: 15px;
    color: #FFFFFF;
    margin: 0px 5px 0px 5px;
}
#sb-input:focus {
    border: none;
    border: 1px solid #B251FF !important;
    transition: 0.3s;
}
input {
    border: 0;
}
input:focus,
textarea:focus,
select:focus {
    outline: none;
}
/*==============================*/
</style>