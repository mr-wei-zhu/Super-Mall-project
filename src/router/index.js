import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Cart= () => import('../views//cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/Cart',
    component:Cart
  },
  {
    path: '/Profile',
    component:Profile
  },
  {
    path: '/Category',
    component:Category
  },
  {
    path:'/Detail/:iid',
    component:Detail
  }
]
const vuerouter =new Router({
  routes,
  mode:'history'
})


export default 
  vuerouter
