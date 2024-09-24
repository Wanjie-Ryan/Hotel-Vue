import RegisterComponent from "@/components/register.vue";
import HomeComponent from "@/components/home.vue";
import NotFoundComponent from "@/components/notFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/',
        name: 'Register',
        component: RegisterComponent
    },
    {
        // path: '/:pathMatch(.*)*',
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;