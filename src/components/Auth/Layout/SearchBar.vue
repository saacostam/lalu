<template>
    <div class="sb">
        <!--Search bar-->
        <div class="search-bar-container">
            <span class="search-bar">
                <img src="/icons/musical-note-menu.png" alt="search-icon" style="width: 25px;height: 25px;">
                <input id="sb-input" type="text" placeholder="Search for songs, artists, albums">
                <img src="/icons/settings.png" alt="settings-icon" 
                style="width: 30px;height: 30px;" @click="getSoapData">
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
            id:''
        }
    },
    methods:{
        logOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$router.push( {path: '/'} );
        },
        async getSoapData(){
            this.id = prompt("id", "31e5d31c-d36e-441d-a666-37d272f16a35");
            const resp = await fetch(`http://34.123.106.254:3009/consume/${this.id}`);
            // http://34.123.106.254:3009/consume/31e5d31c-d36e-441d-a666-37d272f16a35
            // const resp = await fetch(`http://34.123.106.254:3009/consume/31e5d31c-d36e-441d-a666-37d272f16a35`)
            // alert(JSON.stringify({
            //     "user": {
            //         "id": "31e5d31c-d36e-441d-a666-37d272f16a35",
            //         "name": "User1",
            //         "email": "test_email12345@test.com"
            //     }
            // }));
            alert(JSON.stringify(resp));
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