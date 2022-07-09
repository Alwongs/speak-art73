import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/english-page',
        name: 'english-page',
        component: () => import('@/views/EnglishPage.vue')
    },
    {
        path: '/chinese-page',
        name: 'chinese-page',
        component: () => import('@/views/ChinesePage.vue')
    },
    {
        path: '/master-classes',
        name: 'master-classes',
        component: () => import('@/views/MasterClasses.vue')
    },
    {
        path: '/theme-intensives',
        name: 'theme-intensives',
        component: () => import('@/views/ThemeIntensives.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
