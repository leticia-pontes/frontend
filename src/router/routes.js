const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'cadastro', name: 'cadastro', component: () => import('pages/Cadastro.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/Profile.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
