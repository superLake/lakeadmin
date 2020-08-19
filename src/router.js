import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import AppList from './views/AppList.vue'
import AddApp from './views/AddApp.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[{
        path:'/main/applist',
        name:'applist',
        component:AppList,
      },{
        path:'/main/addapp',
        name:'addapp',
        component:AddApp
      }]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
