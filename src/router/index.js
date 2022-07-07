import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EnglishPage from '../views/EnglishPage.vue'
import ChinesePage from '../views/ChinesePage.vue'
import MasterClasses from '../views/MasterClasses.vue'
import ThemeIntensives from '../views/ThemeIntensives.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/english-page',
    name: 'english-page',
    component: EnglishPage
  },
  {
    path: '/chinese-page',
    name: 'chinese-page',
    component: ChinesePage
  },
  {
    path: '/master-classes',
    name: 'master-classes',
    component: MasterClasses
  },
  {
    path: '/theme-intensives',
    name: 'theme-intensives',
    component: ThemeIntensives
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
