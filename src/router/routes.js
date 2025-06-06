const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Páginas públicas / comuns
      {
        path: "",
        component: () => import("pages/Home.vue")
      },
      {
        path: "home",
        component: () => import("pages/Home.vue")
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "cadastro",
        name: "cadastro",
        component: () => import("pages/Cadastro.vue")
      },
      {
        path: "como-funciona",
        name: "como-funciona",
        component: () => import("pages/ComoFunciona.vue")
      },
      {
        path: "exemplos",
        name: "exemplos",
        component: () => import("pages/NossosExemplos.vue")
      },
      {
        path: "planos",
        name: "planos",
        component: () => import("pages/Planos.vue")
      },

      // Rota “/profile” genérica (redireciona depois)
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/Profile.vue"),
        // todos logados podem entrar aqui apenas para redirecionar
        meta: { requiresAuth: true }
      },

      // Exemplo de rota de Dashboard empresarial (se for só para empresas)
      {
        path: "empresa",
        name: "empresa",
        component: () => import("pages/Dashboard_empresa.vue"),
        meta: { requiresAuth: true, requiresPerfilTipo: [1], customHeader: true }
      },

      {
        path: "modal-projeto",
        name: "modal-projeto",
        component: () => import("pages/ModalProjeto.vue"),
        meta: { requiresAuth: true }
      },

      // Rotas específicas para empresa (tipo 1)
      {
        path: "empresa-profile",
        name: "empresa-profile",
        component: () => import("pages/PerfilEmpresa.vue"),
        meta: { requiresAuth: true, requiresPerfilTipo: [1], customHeader: true }
      },
      {
        path: "minhas-propostas",
        name: "minhas-propostas",
        component: () => import("pages/MinhasPropostas.vue"),
        meta: { requiresAuth: true, customHeader: true }
      },

      // Rotas específicas para desenvolvedor (tipo 2)
      {
        path: "desenvolvedor-profile",
        name: "desenvolvedor-profile",
        component: () => import("pages/PerfilDesenvolvedor.vue"),
        meta: { requiresAuth: true, requiresPerfilTipo: [2], customHeader: true }
      },

      // Meu Perfil (pode ser tanto empresa quanto desenvolvedor)
      {
        path: "meu-perfil",
        name: "meu-perfil",
        component: () => import("pages/MeuPerfil.vue"),
        meta: { requiresAuth: true, customHeader: true }
      },

      // Pedidos/Solicitações (comum, mas cada tipo vê campos diferentes dentro do componente)
      {
        path: "pedidos-solicitacoes",
        name: "pedidos-solicitacoes",
        component: () => import("pages/PedidosSolicitacoes.vue"),
        meta: { requiresAuth: true, customHeader: true }
      }
    ]
  },

  // Rota “catch all 404”
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
