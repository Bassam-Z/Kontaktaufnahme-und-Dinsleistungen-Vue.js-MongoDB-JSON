<template>
    <header>
      <a v-if="this.istEingelogt" href="/" class="logo">Bassam Ali</a>
      <a v-else href="/denstleisungen-Werkzeuge-Kontakt" class="logo">Bassam Ali</a>
      <nav class="navigation" >
        <v-li class="userName" v-if="$store.state.istEingelogt"> Hallo {{this.userData}} </v-li>
        <v-btn v-if="$store.state.istEingelogt" color="#4C1D87" style="margin-right: 10px; text-transform: uppercase;" @click="statsChenge(),logout()" to="/">Log out</v-btn>
        <v-btn v-if="!$store.state.istEingelogt" color="#465EBD" style="margin-right: 10px; text-transform: uppercase;" to="/userLogin"  >Log in</v-btn>
        <v-btn v-if="!$store.state.istEingelogt" color="#4755B5" style="margin-right: 10px; text-transform: uppercase;" to="/userRegister" >Sign Up</v-btn>
        <!-- <router-link :to="{ name: 'userLogin'}">Login</router-link> -->
        <!-- <a href="#services">Dienstleistungen</a>
        <a href="#projects">Werkzeuge</a>
        <a href="#contacts">Kontakt</a> -->
      </nav>
    </header>
      <router-view/>
      <!-- <login v-if="istLogin" :istLogin="istLogin" @closeLogin="istLogin = flase" /> 
        <register v-if="istRegistrieren" :registrieren="registrieren" @closeRegister="istRegistrieren = flase" /> -->
    <footer class="footer">
      <p class="footer-title">Copyrights @ <span>BaSSam Z</span></p>
    <div  class="social-icons">
      <a href="https://www.xing.com/profile/Basam_Ali2/cv" target="_blank"><i class="fa-brands fa-xing"></i></a>
      <a href="https://www.get-in-it.de/mein-account/profil" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </footer> 
</template>

<script>
// import login from './components/login.vue'
// import register from './components/register.vue'
// import HomeSeiteVue from './views/HomeSeite.vue'
// import Login_View from './views/Login_View.vue'
// import Register_View from './views/Register_View.vue'
// import IstSignUp from './main'


export default {
  name:'App',
  // components:{login, register, HomeSeiteVue, Login_View,Register_View},
  props:['istLogin'],
  beforeRouteLeave(to, from, next) {
    this.$store.commit("CLEAR_STORE");
    next();
  },
  data(){
    return{
      userData: null
      // istLogin: IstSignUp.istSignIn,
      // istRegistrieren: IstSignUp.istSigenUp,
      // to: ''
    }
  },

  mounted(){
    this.statsChenge();
    this.getUserData();
    
  },
  updated(){
    // this.istLogin = true
  },
  methods:{
    getUserData(){
      let Data = localStorage.getItem('User-Info');
      // console.log(Data)
      this.userData = Data ;
      console.log(this.userData + ' user Data')
      // console.log(this.userData)
    },
    // istWas(val1, val2){
    //   IstSignUp.istSignIn = val1;
    //   IstSignUp.istSignUp = val2;
    // }
    statsChenge(){
      this.$store.commit('statusChengeFalse');
      // this.logout();
    },
    loginClicken(){
      this.istLogin = true
    },
    RegisterClicken(){
      this.istRegistrieren = true
      },
    logout() {
      // Löschen des Store-Inhalts und des Local Storage beim Ausloggen
      this.$store.commit("CLEAR_STORE");
      localStorage.removeItem('User-Info')
      // localStorage.removeItem("user");
    }
  }
}


</script>

<style>
.userName  {
    font-weight:bolder;
    /* text-transform: uppercase; */
    font-size: 20px;
    margin-right: 1rem;
    color: #1c3dc0;
}
.btn{
  color: rgb(17, 108, 255);
}
header{
    background-color: rgb(236, 236, 236);
    width: 100% ;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 50px;
}

.logo {
    text-decoration: none;
    color: rgb(17, 108, 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8em;
}

.navigation a{
    color:  rgb(246, 246, 246);
    text-decoration: none;
    text-align: center;
    font-size: 1.1em;
    font-weight: 500;
    padding-left: 20px;
}

.navigation a:hover{
    color: rgb(109, 83, 255);
}
/* .logo {
  display: block;
  margin: 0 auto 2rem;
}*/

.footer{
    background-color: #0f0f50;
    color: aliceblue;
    padding: 2em;
    display: flex;
    justify-content: space-between;
}
.footer-title{
    font-size: 1.3em;
    font-weight: 600;
}

.footer-title span{
    color: rgb(17, 108, 255);
}

.footer .social-icons a{
    font-size: 1.3em ;
    color: aliceblue;
    padding: 0 12px 0 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
 /* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


nav a:first-of-type {
  border: 0;
}  */

</style>