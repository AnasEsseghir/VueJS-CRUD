import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddStud from '@/components/AddStud'
import StudDetails from '@/components/StudDetails'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addstud',
      name: 'AddStud',
      component: AddStud
    },
    {
      path: '/studdetails',
      name: 'StudDetails',
      component: StudDetails
    }
  ]
})
