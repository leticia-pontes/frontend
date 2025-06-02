<template>
  <div class="q-pa-sm q-gutter-y-sm">
    <q-layout>
      <q-header class="header">
        <Login ref="login" />
      </q-header>

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



