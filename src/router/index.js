import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'Atelier Gurgaon — Luxury Interior Design Studio' } },
  { path: '/about', name: 'about', component: AboutPage, meta: { title: 'About — Atelier Gurgaon' } },
  { path: '/projects', name: 'projects', component: ProjectsPage, meta: { title: 'Projects — Atelier Gurgaon' } },
  { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage, meta: { title: 'Project — Atelier Gurgaon' } },
  { path: '/contact', name: 'contact', component: ContactPage, meta: { title: 'Contact — Atelier Gurgaon' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Atelier Gurgaon'
  window.scrollTo({ top: 0, behavior: 'instant' })
})

export default router
