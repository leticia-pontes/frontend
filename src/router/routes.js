const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/home", component: () => import("pages/Home.vue") },
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "cadastro",
        name: "cadastro",
        component: () => import("pages/Cadastro.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/Profile.vue"),
      },
      {
        path: "teste",
        name: "teste",
        component: () => import("pages/Profile.vue"),
      },
      {
        path: "como-funciona",
        name: "como-funciona",
        component: () => import("pages/ComoFunciona.vue"),
      },
      {
        path: "exemplos",
        name: "exemplos",
        component: () => import("pages/NossosExemplos.vue"),
      },
      {
        path: "empresa",
        name: "empresa",
        component: () => import("pages/Dashboard_empresa.vue"),
        meta: { customHeader: true },
      },
      {
        path: "modal-projeto",
        name: "modal-projeto",
        component: () => import("pages/ModalProjeto.vue"),
      },
      {
        path: "perfil-usuario",
        name: "perfil-usuario",
        component: () => import("pages/PerfilUsuario.vue"),
      },
      {
        path: 'empresa-profile',
        name: 'empresa-profile',
        component: () => import('pages/PerfilEmpresa.vue'),
        meta: {
          customHeader: true
        }
      },
      {
        path: 'desenvolvedor-profile',
        name: 'desenvolvedor-profile',
        component: () => import('pages/PerfilDesenvolvedor.vue'),
        meta: {
          customHeader: true
        },
      },
      {
        path: 'pedidos-solicitacoes',
        name: 'pedidos-solicitacoes',
        component: () => import('pages/PedidosSolicitacoes.vue'),
        meta: {
          customHeader: true
        }
      },
      {
        path: "planos",
        name: "planos",
        component: () => import("pages/Planos.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
