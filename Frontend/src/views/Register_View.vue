<template>
    <main>
      <body>
        <div class="uc__wrapper submit">
            <!-- <img class="ico" src="Vue.png" alt=""> -->
            <div class="uc__details">
                <p class="uc__description">
                  Alle Inhalte in dieser Web-App sind aus Demonstrationszwecken entstanden. 
                  Dieses Projekt entstand in meiner Freizeit.
  
                </p>
                <div class="uc__subscribe">
                    <h3>Herzlich willkommen.</h3>
                    <form action="#" class="uc__form">
                      <!-- <login v-if="IstSignUp.istSignIn"/>
                      <register v-if="IstSignUp.istSignUp"/> -->
                      <register />
                        <!-- <input type="email" class="email" id="email" placeholder="E-Mail Addresse..">
                        <input type="submit" onclick="myFunction()" class="submit" value="Benachrichtigung erhalten"> -->
                    </form>
                </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="uc__art">
                <img src="../images/Developer activity2.gif" alt="">
                <a href="https://www.freepik.com/free-vector/developer-activity-concept-illustration_9319773.htm#page=5&position=9&from_view=author">Image by storyset on Freepik</a>
            </div>
        </div>
      </body>
    </main>
  </template>
  
  <script>
  import login from '../components/login.vue'
  import register from '../components/register.vue'
  
  export default {
      name:'Register_View',
      components: {login, register},
      data(){
        return{
          // IstSignUp: IstSignUp,
          // newIstLogin: null,
          // newIstSignUp: null
        }
        
      },
      // watch:{
      //   IstSignUp
      // },
        myFunction() {
          let val = document.getElementById("email").value;
          let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          if(val.match(testEmail))
          alert('Danke für Ihre Vertauen, Sie werden von uns bald Benachrichtigung erhalten!');
      }
  }
  
  
  </script>
  
  <style scoped>
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body{
      height: 100%;
  }
  
  body{
      font-size: 1rem;
      line-height: 1.65;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(to right, #3781D0 50%,#3863B2 50%);
      color: #3863B2;
  }
  
  /*mein Styles*/
  
  .uc__wrapper{
      height: 100vh;
      display: flex;
      justify-content: space-between;
  
  }
  
  .uc__details {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      padding: 0 4rem;
      align-items: flex-start;
      justify-content: center;
  }
  
  .uc__wrapper .ico{
      width: 5%;
      height: 20%;
      flex-basis: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  
  .uc__art {
      flex-basis: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .uc__art img {
      width: 70%;
  
  }
  .uc__art a{
     
    position: absolute;
    bottom: 5%;
    right: 35%;
  }
  
  .title {
      display: inline-flex;
      font-size: 40px;
      position: relative;
      margin-bottom: 1rem;
  }
  
  .intro{
      font-size:  20px;
      font-weight: normal;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
  }
  
  .uc__description{
      margin-bottom: 2rem;
      line-height: 1.77;
      font-size: larger;
      color: #d59573;
  }
  
  .uc__subscribe{
      background-color:#3863B2;
      padding: 1.5rem;
      width: 85%;
      border-radius: 3px;
      box-shadow: 0 25px 50px -12px  rgba(0 0 0 .25);;
  }
  
  .uc__subscribe h3{
      font-weight:bolder;
      text-transform: uppercase;
      font-size: 20px;
      margin-bottom: 1rem;
      color: #ffff;
  }
  
  .uc__form{
      position: relative;
  }
  
  .uc__form input{
      font-family: inherit;
      outline: none;
      font-size: 90%;
      padding: 10px 1rem;
      border: none;
      display: block;
      border-radius: 2px;
  
  }
  
  .uc__form .email{
      width: 100%;
      background-color: #94a4da;
  }
  
  .uc__form .submit{
      position: absolute;
      top: 0;
      right: 0;
      background-color: hwb(262 57% 11%);
      color: #d0f3d5;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: background-color .22s ease ;
  }
  
  .uc__form .submit:hover{
      background-color: #cdc0df 
  }
  
  /* Für Bildschirmbreite 1023px und kleiner */
  @media (max-width: 1023px) {
      .uc__wrapper {
        flex-direction: column;
        height: auto;
      }
    
      .uc__details {
        flex-basis: 100%;
        padding: 2rem;
        text-align: center;
      }
      .uc__form .submit{
          position: inherit;
      }
    
      .uc__art a{
     
          position: absolute;
          bottom: 0%;
          right: 17%;
      }
    
      .uc__art {
        flex-basis: 100%;
      }
    
      .uc__art img {
        width: 100%;
      }
    }
    
    /* Für Bildschirmbreite 720px und kleiner */
    @media (max-width: 720px) {
      .uc__details {
        padding: 1rem;
      }
    
      .title {
        font-size: 40px;
      }
    
      .intro {
        font-size: 16px;
      }
    
      .uc__description {
        font-size: 14px;
      }
      .uc__form .submit{
          position: inherit;
      }
    
      .uc__subscribe {
        padding: 1rem;
        width: 100%;
      }
  
      .uc__art a{
     
          position: absolute;
          bottom: 0%;
          right: 17%;
      }
    
      .uc__form input {
        font-size: 80%;
        padding: 8px 0.5rem;
      }
    }
    
    /* Für Bildschirmbreite 365px und kleiner */
    @media (max-width: 365px) {
      .title {
        font-size: 30px;
      }
      .uc__form .submit{
          position: inherit;
      }
      .uc__art a{
     
          position: absolute;
          bottom: 0%;
          right: 10%;
      }
    
      .intro {
        font-size: 14px;
      }
    
      .uc__description {
        font-size: 12px;
      }
    
      .uc__subscribe h3 {
        font-size: 16px;
      }
    
      .uc__form input {
        font-size: 70%;
        padding: 6px 0.5rem;
      }
    }
  
  
  </style>