import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home.vue";
import layouts from "@/components/layouts.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dash",
      component: layouts,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue")
        },
        {
          path: "/todo/:id",
          name: "todo",
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/todo/Todo.vue")
        },
        {
          path: "*",
          redirect: "/home"
        }
      ]
    }
  ]
});
