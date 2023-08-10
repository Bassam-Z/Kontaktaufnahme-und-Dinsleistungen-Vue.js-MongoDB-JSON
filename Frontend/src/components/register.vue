<template>
    <!-- <v-sheet class="bg-deep-purple pa-12" rounded > -->
        <!-- <v-dialog v-model="showRegisterDialog" width="1024px" > -->
            <v-card ref="form" >
                <!-- <v-form> -->
                    <v-container  class="modal-content" >
                        <div class="modal-header" style="margin-bottom: 16px;">
                           <h1 class="modal-title fs-5" id="exampleModalLabel">Registrieren</h1>
                           <br>
                           <!-- <button class="btn-close" @click="this.RegisterDialogClose()" ></button> -->
                       </div> 
                        <v-row >
                            <v-col cols="12" sm="6">
                                <v-select
                                v-model="user.anrede"
                                :error-messages="errorMessages"
                                :rules="[rules.required]"
                                ref="user.anrede"
                                label="Anrede:"
                                :items="['Herr', 'Frau']"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                v-model="user.emailAdress"
                                ref="user.emailAdress"
                                :error-messages="errorMessages"
                                class="form-label"  
                                type="email" 
                                variant="outlined" 
                                label="E-Mail:"
                                clearable
                                :rules="[rules.required, rules.min, rules.email]"
                                hide-details="auto"
                                ></v-text-field>
                                <!-- <span style="color: red;">{{validateEmail ? 'Valid' : 'Invalid'}}</span> -->
                            </v-col>
                            <v-col cols="12" sm="6" >
                                <v-text-field 
                                v-model="user.vorname"
                                ref="user.vorname"
                                :error-messages="errorMessages"
                                class="form-label"  
                                type="text" 
                                variant="outlined" 
                                label="Vorname:"
                                clearable
                                :rules="[rules.required, rules.min]"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                v-model="user.emailWiederholung"
                                ref="user.emailWiederholung"
                                :error-messages="errorMessages"
                                class="form-label"  
                                type="text" 
                                variant="outlined" 
                                label="E-Mail Wiederholung:"
                                clearable
                                :rules="[rules.required, rules.min, rules.email, rules.emailMatch]"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>     
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                v-model="user.nachname"
                                ref="user.nachname"
                                :error-messages="errorMessages"
                                class="form-label"  
                                type="text" 
                                variant="outlined" 
                                clearable 
                                label="Nachname:"
                                :rules="[rules.required, rules.min]"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                v-model="user.kennenwort"
                                ref="user.kennenwort"
                                :error-messages="errorMessages"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]"
                                :type="show1 ?  'text' : 'password' "
                                name="input-10-1"
                                variant="outlined"
                                clearable 
                                label="Kennewort:"
                                @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select
                                v-model="user.beruf"
                                ref="user.Beruf"
                                :error-messages="errorMessages"
                                :rules="[rules.required]"
                                label="Beruf:"
                                :items="user.items"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                v-model="user.kennenwortWiderholen"
                                ref="user.kennenwortWiderholen"
                                :error-messages="errorMessages"
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min, rules.kennenwortMatch]"
                                :type="show2 ?  'text' : 'password' "
                                name="input-10-2"
                                variant="outlined" 
                                label="Kennewort Wiederholung:"
                                class="input-group--focused"
                                hide-details="auto"
                                @click:append="show2 = !show2"
                                ></v-text-field>
                            </v-col>
                            <v-checkbox 
                                v-model="user.datenSchutzAgree"
                                ref="user.DatenSchutzAgree"
                                :error-messages="errorMessages"
                                :rules="[rules.required]"
                                color="primary">
                                <template v-slot:label>
                                    <div>
                                        I agree to site terms and
                                        <v-tooltip location="bottom">
                                            <template v-slot:activator="{ props }">
                                                <a
                                                target="_blank"
                                                href="https://vuetifyjs.com"
                                                v-bind="props"
                                                @click.stop
                                                >
                                                conditions
                                                </a>
                                            </template>
                                        </v-tooltip>
                                    </div>
                                </template>
                            </v-checkbox>
                            <!-- <v-checkbox
                                v-model="DatenSchutzAgree"
                                ref="DatenSchutzAgree"
                                :error-messages="errorMessages"
                                :rules="[rules.required]"
                                color="primary"
                                label="I agree to site terms and conditions"
                                hide-details="auto"
                            ></v-checkbox> -->
                                <v-spacer></v-spacer>
                                <v-slide-x-reverse-transition>
                                <v-tooltip
                                    v-if="formHasErrors"
                                    location="left"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        icon
                                        class="my-0"
                                        v-bind="attrs"
                                        @click="resetForm()"
                                        v-on="on"
                                        >
                                        <v-icon>mdi-refresh</v-icon>
                                        </v-btn>
                                    </template>
                                </v-tooltip>
                                </v-slide-x-reverse-transition>
                                <v-btn
                                    rounded="lg"
                                    color="primary"
                                    style="margin: 4px;"
                                    @click="submit()"
                                    >
                                    Registreren
                                    </v-btn>
                                <!-- <v-btn
                                    @click="RegisterDialogClose()"
                                    rounded="lg"
                                    color="warning"
                                    >
                                    Schließen
                                    </v-btn> -->
                            <v-card-actions class="modal-footer"> 
                            </v-card-actions> 
                        </v-row>
                    </v-container >
                <!-- </v-form> -->
            </v-card>
        <!-- </v-dialog> -->
    <!-- </v-sheet> -->
</template>

<script>
import axios from 'axios'

export default {
    name:'Register',
    props:['registrieren', 'registriert'],
    data(){
        return{
            result: {},
            user:{
                // id: '',
                anrede: '',
                vorname: '',
                nachname:'',
                beruf:'',
                kennenwort:'',
                kennenwortWiderholen: '',
                emailAdress:'',
                emailWiederholung:'',
                items: [
                'web developer',
                'app developer',
                'interested',
                'curious',
                ] ,
                datenSchutzAgree: false,
            },
            errorMessages: '',
            formHasErrors: false,
            showRegisterDialog: true,
            
            show1: false,
            show2: false,
            select: null,
            
            rules: {
                required: value => !!value || 'Pflicht Fild.',
                min: v => v.length >= 3 || 'Min 3 characters',
                email: () => this.validateEmail || 'ungültig',
                emailMatch:() => this.emailMatch || 'Die E-Mailadressen sind nicht änlich',
                kennenwortMatch:() => this.kennenwortMatch || 'Die Kennenworte sind nicht änlich'
            }
        }
    },
    watch: {
      name() {
        this.errorMessages = ''
      },
      emailAdress(value) {
        // binding this to the data value in the email input
        this.emailAdress = value;
        // this.validateEmail(value);
      }
    },
    computed: {
    form () {
        return {
            anrede: this.user.anrede,
            vorname: this.user.vorname,
            nachname: this.user.nachname,
            beruf: this.user.beruf,
            kennenwort: this.user.kennenwort,
            kennenwortWiderholen: this.user.kennenwortWiderholen,
            emailAdress: this.user.emailAdress,
            emailWiederholung: this.user.emailWiederholung,
            datenSchutzAgree: this.user.datenSchutzAgree,
        }
    },
    validateEmail() {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(this.user.emailAdress)
    },
    emailMatch(){
        if( this.user.emailAdress !== this.user.emailWiederholung){
            return false
        }
        else if(this.user.emailAdress == ''){
            return true
        } 
        else
            return true
    },
    kennenwortMatch(){
        if( this.user.kennenwort !== this.user.kennenwortWiderholen){
            return false
        } else
            return true
    },
    mounted(){
        console.log('Register Dialog ist mounted!')
        this.datenSchutzAgree= false
    },
    updated(){
        console.log('Register Dialog ist uptated!')
    },
    unupdated(){
        console.log('Register Dialog ist unuptated!')
    },
    },
    methods:{
        RegisterDialogClose(){
            this.showRegisterDialog = false
            this.show1 = false,
            this.show2= false,
            this.formHasErrors = false,
            this.$emit('closeRegister')

        },
        handleSubmit(){
            console.log('Anrede: ' , this.user.anrede)
            console.log('Vorname: ', this.user.vorname)
            console.log('Nachname: ', this.user.nachname)
            console.log('Beruf: ', this.user.beruf)
            console.log('Kennenwort: ', this.user.kennenwort)
            console.log('E-Mail:' , this.user.emailAdress)
            console.log('DatenSchutz: ' , this.user.datenSchutzAgree)
           
        },
        resetForm() {
            Object.keys(this.form).forEach(f => {
                if(this.$refs[f]){
                    this.$refs[f].reset();
                }else{
                    this.errorMessages = []
                }
            })
            this.errorMessages = []
            this.formHasErrors = false
            this.datenSchutzAgree = false
            console.log(this.errorMessages)

        },
        submit() {
            this.handleSubmit()
            this.formHasErrors = false
            Object.keys(this.form).forEach(f => {
                console.log(this.form + 'v')
                try{
                    // console.log(this.form);
                    if (!this.form[f]) {
                        console.log('if 1')
                        this.formHasErrors = true
                        this.$refs[f].validate(true)
                    }
                    else if (!this.datenSchutzAgree){
                        console.log('if2')
                        this.errorMessages
                        console.log(this.errorMessages)
                        
                    }else
                    console.log(this.form[f]+ 'd')
                }catch(error){
                    console.log(error)
                    this.errorMessages = 'Bitte geben Sie ein Wert ein!';
                }
            })
            console.log('test');
            this.userRegister();
        },
        // save(){
        //     this.saveData();
        // // if(this.user.id == ''){
        // // }else{
        // //     this.updateData();
        // // }
        // },
        async userRegister(){
            //get tho values
            const anrede = this.user.anrede;
            const vorname = this.user.vorname;
            const nachname = this.user.nachname;
            const beruf = this.user.beruf;
            const emailAdress = this.user.emailAdress;
            const kennenwort = this.user.kennenwort;
            console.log('Form userRegister ')
            try {
                const res = await fetch('http://localhost:8000/api/userRegister', {
                    method: 'POST',
                    body: JSON.stringify({anrede,vorname,nachname,beruf,emailAdress,kennenwort}),
                    headers: {'Content-Type': 'application/json'}
                });
                const data = await res.json();
                    // this.emailerrorMessages = '';
                    // this.kennenworterrorMessages= '';
                console.log(data);
                if(data.errors ){
                    this.errorMessages = 'Bitte geben Sie ein Wert ein!';
                    console.log(this.errorMessages)
                    // this.emailerrorMessages = emailAdressError;
                    // this.kennenworterrorMessages = kennenwortError;
                }
                console.log(data.message);
                if(data.message == "Register Success!"){
                    location.assign('/')
                    this.RegisterDialogClose();
                }
                console.log('Form ist Submitted')
            } catch (error) {
                console.log(error);
            }
        }
        // saveData() {
        //     // form.addEventListner('submit', async(e) => {
        //     //     e.preventDefault();
        //     //     try {
        //     //         const res = await fetch('/userRegister', {
        //     //             method: ' POST',
        //     //             body: JSON.stringify({user}),
        //     //             headers:{' Content-Type': 'application/json'}
        //     //         })
        //     //     } catch (err) {
        //     //         console.log(err)
        //     //     }
        //     // })
        //     axios.post('http://localhost:8000/api/userRegister', this.user)
        //     .then(
        //         ({data}) => {
        //             if(data.errors){
        //                 this.errorMessages = data.errors.emailAdress;
        //                 this.errorMessages = data.errors.Kennenwort;
        //             }
        //             if(data.user){
        //                 alert("saved");
        //                 this.RegisterDialogClose();
        //             }
        //         })
            
        // }
      
    }
}    
</script>
