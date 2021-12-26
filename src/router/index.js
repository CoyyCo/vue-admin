import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
 //  {
 //    path: "/",
 //    name: "Home",
 //    component: Home,
	// redirect:'login'
 //  },
  {
	  path:'/login',
	  name:"login",
	  component:() => import('../views/login/index.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
