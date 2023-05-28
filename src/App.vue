<template>
  <div id="app">

     <header-portfolio />
     <main-portfolio />

     <router-view></router-view>
  </div>
</template>
<script setup>
import { createApp } from 'vue'

import HeaderPortfolio from './components/HeaderPortfolio.vue'
import MainPortfolio from './components/MainPortfolio.vue'


const app = createApp({
  // your app configuration options
})
app.component(
  'header-portfolio', HeaderPortfolio,
  'main-portfolio', MainPortfolio
)

app.mount('#app')

</script>
<style >
.change-theme{
    position: absolute;
    top:1.5rem;
    right: 0;
    font-size: 1.25rem;
    color: var(--title-color);
    cursor: pointer;
    transition: .3s;
}
.change-theme:hover{
    color: var(--first-color);
}

/*========== Variables Dark theme ==========*/
body.dark-theme{
  --title-color: hsl(var(--hue), 12%, 95%);
  --text-color: hsl(var(--hue), 12%, 75%);
  --body-color: hsl(var(--hue), 40%, 8%);
  --container-color: hsl(var(--hue), 24%, 12%);
  --text-color-light: hsl(var(--hue), 10%, 75%);
  --text-color-lighten: hsl(var(--hue), 8%, 70%);
}


/*========== 
    Color changes in some parts of 
    the website, in light theme
==========*/

.darkt-theme .button__gray{
    background-color: var(--container-color);
}
.darkt-theme .button__gray:hover{
    background-color:hsl(var(--hue),24%,16%);
}
.darkt-theme .filters__content{
    background-color: var(--container-color);
}
.darkt-theme::-webkit-scrollbar{
    background-color: hsl(var(--hue),8%, 16%);
}
.darkt-theme::-webkit-thumb{
    background-color: hsl(var(--hue),8%, 24%);
}
.darkt-theme::-webkit-thumb:hover{
    background-color: hsl(var(--hue),8%, 32%);
}


/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (max-width: 320px){
  .container{
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .profile__info{
    column-gap: 1.5rem;
  }
  .profile__buttons{
    flex-direction: column;
    row-gap: 1rem;
  }
  .skills__box{
    column-gap: 1rem;
  }
}

/* For medium devices */

@media screen and (min-width: 576px){
  .projetcts__content{
    grid-template-columns:332px;
    justify-content: center;
  }
  .filters__content{
    width: 332px;
    margin: 3rem auto;
  }
}
@media screen and (min-width: 776px){
  .projetcts__content,
  .skills__content{
    grid-template-columns: repeat(2,332px);
  }
  .skills__content{
    justify-content: center;
    column-gap: 3rem;
  }
}

/* For large devices */

@media screen and (min-width: 992px){
  .container{
    margin-left: auto;
    margin-right: auto;
  }
  .change-theme{
    top:2.5rem;
    right:2.5rem;
  }
  .profile{
    padding-top: 4rem;
  }

  .profile__border{
    width: 135px;
    height: 135px;
    margin-bottom: 1rem;
  }
  .profile__perfil{
    width: 120px;
    height: 120px;
    
  }
  .profile__perfil img{
    width: 90px;
  }
  .profile__profession{
    margin-bottom: 1.5rem;
  }
  .profile__info{
    column-gap:3rem;
  }
  .profile__info-description{
    font-size: var(--small-font-size);
  }
  .profile__buttons{
    column-gap:2rem;
  }
  .projetcts__content{
    gap: 2rem 3rem;

  }
  .projetcts__modal{
    padding: 1.5rem;
  }
  .skills__title{
    font-size: var(--normal-font-size);
    margin-bottom: 2.5rem;
  }
  .footer__copy{
    margin:4.5rem 0 2.5rem;
  }
}

@media screen and (min-width: 977px) and (max-width: 1825px) {


  .container {
  max-width: 968px;
  margin-left: 15rem !important;
  margin-right: 16rem !important;
}


.profile__perfil img{
    width: 130px;
  }
  .projects__card img{
    width: 100%;
    height: 100%;
}
.projects__content{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   grid-row-gap: 5rem;
}



}



</style>