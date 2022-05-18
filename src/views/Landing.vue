<template>
  <div class="landing">
    <main class = "loginRegister-design">
        <div class="carousel"></div>
        <div class="loginRegister">
            <div class="loginRegister">
                <div class="container">
                    <img src="assets/laluLogo.png" alt="">
                    <div class="button-box">
                        <button type="button"  id="register-btn"  class="register nav-btn">Login</button>
                        <button type="button" id="login-btn" class="login nav-btn">Register</button>
                    </div>
                    <div class="forms-container-login">
                        <div class="signin">
                            <form @submit="login" class="sing-in-form">
                                <h2 class="title">Nice to see you again!</h2>
                                <div class="input-field">
                                    <i class = "fas fa-user"></i>
                                    <input v-model="login_username" type="text" placeholder="Username" required>
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-lock"></i>
                                    <input v-model ="login_password" type="password" placeholder="Password" required>
                                </div>
                                <a href="#">You forgot your password?</a>
                                <input type ="submit" value="Feel the music!" class="btn solid">
                            </form>
                        </div>
                    </div>
                    <div class="forms-container-register">
                        <div class="register">
                            <form action="" class="register-form">
                                <div class="input-field">
                                    <i class="fa-solid fa-address-card"></i>
                                    <input v-model ="registerFirstname" type="text" placeholder="First Name" required>
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-address-card"></i>
                                    <input v-model ="registerLastname" type="text" placeholder="Last Name" required>
                                </div>
                                <div class="input-field">
                                    <i class = "fas fa-user"></i>
                                    <input v-model ="registerUsername" type="text" placeholder="Username" required>
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input v-model ="registerEmail" type="email" placeholder="Email" required>
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-calendar"></i>
                                    <input v-model ="registerDate" type="date" placeholder="Date of birth">
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-lock"></i>
                                    <input v-model ="registerPassword" type="password" placeholder="Password" required>
                                </div>
                                <div class="input-field">
                                    <i class="fa-solid fa-user-lock"></i>
                                    <input v-model ="registerConfirmPassword" type="password" placeholder="Confirm Password" required>
                                </div>
                                <input  type ="submit" value="Rock Up!" class="btn solid">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'Landing',
  data(){
    console.log(this.$apollo);
    return {
      option:'login',
      login_username:'',
      login_password:'',
      registerFirstname:'',
      registerLastname:'',
      registerUsername:'',
      registerEmail:'',
      registerDate:'',
      registerPassword:'',
      registerConfirmPassword:'',
      //getAllPlaylistsAndAlbums :'',
    }
  },
  /*apollo:{
      getAllPlaylistsAndAlbums : gql`{
            
               getAllPlaylistsAndAlbums {
                   _id
                   playlist_username
                   playlist_name
                }
            
         }`
    },*/
  mounted(){
    const login_btn = document.querySelector("#login-btn");
    const register_btn = document.querySelector("#register-btn");
    const container = document.querySelector(".container");

    login_btn.addEventListener('click', () =>{
      this.option = 'register';
      container.classList.add("login-mode");
    });

    register_btn.addEventListener('click', () =>{
      this.option = 'login';
      container.classList.remove("login-mode");
    });
  },
  methods:{
      login(event){
          event.preventDefault();
          this.$apollo.mutate({
              mutation:gql`mutation ($login: LoginInput!){
                  loginUser(login:$login)
              }`,
                variables:{
                    "login": {
                        "user_name": this.login_username,
                        "email": null,
                        "user_password": this.login_password,
                    }
                }
            })
            .then((data)=>{
                this.$router.push({
                    path : "app/home",
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>


.loginRegister-design{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 100vh;
}

.carousel{
    background-image: url("/assets/LoginCarousel.png");
    background-size: cover;
    background-position: center;
}

.container{
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    overflow: hidden;
}

.container:before{
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background:linear-gradient(-45deg, black,#FF78F2);
    top :-20%;
    right: 80%;
    transform: translateY(-50%);
    transition: 1.8s ease-in-out;
}

.container img{
    position: absolute;
    width: 326.98px;
    height: 132.86px;
    left: 180px;
    top: 30px;
    transition: 1.1s .4s ease-in-out;
}


.button-box{
    width: 400px;
    margin: 35px auto;
    top: 150px;
    position: relative;
    z-index: 7;
    transition: 1.1s .4s ease-in-out;
}

/*Register and login refer as btns */
.register{
    font-family: 'Trebuchet MS';
    color: white;
    font-size: 1.2rem;
    padding: 10px 60px;
    cursor: pointer;
    background: transparent;
    border: 0;
    border-bottom : black;
    outline: none;

    position: relative;
}

.register:hover{
    border-bottom : 2px solid #FF78F2;
}

.login{
    font-family: 'Trebuchet MS';
    color: white;
    font-size: 1.2rem;
    padding: 10px 60px;
    cursor: pointer;
    background: transparent;
    border: 0;
    border-bottom : black;
    outline: none;

    position: relative;
}

.login:hover{
    border-bottom : 2px solid #FF78F2;
}

/*Defining the style of the forms*/
.forms-container-login{
    position: absolute;
    width: 100%;
    height: 100%;
    top:280px;
    left: 0;
    transition: 1.1s .4s ease-in-out;
}

.forms-container-register{
    position: absolute;
    width: 100%;
    height: 100%;
    top:800px;
    left: 0;
    transition: 1.1s .4s ease-in-out;
}

form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.title{
    font-size: 1.3rem;
    color: white;
    margin-bottom: 10px;
}

.input-field{
    max-width: 380px;
    width: 100%;
    height: 45px;
    background-color: #39393973;
    margin: 10px 0;
    border-radius: 55px;
    border : 2px solid #B251FF;
    display: grid;
    grid-template-columns: 15% 70%;
    padding: 0 .4rem;
}

.input-field *{
  position: relative;
  bottom:5px;
}

.input-field i{
    text-align: center;
    line-height: 50px;
    color:white;
    font-size: 1.2rem;
}

.input-field input{
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1rem;
    color: white;
}

.input-field input::placeholder{
    color: #dee1d863;
    font-weight: 500;
}
.sing-in-form a{

    display: block;
    text-decoration: none;
    color: white;
    font-size: 0.7rem;
    transition: 0.5s ease-in-out all;
}

.sing-in-form a:hover{
    color:#FF78F2 ;
}

.btn{
    width: 350px;
    height: 70px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background: linear-gradient(0.25turn, #D72EC6,#FF78F2);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 10px 0;
    transition: 0.5s;
}

.btn:hover{
    color: #FF78F2;
    background: linear-gradient(0.25turn, white,white);
}

.container:not(.login-mode) #register-btn{
  border-bottom : 2px solid #FF78F2;
}

.container.login-mode #login-btn{
  border-bottom : 2px solid #FF78F2;
}

/*Animations*/
.container.login-mode:before{
    transform: translate(100%,-50%);
    right: 22%;
}

.container.login-mode  img{
    transform: translateX(800px);
}

.container.login-mode  .button-box{
    transform: translateY(-150px);
}

.container.login-mode .forms-container-login{
    transform: translateX(800px);
}

.container.login-mode .forms-container-register{
    transform: translateY(-700px);
}
</style>