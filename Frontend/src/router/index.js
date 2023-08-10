import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomeSeite from '../views/HomeSeite.vue'// or
import Login_View from '../views/Login_View.vue'
import Register_View from '../views/Register_View.vue'
import Dienst_Werk_Kont_View from '../views/Dienst_Werk_Kont_View.vue'
// import Vue from 'vue';
// import axios from "axios";
// import Vue from 'vue';
// import Router from ('vue-router');

// Vue.use(Router)

// const corsOptions = {
//   origin: 'http://localhost:5173/', // Ersatz mit der URL Ihres Vue-Projekts
//   methods: 'GET,POST,PUT,DELETE',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeSeite',
      component: HomeSeite, // () => import('../views/HomeSeite.vue') // or
      method: 'post'
    },
    {
      path: '/userLogin',
      name: 'Anmelden',
      component: Login_View // () => import('../views/HomeSeite.vue') // or
    },
    {
      path: '/userRegister',
      name: 'Register',
      component: Register_View // () => import('../views/HomeSeite.vue') // or
    },
    {
      path: '/denstleisungen-Werkzeuge-Kontakt',
      name: 'Denst-Werk-Kontakt',
      // meta:{
      //   requiresAuth: true
      // },
      component: Dienst_Werk_Kont_View // () => import('../views/HomeSeite.vue') // or
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});



export default router;
