import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // Redirect capitalized variants to avoid GitHub Pages 404 on manual URL entry
    { path: "/Home", redirect: "/" },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    { path: "/About", redirect: "/about" },
    {
      path: "/programs",
      name: "programs",
      component: () => import("../pages/Programs.vue"),
    },
    { path: "/Programs", redirect: "/programs" },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/Contact.vue"),
    },
    { path: "/Contact", redirect: "/contact" },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../pages/PrivacyPolicy.vue"),
    },
    { path: "/Privacy-Policy", redirect: "/privacy-policy" },
    { path: "/PrivacyPolicy", redirect: "/privacy-policy" },
    // Catch-all route for 404 pages
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
