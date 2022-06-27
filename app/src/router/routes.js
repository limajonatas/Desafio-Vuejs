
const routes = [
  {
    path: '/', nome: 'home', component: () => import('pages/IndexPage.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
export default routes
