<template>
  <div class="q-pa-sm q-gutter-y-sm">
    <q-layout>

      <!-- HEADER PADRÃO -->
      <q-header class="header" v-if="!isCustomHeader">
        <q-toolbar>
          <q-space />

          <q-tabs
            shrink
            class="tabs-container"
            v-model="tab"
            @update:model-value="scrollToSection"
          >
            <q-tab name="como-funciona" label="Como funciona?" class="no-uppercase" />
            <q-tab name="nossos-exemplos" label="Nossos exemplos" class="no-uppercase" />
          </q-tabs>

          <q-space />

          <q-btn flat label="Faça login" class="btn-login" to="/login" />
          <q-btn label="Cadastre-se" class="btn-register" to="/cadastro" />
        </q-toolbar>

        <Login ref="login" />
      </q-header>

      <!-- HEADER ESPECIAL -->
      <q-header class="header" v-if="$route.meta.customHeader">
        <q-toolbar class="toolbar">
          <q-tabs shrink class="tabs-container-secondary">
            <q-route-tab :to="perfilRoute" label="Home" class="no-uppercase" />
            <q-route-tab to="/meu-perfil" label="Meu Perfil" class="no-uppercase" />
            <q-route-tab to="/pedidos-solicitacoes" label="Pedidos" class="no-uppercase" />
            <!-- <q-route-tab to="/chat" label="Conversas" class="no-uppercase" />
            <q-route-tab to="/complete-perfil" label="Configurações" class="no-uppercase" /> -->
          </q-tabs>

          <q-space />

          <q-btn flat round icon="logout" @click="fazerLogout" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer>
        <p>Fábrica de Projetos Ágeis - Ciência da Computação 2025</p>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Login from 'src/components/Login.vue';

const route = useRoute();
const router = useRouter();

const tab = ref('');
const login = ref(null);

const isCustomHeader = computed(() => route.meta.customHeader === true);

// Mapeamento id_tipo_perfil para nome
const tipoPerfilMap = {
  '1': 'Contratante',
  '2': 'Desenvolvedor',
};

const tipoEmpresa = ref(null);

onMounted(() => {
  const tipoPerfilId = localStorage.getItem('user_tipo_perfil');
  if (tipoPerfilId && tipoPerfilMap[tipoPerfilId]) {
    tipoEmpresa.value = tipoPerfilMap[tipoPerfilId];
  }
});

const perfilRoute = computed(() => {
  if (tipoEmpresa.value === 'Contratante') return '/empresa-profile';
  if (tipoEmpresa.value === 'Desenvolvedor') return '/desenvolvedor-profile';
  return '/meu-perfil';
});

function scrollToSection(nomeSecao) {
  if (route.path !== '/home') {
    router.push('/home').then(() => {
      nextTick(() => {
        scrollToElement(nomeSecao);
      });
    });
  } else {
    scrollToElement(nomeSecao);
  }
}

function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function fazerLogout() {
  // Limpar dados locais e redirecionar para login
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_tipo_perfil');
  localStorage.removeItem('id_empresa');
  localStorage.removeItem('id_perfil');

  router.push('/login');
}

function openLogin() {
  login.value?.openModal();
}
</script>

<style scoped>
@import "../css/header.css";
@import "../css/footer.css";
</style>
