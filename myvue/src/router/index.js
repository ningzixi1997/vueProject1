import Vue from 'vue'
import Router from 'vue-router'
import Ncom from '../components/Ncom'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/zj1',component:Ncom},
    {path:'/zj2'},
    {path:'/zj3'},
  ]
})
