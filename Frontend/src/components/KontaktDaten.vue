<template>
<main>
    <section class="cards contact" id="contacts">
        <h2 class="title">lassen Sie sich kostenlos beraten!</h2>
        <div class="content">
            <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="info">
                    <h3>Phone</h3>
                    <p>+491573222****</p>
                </div>
            </div>
            <div class="card">
                <div class="icon" >
                    <a href="mailto:basam.ali@test.com"><i class="fa-solid fa-at" type="button" ></i></a>
                </div>
                <div class="info">
                    <h3>E-Mail</h3>
                    <p>basam.ali@test.com</p>
                </div>
            </div>
            <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="icon">
                    <i class="fa-regular fa-comments"></i>
                </div>
                <div class="info">
                    <h3>Nachricht</h3>
                    <p>Schreiben Sie mir eine Nachricht!</p>
                </div>
            </div>
        </div>
    </section>
    <div v-if="!this.nachrichtOffnen && this.eingelogt" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Neue Nachricht</h1>
                    <slot></slot>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ">
                    <form class="row g-2">
                        <div class="mb-3">
                            <label for="recipient-name" class="form-label">Anrede:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="state.anrede" >
                            <span v-if="v$.anrede.$error" style="color: tomato;" class="error"  >{{ v$.anrede.$errors[0].$message }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Name:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="this.state.name" >
                            <span  v-if="this.v$.name.$error" style="color: tomato;" class="error" >{{ this.v$.name.$errors[0].$message }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Vorname:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="this.state.vorname" >
                            <span  v-if="this.v$.vorname.$error"  style="color: tomato;" class="error">{{ this.v$.vorname.$errors[0].$message }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label has-validation">E-Mail:<span class="input-group-text" id="inputGroupPrepend">@</span></label>
                            <input type="text" class="form-control" id="recipient-name" v-model="this.state.email" >
                            <span v-if="this.v$.email.$error" style="color: tomato;" class="error"  >{{ this.v$.email.$errors[0].$message }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Nachricht:</label>
                            <textarea class="form-control" id="message-text" v-model="this.state.nachrichtInhalt" ></textarea>
                            <span v-if="this.v$.nachrichtInhalt.$error" style="color: tomato;" class="error" >{{ this.v$.nachrichtInhalt.$errors[0].$message }}</span>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <v-btn v-on:click="this.nachrichtSubmit()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Senden</v-btn>
                        <v-btn type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</v-btn>
                        <!-- :disabled="v$.anrede.$error || v$.name.$error || v$.vorname.$error || v$.email.$error || v$.nachrichtInhalt.$error" -->
                    </div> 
            </div>
        </div>
    </div>
    <div v-else>
        <login/>
    </div>
</main>
</template>

<script>
import {required,minLength,email} from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { reactive, computed } from 'vue'
import login from './login.vue'



export default {
    name: "KontaktDaten",
    components: {login},
    props:['nachrichtOffnen', 'eingelogt'],
  
    setup(){
          const state = reactive({
              anrede: '',
              name: '',
              vorname: '',
              email: '',
              nachrichtInhalt: '',
          })
          const rules = computed(() =>{
              return {
                  anrede: {
                  required,
                  minLength: minLength(3)
                  },
                  name: {
                      required,
                      minLength: minLength(3)
                  },
                  vorname: {
                      required,
                      minLength: minLength(3)
                  },
                  email: {
                      required,
                      email,
                  },
                  nachrichtInhalt: {
                      required,
                      minLength: minLength(10)
                  },
              }
          })
          const v$ = useVuelidate(rules, state)
  
          return{
              state,
              v$,
          }
      },

    methods:{
          nachrichtSubmit(){
              this.v$.$validate();
              if (!this.v$.$error){
                  alert("Nachricht ist gesendet!")
              } else {
                  alert("Nachricht ist nicht gesendet!")
  
              }
          },
          NachrichtDialogClose(){
            this.showRegisterDialog = false
            this.show1 = false,
            this.show2= false,
            this.formHasErrors = false,
            this.$emit('closeRegister')

        },
        //   NachrichtSchliessen(){
        //     this.$emit('close')
        //   }
         
      },
    

    // data: () => {
    //     return {
    //         v$: useVuelidate(),
    //         anrede: '',
    //         name: '',
    //         vorname: '',
    //         email: '',
    //         nachrichtInhalt: '',
    //     }

    // },
    
    // validations: {
    //     anrede: {
    //         required,
    //         minLength: minLength(3)
    //     },
    //     name: {
    //         required,
    //         minLength: minLength(3)
    //     },
    //     vorname: {
    //         required,
    //         minLength: minLength(3)
    //     },
    //     email: {
    //         required,
    //         email,
    //     },
    //     nachrichtInhalt: {
    //         required,
    //         minLength: minLength(10)
    //     },
    // },
}
</script>

<style scoped>
.contact .icon {
    font-size: 4.5em;

}

.contact .info {
    color: black;
}

.contact .info p {
    font-size: 1.3em;
    text-align: center;

}

.info h3 {
    color: rgb(17, 108, 255);
    font-size: 1.2em;
    font-weight: 700;
    margin: 10px;
    text-align: center;
}
</style>
