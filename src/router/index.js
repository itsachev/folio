import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
        meta: { title: 'Home' }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsView.vue'),
        meta: { title: 'Projects' }
    },
    {
        path: '/project/:id',
        name: 'ProjectDetails',
        component: () => import('../views/ProjectDetails.vue'),
        meta: { title: 'Project Details' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Portfolio'
    next()
})

export default router
