// import {createStore} from 'vuex';

// const store = createStore({
//     state(){
//         return{

//             istEingelogt: false

//         }
        
//     },
//     mutations:{},
//     actions:{},
//     getters:{},
//     modules:{},
// })
// app.use(store)

/////////////////////////////////////////////////////////////////////////
// import {defineStore} from 'pinia';

// export const nameStore = defineStore('store', {
//     state () {
//         return {
//             istEingelogt: false
//         }
//     },
//     mutations:{
//         statsChenge (state){
//             state.istEingelogt = true;
//         },
//     },
//     actions:{
        
//         // statsChenge(){
//         //     this.istEingelogt = true;
//         // }
//     },
//     getters:{
//         istIn(){
//             if(this.istEingelogt){

//             }
//         }
//     },
// })
///////////////////////////////////////////////////////////

import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            
        }
    }
})