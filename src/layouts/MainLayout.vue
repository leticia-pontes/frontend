<template>
  <div class="q-pa-sm q-gutter-y-sm">
    <q-layout>
      <!-- HEADER PADRÃO -->
      <q-header class="header" v-if="!isCustomHeader">
        <q-toolbar>
          <q-item clickable>
            <img src="../assets/testing-logo.png" style="width: 100px" />
          </q-item>
          <q-space />

          <q-tabs shrink class="tabs-container">
            <q-route-tab
              to="/como-funciona"
              label="Como funciona?"
              class="no-uppercase"
            />
            <q-route-tab
              to="/exemplos"
              label="Nossos exemplos"
              class="no-uppercase"
            />
          </q-tabs>

          <q-space />

          <q-btn flat label="Faça login" class="btn-login" to="/login" />
          <q-btn label="Cadastre-se" class="btn-register" to="/cadastro" />
        </q-toolbar>

        <Login ref="login" />
      </q-header>

      <!-- HEADER ESPECIAL -->
      <q-header class="header" v-else>
        <q-toolbar>
          <q-toolbar-title>Header Especial</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <!-- CONTEÚDO PRINCIPAL -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>
@import "../css/header.css";
</style>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Login from "src/components/Login.vue";

export default {
  name: "MainLayout",

  computed: {
    // Verifica se a rota atual tem meta.customHeader === true
    isCustomHeader() {
      return this.$route.meta.customHeader === true;
    },
  },

  data() {
    return {
      tab: "",
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Docs",
          caption: "quasar.dev",
          icon: "person",
        },
      ],
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    openLogin() {
      this.$refs.login.openModal();

    },
  },

  components: {
    EssentialLink,
    Login,
  },
};
</script>
