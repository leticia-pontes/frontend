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
        path: "/como-funciona",
        name: "como-funciona",
        component: () => import("pages/ComoFunciona.vue"),
      },
      {
        path: "/exemplos",
        component: () => import("pages/NossosExemplos.vue"),
      },
      {
        path: "/empresa",
        component: () => import("pages/Dashboard_empresa.vue"),
        meta: { customHeader: true },
      },
      {
        path: "/modal-projeto",
        component: () => import("pages/ModalProjeto.vue"),
      },
      {
        path: "/perfil-usuario",
        component: () => import("pages/PerfilUsuario.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
