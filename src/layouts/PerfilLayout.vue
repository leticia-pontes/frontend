<template>
    <div class="q-pa-sm q-gutter-y-sm">
      <q-layout>
          <q-header>
            <q-toolbar class="bg-white">
              <q-item clickable>
                <img src="../assets/testing-logo.png" style="width:100px;"/>
              </q-item>
            <q-space/>


            <q-space/>

            <q-btn rounded flat color="indigo-4" label="Faça login" @click="openLogin()"/>
            <q-btn rounded color="indigo-4" label="Cadastre-se"/>

          </q-toolbar>

          <Login ref="login"/>
        </q-header>


        <q-page-container>
          <router-view />
        </q-page-container>  
          

      </q-layout>

 
    </div>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Login from 'src/components/Login.vue'

export default {
  name: 'MainLayout',

  data () {
    return {
      tab: '',
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'person'
        }
      ]
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },

    openLogin() {
      this.$refs.login.openModal();
    }
  },

  components: {
    EssentialLink, Login
  },
}
</script>