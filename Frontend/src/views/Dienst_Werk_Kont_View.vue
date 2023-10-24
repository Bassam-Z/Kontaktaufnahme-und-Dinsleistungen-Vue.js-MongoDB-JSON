<template>
    <div>
    <!-- <section class="main">
            <div>
                <h2> Hallo ich bin Bassam Ali <br><span>Anwendung Entweklier</span></h2>
                <h3> Ich entwikle Web Anwendungen</h3>
                <a href="#projects"  class="main-btn">Dienstleistungen und Werkzeuge</a>
                <div class="social-icons">
                <a href="https://www.xing.com/profile/Basam_Ali2/cv" target="_blank"><i class="fa-brands fa-xing"></i></a>
                <a href="https://www.get-in-it.de/mein-account/profil" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </diV>
        </section> -->
        <Dienstleistungen/>
        <!-- <p style="color:black;">{{$store.state.istEingelogt}}</p> -->
        <!-- <v-btn @click="statsChenge()">test</v-btn> -->
        <div v-if="Werkz.length"> 
            <Werkzeuge :Werkz="Werkz"/>
        </div>
        <div v-else style="text-align: center;">Loading...</div>
        <KontaktDaten :eingelogt="eingelogt" :nachrichtOffnen ="nachrichtOffnen" @close="toggleNachricht"> <h3>Hallo von slot!</h3> </KontaktDaten>
    </div>
</template>

<script>
import Dienstleistungen from '../components/Dienstleistungen.vue'
import Werkzeuge from '../components/Werkzeuge.vue'
import KontaktDaten from '../components/KontaktDaten.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import getWerkzeug from '../composables/getWerkzeug'
// import {nameStore} from '../../store';
export default {
    name:"HomeSeite",
    components: {Werkzeuge, KontaktDaten, Dienstleistungen, login, register},
    setup(){
        const {Werkz, error, load} = getWerkzeug()

        load()
        
        return {Werkz, error}
    },
    data(){
        return{
            // istWas: nameStore(),
            istEingelogt: 0,
            nachrichtOffnen: false,
            einlogen: false,
            eingelogt: true,
            registrieren:false,
            registriert: false,
        }
    },
    mounted(){
        this.statsChenge()
        console.log('Login Dialog ist mounted!')
    },
    methods:{
        toggleNachricht(){
            this.nachrichtOffnen = !this.nachrichtOffnen

        },
        statsChenge(){
            this.$store.commit('statusChenge');
        },
    }
}
</script>

<style>

.main{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: url(../images/Bassam.png);
    background-size:cover;
    background-attachment: fixed;
}

.main h2 {
    color: aliceblue;
    font-size: 1.4em;
    font-weight: 500;
}

.main h2 span {
    display: inline-block;
    margin-top: 10px;
    color: rgb(17, 108, 255);
    font-size: 3em;
    font-weight: 600;
}

.main h3 {
    color: aliceblue;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 30px;
}

.main-btn{
    color: aliceblue;
    background-color: rgb(17, 108, 255);
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 600;
    display: inline-block;
    padding: 0.9em 2.1em;
    letter-spacing: 1px;
    border-radius: 15px;
    margin-bottom: 40px;
    transition: 0.7 ease;

}
.main-btn:hover{
    background-color: rgb(25, 152, 255);
    transform: scale(1.1) ;
}

.social-icons a {
    color: aliceblue;
    font-size: 1.7em;
    padding-right: 30px;
}
</style>