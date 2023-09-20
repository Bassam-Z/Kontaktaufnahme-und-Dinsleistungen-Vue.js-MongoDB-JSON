<template>
    <section class="main">
        <div>
            <h2> Hallo ich bin Bassam Ali <br><span>Anwendung Entweklier</span></h2>
            <h3> Ich entwikle Web Anwendungen</h3>
            <a href="/userLogin"  class="main-btn">Dienstleistungen zeigen</a>
            <!-- @click="redirectToDienstleistungen()" -->
            <GoMap/>
            <br>
            <div class="social-icons">
            <a href="https://www.xing.com/profile/Basam_Ali069223/cv" target="_blank"><i class="fa-brands fa-xing"></i></a>
            <a href="https://www.linkedin.com/in/basam-ali-700856273/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </diV>
    </section> 
</template>

<script>
// import { MglMap, MglNavigationControl } from 'vue-maplibre-gl'
// import axios from 'axios';
// import L from 'leaflet';
// import Dienstleistungen from '../components/Dienstleistungen.vue'
// import Werkzeuge from '../components/Werkzeuge.vue'
// import KontaktDaten from '../components/KontaktDaten.vue'
// import getWerkzeug from '../composables/getWerkzeug'
import { ClearDepth } from 'maplibre-gl';
import GoMap from '../components/GoMap.vue'
export default{
    name:"HomeSeite",
    components:{ GoMap, ClearDepth },
    // data(){
    //     return{
    //         nachrichtOffnen: false,
    //         einlogen: false,
    //         registrieren:false,
    //         registriert: false,
    //         inhaltZeigen: false
    //     }
    // },
    mounted() {
    },
    ////////////////////////////
    // mounted() {
    // this.initMap();
    // },
    computed: {
        // unincrement() {
        //     this.$store.commit('unincrement')
        // }
        
        
    },
    methods:{
        // async redirectToDienstleistungen() {
    //         try {
    //         const res = await fetch('http://localhost:8000/api/denstleisungen-Werkzeuge-Kontakt', {
    //             method: 'GET',
    //         });
    //         const data = await res.json();
    //         if(data.errors){
    //             location.assign('/userLogin');
    //         }
    //         if(data.user){
    //             // this.increment();
    //             location.assign('/denstleisungen-Werkzeuge-Kontakt');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    //     async redirectToDienstleistungen() {
    //         try {
    //         const res = await fetch('http://localhost:8000/api/denstleisungen-Werkzeuge-Kontakt', {
    //             method: 'GET',
    //         });
    //         const data = await res.json();
    //         if(data.errors){
    //             location.assign('/userLogin');
    //         }
    //         if(data.user){
    //             // this.increment();
    //             location.assign('/denstleisungen-Werkzeuge-Kontakt');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
        // axios.get('/denstleisungen-Werkzeuge-Kontakt').then(response => {
        // if(response.data.status === 'success') {
        //     this.$router.push('/denstleisungen-Werkzeuge-Kontakt');
        // } else {
        //     this.$router.push('/userLogin');
        // }
        // }).catch(error => {
        // console.log(error);
        // toggleNachricht(){
        //     this.nachrichtOffnen = !this.nachrichtOffnen

        // },
        // showInhalt(){
        //     this.inhaltZeigen = true;
        // }
        
    }
}

</script>

<style scoped >
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
    text-shadow: 1px 1px 5px #e9aed3;
}

.main h2 span {
    display: inline-block;
    margin-top: 10px;
    color: rgb(17, 108, 255);
    font-size: 3em;
    font-weight: 600;
    text-shadow: 1px 3px 5px #5c419d;
}

.main h3 {
    color: aliceblue;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 3px #e9aed3;
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
    position: relative;
    color: aliceblue;
    font-size: 1.7em;
    padding-right: 30px;
}

template section div div  {
    border-radius: 15px;
}

</style>