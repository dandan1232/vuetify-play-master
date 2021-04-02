import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue')
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components.vue')
      },
      {
        path: 'todo',
        name: 'TodoList',
        component: () => import(/* webpackChunkName: "todoList" */ '../views/TodoList.vue')
      },
      {
        path: 'bootcamp',
        name: 'Bootcamp',
        component: () => import(/* webpackChunkName: "todoList" */ '../views/Bootcamp.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/github',
    name: 'GitHub',
    component: () => import(/* webpackChunkName: "todoList" */ '../views/GitHub.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "todoList" */ '../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
