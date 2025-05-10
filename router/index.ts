import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '~/pages/index.vue'
import EventDetailsPage from '~/pages/eventdetails-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetailsPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router