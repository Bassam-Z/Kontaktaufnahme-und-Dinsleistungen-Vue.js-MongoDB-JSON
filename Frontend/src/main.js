import { createApp, render } from "vue";
import App from "./App.vue";
import router from "./router";

// import HomeSeite from './views/HomeSeite.vue'
import "./assets/main.css";
import './bootstrap-5.3.0-alpha1-dist/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/vue-fontawesome'
import 'bootstrap'
// import 'popper.js'
import 'jquery'
import '@vuelidate/validators'
import '@vuelidate/core'
//import 'express'
import 'vuetify/styles'
// import axios from "axios";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createPinia} from 'pinia'
import Vuex from 'vuex'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
/////////////////////////////////////////////////////
// Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       istEingelogt: false
//     }
//   },
//   mutations: {
//     increment (state){
//       state.istEingelogt = true;
//     },
//     // unincrement (state){
//     //   state.istEingelogt = false;
//     // },
//   }
// })
////////////////////////////////////////
// store.commit('increment')
// store.commit('unincrement')
// import {createStore} from 'vuex';
// const store = createStore({
//     state(){
//         return {
//         istEingelogt: false
//         }
//     },
//     mutations:{},
//     actions:{},
//     getters:{},
//     modules:{},
// })
// const pinia = createPinia();
////////////////////////////////////////////////
const store = createStore({
  plugins: [createPersistedState()],
  state(){
      return{
          istEingelogt: false,
          user: {
            anrede: '',
            vorname: '',
            nachname: ''
          }
      }
  },
  mutations: {
    SET_USER(state, user) {
      state.user.anrede = user.anrede
      state.user.vorname = user.vorname
      state.user.nachname = user.nachname
    },
    CLEAR_STORE(state) {
      state.user.anrede = '';
      state.user.vorname = '';
      state.user.nachname = '';
    },
    statusChenge(state){
      state.istEingelogt = true;
    },
    statusChengeFalse(state){
      state.istEingelogt = false;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    logout({ commit }) {
      // Logout logic here
      commit('CLEAR_STORE');
      // localStorage.removeItem('userData');
    },
  }
})

// store.commit('CLEAR_STORE');



const vuetify = createVuetify({
  components,
  directives,
})

// Laden der Daten aus localStorage beim Starten der App
const userData = localStorage.getItem('userData');
if (userData) {
  store.commit('SET_USER', JSON.parse(userData));
}

// Speichern der Daten im localStorage beim Speichern im Store
store.watch(
  (state) => state.userData,
  (newValue) => {
    localStorage.setItem('userData', JSON.stringify(newValue));
  },
  { deep: true }
);

let windowClosing = false;

window.addEventListener('beforeunload', () => {
  windowClosing = true;

    store.dispatch('logout');
  
});

window.addEventListener('unload', () => {
  if (!windowClosing) {
    store.dispatch('logout');
    // localStorage.removeItem('userData');
  }
});
const app =  createApp(App).use(vuetify).use(store).use(router).mount('#app');
// .use(store)