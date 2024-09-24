import RegisterComponent from "@/components/register.vue";
import HomeComponent from "@/components/home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;