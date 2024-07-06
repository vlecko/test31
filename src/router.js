import { createRouter } from "vue-router";

import Car from "./pages/Car.vue";
import Post from "./pages/Post.vue";
import CarList from "./pages/CarList.vue";
import NotFoundComponent from "./pages/NotFoundComponent.vue";

const routes = [{
        path: "/",
        component: CarList,
    },
    {
        path: "/car/:id",
        component: Car,
    },
    {
        path: "/post/:id",
        component: Post,
    },
    {
        path: "/:pathMatch(.*)",
        component: NotFoundComponent,
    },

];

export default function(history) {
    return createRouter({
        history,
        routes,
    });
}