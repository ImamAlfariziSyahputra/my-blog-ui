import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store';

import Home from "../views/Home/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import BlogCreate from "../views/Blog/BlogCreate";
import BlogDetail from "../views/Blog/BlogDetail";
import BlogEdit from "../views/Blog/BlogEdit";


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/blog/create",
    name: "BlogCreate",
    component: BlogCreate,
    // meta: { requiresAuth: true },
  },
  {
    path: "/blog/:blogId",
    name: "BlogDetail",
    component: BlogDetail,
    // meta: { requiresAuth: true },
  },
  {
    path: "/blog/:blogId/edit",
    name: "BlogEdit",
    component: BlogEdit,
    // meta: { requiresAuth: true },
  },
  {
    path: '*',
    redirect: '/',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.state.user.isLoggedIn) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

export default router;
