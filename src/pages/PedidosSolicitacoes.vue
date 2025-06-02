<template>
  <div>
    <q-tabs v-model="tab">
      <q-tab name="home" label="Home" no-caps @click="$router.push('/')"/>
      <q-tab name="perfil" label="Meu Perfil" no-caps @click="$router.push('/desenvolvedor-profile')"/>
      <q-tab name="pedidos" label="Pedidos" no-caps @click="$router.push('/pedidos-solicitacoes')"/>
      <q-tab name="conversas" label="Conversas" no-caps/>
      <q-tab name="configuracoes" label="Configurações" no-caps  @click="$router.push('/complete-perfil')"/>
    </q-tabs>

    <q-banner class="bg-light-green-10 text-white">
      <div class="text-h5 flex flex-center">Pedidos e Solicitações</div>
    </q-banner>

    <q-card class="row bg-light-green-8 q-ma-xl">
      <q-input dense class="bg-white q-ma-sm" style="width:600px;" label="Buscar">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>


      <q-checkbox v-model="check1" label="Tecnologia 1" class="q-ml-lg q-mr-xl"/>
      <q-checkbox v-model="check2" label="Tecnologia 2" class="q-mr-xl"/>
      <q-checkbox v-model="check3" label="Tecnologia 3" class="q-mr-xl"/>
      <q-checkbox v-model="check4" label="Tecnologia 4" class="q-mr-xl"/>
    </q-card>

    <div class="row">
      <q-card class="col q-ml-lg q-mr-sm" @click="openModal">
            <q-card-section class="row">
              <q-avatar class="q-mr-lg q-ml-md">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg"/>
              </q-avatar>
              <div class="col">
                <div>Nome da Empresa</div>
                <div>Ramo da Empresa</div>
              </div>
            </q-card-section>

            <q-card-section>
              <div>Título da Proposta</div>
            </q-card-section>

            <q-card-section>
              <div>Descrição da Proposta</div>
            </q-card-section>

            <q-card-section>
              <div>Valor da proposta: R$ XXX,XX</div>
            </q-card-section>

            <q-card-section>
              <q-chip square color="light-green-8">Tecnologia</q-chip>
              <q-chip square color="light-green-8">Tecnologia</q-chip>
              <q-chip square color="light-green-8">Tecnologia</q-chip>
            </q-card-section>
          </q-card>


    </div>
  </div>

</template>

<script>
import PropostaModal from 'src/components/PropostaModal.vue';

export default {
  data () {
    return {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    }
  },
  methods:{
    openModal () {
      this.$q.dialog({
        component: PropostaModal
      });
    }
  }
}
</script>
