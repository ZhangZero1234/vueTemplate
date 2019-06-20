import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from "../components/HomeComponent.vue"
import MemberComponent from "../components/MemberComponent.vue"
import CartComponent from "../components/CartComponent.vue"
import SearchComponent from "../components/SearchComponent.vue"
Vue.use(Router)

export default new Router({
  linkActiveClass:"mui-active",
  routes: [
    {
      path: '/home',
      component:HomeComponent
    },
    {
      path: '/Member',
      component:MemberComponent
    }
    ,
    {
      path: '/Cart',
      component:CartComponent
    },
    {
      path: '/Search',
      component:SearchComponent
    }
  ]
})
