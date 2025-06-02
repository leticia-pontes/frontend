const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue') },

      { path: 'login', component: () => import('pages/Login.vue') },

      { path: 'cadastro', component: () => import('pages/Cadastro.vue') },

      { path: 'planos', component: () => import('pages/Planos.vue') },

      { path: 'empresa-profile', component: () => import('pages/PerfilEmpresa.vue') },

      {path: 'desenvolvedor-profile', component: () => import('pages/PerfilDesenvolvedor.vue') },

      {path: 'pedidos-solicitacoes', component: () => import('pages/PedidosSolicitacoes.vue') },

      {path: 'complete-perfil', component: () => import ('pages/CompletePerfil.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
