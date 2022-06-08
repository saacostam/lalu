<template>
    <div class="sb">
        <!--Search bar-->
        <div class="search-bar-container">
            <span class="search-bar">
                <img src="/icons/musical-note-menu.png" alt="search-icon" style="width: 25px;height: 25px;">
                <input id="sb-input" type="text" placeholder="Search for songs, artists, albums" v-model="this.id">
                <img src="/icons/settings.png" alt="settings-icon" data-toggle="modal" data-target="#modal-message"
                style="width: 30px;height: 30px;" @click="getSoapData">
                <button class="btn" style="margin: 0; padding: 0;" @click="logOut"><i class="bi bi-box-arrow-right" style="color:white; font-size:1.4em;"></i></button>
            </span>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modal-message" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Interoperability with group 2E</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" style="color:white">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <b>Id: </b>{{this.id}} <br>
                    <b>Name: </b>{{this.name}} <br>
                    <b>Email: </b>{{this.email}} <br>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SearchBar',
    data:()=>{
        return {
            id:'',
            name:'',
            email:''
        }
    },
    methods:{
        logOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$router.push( {path: '/'} );
        },
        async getSoapData(){
            axios.get( `//34.123.106.254:3009/consume/${this.id}`)
                .then( response => {
                    const data = response.data;
                    console.log(data);
                    this.name = data.user.name;
                    this.id = data.user.id;
                    this.email = data.user.email;
                } ).catch( error => {
                    console.log(error);
                } );
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

.modal-content{
    border: 2px solid #B251FF;
    background-color: #1A1A1A;
    color: white;
}
</style>