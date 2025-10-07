import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue')
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('@/pages/Programs/ProgramsList.vue')
    },
    {
      path: '/programs/:slug',
      name: 'program-detail',
      component: () => import('@/pages/Programs/ProgramDetail.vue'),
      props: true
    },


    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/Contact.vue')
    },
    {
      path: '/how-to-listen',
      name: 'how-to-listen',
      component: () => import('@/pages/HowToListen.vue')
    },
    {
      path: '/editorial-standards',
      name: 'editorial-standards', 
      component: () => import('@/pages/EditorialStandards.vue')
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: () => import('@/pages/Podcast/PodcastList.vue')
    },
    {
      path: '/podcast/:slug',
      name: 'podcast-episode',
      component: () => import('@/pages/Podcast/PodcastEpisode.vue'),
      props: true
    }
  ]
})

export default router
