<template>
   <!--=============== MAIN ===============-->
   <main class="main">
      <section class="filters container">
         <!--=============== FILTERS TABS ===============-->
         <ul class="filters__content">
            <button class="filters__button" @click="showProjects = true; showSkills = false"
               :class="{ 'filter-tab-active': showProjects }">
               Projetos
            </button>
            <button class="filters__button" @click="showSkills = true; showProjects = false"
               :class="{ 'filter-tab-active': showSkills }">
               Habilidades
            </button>
         </ul>
         <div class="filters__sections">
            <!--=============== PROJECTS ===============-->
            <div class="projects__content grid " data-content id="projects" v-if="showProjects">

               <article class="projects__card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">

                  <img :src="lambdaReturnData.Items[index].image" alt="Projetos">

                  <div class="projects__modal">
                     <div>
                        <span class="projects__subtitle">{{ lambdaReturnData.Items[index].about }}</span>
                        <h3 class="projects__title">{{ lambdaReturnData.Items[index].title }} </h3>

                        <a :href="lambdaReturnData.Items[index].link1" target="_blank"
                           class="projects__button button button__small">
                           <i class="ri-link"></i>
                        </a>
                     </div>
                  </div>
               </article>
            </div>

            <!--=============== SKILLS-front===============-->
            <div class="skills__content grid  " data-content id="skills" v-if="showSkills">
               <div class="skills__area">
                  <h3 class="skills_title">
                     Front-End developer
                  </h3>

                  <div class="skills__box">
                     <div class="skills__group">
                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">HTML</h3>
                              <span class="skills__level">Avançando</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">CSS</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">SASS</h3>
                              <span class="skills__level">Basico</span>
                           </div>

                        </div>
                     </div>

                     <div class="skills__group">
                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Bootstrap</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Vue</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Javascript</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>




                        </div>
                     </div>



                  </div>
               </div>

               <!--=============== SKILLS-back ===============-->

               <div class="skills__area">
                  <h3 class="skills_title">
                     Back-End developer
                  </h3>

                  <div class="skills__box">
                     <div class="skills__group">
                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Node.js</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Axios</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">Express</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>
                     </div>

                     <div class="skills__group">
                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">AWS</h3>
                              <span class="skills__level">Basico</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">MongoDB</h3>
                              <span class="skills__level">Basico</span>
                           </div>

                        </div>

                        <div class="skills__data">
                           <i class="ri-checkbox-circle-line"></i>

                           <div>
                              <h3 class="skills__name">HTML</h3>
                              <span class="skills__level">Intermediario</span>
                           </div>

                        </div>
                     </div>



                  </div>
               </div>


            </div>

         </div>
      </section>
   </main>


   <!--=============== Fotter===============-->

   <footer class="footer container">
      <span class="footer__copy">
         &#169; Everson Deus. All rigths reserverd
      </span>
   </footer>
</template>
  
<script setup>
import { ref, onMounted, reactive } from 'vue'

import axios from 'axios'

const showProjects = ref(false)
const showSkills = ref(false)
let lambdaReturnData = reactive({})

function GetProjects() {
   axios.get('https://c9rpyytclc.execute-api.sa-east-1.amazonaws.com/production/getprojects')
      .then(res => {
         console.log(res);
         lambdaReturnData = res.data;
         showProjects.value = true
      })
      .catch(error => {
         console.error('Erro ao obter projetos:', error);
      });
}



onMounted(GetProjects);





</script>
  
<style >
/*=============== FILTERS TABS ===============*/
.filters__content {
   margin: 2rem - 2.5rem;
   background-color: var(--text-color-lighten);
   padding: .375rem;
   border-radius: .75rem;
   display: flex;
   justify-content: space-between;
   column-gap: .5rem;

}

.filters__button {
   width: 100%;
   border: none;
   outline: none;
   padding: 1rem;
   color: var(--title-color);
   font-size: var(--small-font-size);
   font-family: var(body-font);
   font-weight: 500;
   border-radius: .75rem;
   cursor: pointer;
   background-color: transparent;
   transition: .3s;

}

.filters__button:hover {
   background-color: var(--body-color);
}

/*=============== PROJECTS ===============*/
.projects__card {
   position: relative;
   border-radius: 1rem;
   overflow: hidden;
   display: grid;
   margin-top: 3rem;



}

.projects__card img {
   width: 100%;
   height: 100%;
}

.projects__modal {
   position: absolute;
   width: 100%;
   height: 100%;
   bottom: -100%;
   left: 0;
   background-color: linear-gradient(180deg,
         hsla(var(--hue), 24%, 40%, .3) 0%,
         hsla(var(--hue), 24%, 4%, 1) 95%);
   display: grid;
   align-items: flex-end;
   padding: 1.5rem 1.25rem;
   transition: .3s;

}

.projects__subtitle,
.projects__title {
   color: #fff;
}

.projects__subtitle {
   font-size: var(--smaller-font-size);
}

.projects__title {
   font-size: var(--h3-font-size);
   margin-bottom: .75rem;
}

.projects__button {
   padding: .5rem;
}

.projects__card:hover .projects__modal {
   bottom: 0;

}

/*=============== SKILLS ===============*/

.skills__content {
   row-gap: 3.5rem;

}

.skills__title {
   font-size: var(--h3-font-size);
   text-align: center;
   margin-bottom: 1.5rem;
}

.skills__box {
   display: flex;
   justify-content: center;
   column-gap: 3rem;
}

.skills__group {
   display: grid;
   align-content: flex-start;
   row-gap: 1rem;
}

.skills__data {
   display: flex;
   column-gap: .5rem;
}

.skills__data i {
   font-size: 1rem;
   color: var(--first-color);
}

.skills__name {
   font-size: var(--normal-font-size);
   font-weight: 500;
   line-height: 18px;
}

.skills__level {
   font-size: var(--smaller-font-size);

}

/*Hide and show projects & skills

.filters [data-content]{
    display: none;

}

.filters__active[data-content]{
    display: grid;
}
*/


/*Activate button  filter*/
.filter-tab-active {
   background-color: var(--body-color);
}

/*=============== FOOTER ===============*/
.footer__copy {
   display: block;
   margin: 2.5rem 0 2rem;
   text-align: center;
   font-size: var(--smaller-font-size);
   color: var(--text-color-light);
}

/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
   width: .6rem;
   border-radius: .5rem;
   background-color: hsla(var(--hue), 8%, 66%);
}

::-webkit-scrollbar-thumb {

   border-radius: .5rem;
   background-color: hsla(var(--hue), 8%, 54%);

}

::-webkit-scrollbar:hover {
   background-color: hsla(var(--hue), 8%, 44%);
}</style>
  