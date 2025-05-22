const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
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
      // {
      //   path: "dashboard",
      //   name: "dashboard",
      //   component: () => import("pages/Dashboard.vue"),
      // },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];


export default routes;





