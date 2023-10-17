import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/projects/Projects.vue";
import ProjectPage from "./pages/projects/Project.vue";

const routes = [
    {
        path: "/", //Uri to write in browser's searchbar
        name: "home", //Name of route for creating links
        component: HomePage //Component to return page's html
    },
    {
        path: "/projects", //Uri to write in browser's searchbar
        name: "index", //Name of route for creating links
        component: ProjectsPage //Component to return page's html
    },
    {
        path: "/projects/:id", //Uri to write in browser's searchbar
        name: "projects.show", //Name of route for creating links
        component: ProjectPage //Component to return page's html
    }
]

//Creating an istance of Router
const router = createRouter({
    
    history: createWebHistory(), //Manages url change at page change

    routes //Above 'routes' array
});

//Exporting Router's instance created above to be able to use it in 'main.js'
export { router };