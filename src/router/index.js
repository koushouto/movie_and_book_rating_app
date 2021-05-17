import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import AddMovie from "@/components/AddMovie.vue";
import Movie from "@/components/Movie.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/movies/add",
      name: "AddMovie",
      component: AddMovie,
    },
    {
      path: "/movies/:id",
      name: "Movie",
      component: Movie,
    },
    { 
      path: "/users/register", 
      name: "Register", 
      component: Register,
    },
    { 
      path: "/users/login", 
      name: "Login", 
      component: Login, 
    }
  ]
});

