<template>
    <div class="text-center">
            <v-card class="intro">
                <v-form  >
                    <v-container class="modal-content" >
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 " id="exampleModalLabel">Login</h1>
                        <br>
                        <!-- <button class="btn-close" @click="this.loginDialogClose()" ></button> -->
                    </div>
                    <v-row class="modal-body ">
                        <v-col cols="12" sm="6">
                                <v-text-field
                                v-model="user.emailAdress"
                                :error-messages="this.emailerrorMessages"
                                :rules="[rules.required, rules.min, rules.email]"
                                ref="user.emailAdress"
                                label="User-ID:"
                                ></v-text-field>
                            </v-col>
                        <v-col cols="12" sm="6">
                                <v-text-field
                                v-model="user.kennenwort"
                                :error-messages="this.kennenworterrorMessages"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]"
                                :type="show1 ?  'text' : 'password' "
                                name="input-10-1"
                                ref="user.kennenwort"
                                label="kennenwort:"
                                class="input-group--focused"
                                @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                    <v-card-actions class="modal-footer"> 
                        <p style="margin-right: auto;font-size: 11px;">haben Sie keinen  User-ID ? drucken Sie <a href="/userRegister">hier!</a></p>
                        <v-btn class="btn" style="color:#4c1d87 ;"  @click="userLogin()">Login</v-btn>
                        <!-- <v-btn @click="statsChenge()">test</v-btn> -->
                        <!-- <v-btn class="btn btn-primary" style="margin-right: 10px;" @click="this.loginDialogClose()" >Schließen</v-btn> -->
                    </v-card-actions> 
                    </v-container>
                </v-form>
            </v-card>
    </div>
</template>

<script>
import axios from 'axios';
// import {nameStore} from '../../store';
export default {
    name:'Anmelden',
    props:['istLogin'],
    data(){
    return{
        
        
        // istWas: nameStore(),
        showLoginDialog: true,
        errorMessages: "",
        emailerrorMessages:'',
        kennenworterrorMessages: '',

        user:{
            emailAdress:'',
            kennenwort:'',
            anrede: null,
            vorname: null,
            nachname: null,
        },
        show1: false,
        show2: false,

            rules: {
                required: value => !!value || 'Pflicht Fild.',
                min: v => v.length >= 3 || 'Min 3 characters',
                email: () => this.validateEmail || 'ungültig',
            }
    }
    },
    watch: {
       
      name () {
        this.errorMessages = '';
        this.kennenworterrorMessages= '';
        this.emailerrorMessages = '';
      },
      emailAdress(value) {
        // binding this to the data value in the email input
        this.emailAdress = value;
        // this.validateEmail(value);
      }
    },
    mounted(){
        // this.statsChenge()
        console.log('Login Dialog ist mounted!')
        

        // fetch('/api/user/login', { method: 'POST', body: {...} })
        // .then(res => res.json())
        // .then(data => {
        // this.anrede = data.anrede;
        // this.vorname = data.vorname;
        // this.nachname = data.nachname;
        // })
        // .catch(err => {
        // console.log(err);
        // });
    },
    updated(){
        console.log('Login Dialog ist uptated!')
    },
    unupdated(){
        console.log('Login Dialog ist unuptated!')
    },
    setup(){
    },

    computed: {
        validateEmail() {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(this.user.emailAdress)
        },
    },
    methods:{
         
        
        loginDialogClose(){
            
            this.showLoginDialog = false
            this.$emit('closeLogin')
            this.kennenworterrorMessages= '';
            this.emailerrorMessages = '';
        },
        statsChenge(){
            this.$store.commit('statusChenge');
        },
        // increment() {
        // this.$store.commit('increment')
        // },
    //     loginData () {
    //     axios.post('http://localhost:8000/api/userLogin', this.user)
    //     .then(
    //         ({data}) => {
    //             console.log(data.status);
    //             try{
    //                 if(data.status === true){
    //                     alert("Login Successfully");
                        
    //                     // this.$router.push({name: 'user'})
    //                 }else{
    //                     alert("Login faild")
    //                 }
    //             }catch(err){
    //                 alert("Error, Plase try again")
    //             }
    //         }
    //     )
    //   }
    async userLogin(){
        const emailAdress = this.user.emailAdress;
        const kennenwort = this.user.kennenwort;
        // let anrede = this.user.anrede;
        // let vorname = this.user.vorname;
        // let nachname = this.user.nachname;
        console.log(' login');
        try {
            const res = await fetch('http://localhost:8000/api/userLogin', {
                method: 'POST',
                body: JSON.stringify({ emailAdress, kennenwort}),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            this.emailerrorMessages = '';
            this.kennenworterrorMessages= '';
            console.log(data + ' log');
            if(data.errors){
                console.log(data.errors.emailAdress);
                console.log(data.errors.kennenwort);
                const emailError = data.errors.emailAdress;
                const kennenwortError = data.errors.kennenwort;
                this.emailerrorMessages = emailError;
                this.kennenworterrorMessages = kennenwortError;
            }
            if(data.user){
                // this.increment();
                // const userData = {
                //     anrede: data.anrede,
                //     vorname: data.vorname,
                //     nachname: data.nachname,
                // }
                // axios.get()
                console.log(data.user + 'test');
                
                // this.user.anrede = data.anrede;
                // this.user.vorname = data.vorname;
                // this.user.nachname = data.nachname;
                localStorage.setItem('User-Info', this.user.vorname)
                console.log(this.user.nachname)
                // this.$store.dispatch('setUser', data)
                // localStorage.setItem('userData', JSON.stringify(userData));
                location.assign('/denstleisungen-Werkzeuge-Kontakt');
                this.loginDialogClose();
            }

        } catch (error) {
            console.log(error);
        }
    }
},

}
</script>

<style scoped>
.intro{
  color: #4755B5;
    font-size:  20px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}
</style>