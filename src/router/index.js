import { createRouter, createWebHistory } from 'vue-router';




const routes = [

  { path: "/post",
   name:'PostProject', component:()=> import ('../views/PostProject.vue'),
  
  },

  {
    path:"/authportfolio",
    name:'AuthPortfolio', component:()=> import ('../views/AuthPortfolio.vue')


  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});



export default router;
