import { createRouter, createWebHistory } from "vue-router"
import NavBarVue from "./views/NavBar.vue"
import HomeVue from "./views/Home.vue"
const routes = [
    {
        path: '/',
        component: HomeVue
    },
    {
        path: '/menu',
        component: NavBarVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;