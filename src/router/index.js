import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchMap from "../views/SearchMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/static-map",
    name: "staticMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StaticMap.vue")
  },
  {
    path: "/search-map",
    name: "search-map",
    component: SearchMap
  }
];

const router = new VueRouter({
  routes
});

export default router;
