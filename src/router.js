import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import PrevList from "./components/PrevList";
import Movie from "./components/Movie";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/movies",
      component: () => import("./components/Movies"),
      children: [
        {
          path: "",
          component: PrevList
        },
        {
          path: ":id",
          component: Movie
        }
      ]
    }
  ]
});
