<template>
  <div>
    <q-tabs v-model="tab">
      <q-tab name="home" label="Home" no-caps @click="$router.push('/')"/>
      <q-tab name="perfil" label="Meu Perfil" no-caps @click="$router.push('/desenvolvedor-profile')"/>
      <q-tab name="pedidos" label="Pedidos" no-caps @click="$router.push('/pedidos-solicitacoes')"/>
      <q-tab name="conversas" label="Conversas" no-caps/>
      <q-tab name="configuracoes" label="Configurações" no-caps  @click="$router.push('/complete-perfil')"/>
    </q-tabs>
    <div class="flex flex-center text-h4 q-pa-xl">Seja Bem Vindo, Desenvolvedor X</div>

    <div class="row q- gutter-md">
      <div class="col-3 q-ml-xl">
        <q-card class="bg-light-green-8 q-pa-lg">

          <q-card-section>
            <q-input rounded-border dense outlined class="bg-white" label="Buscar">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
          </q-card-section>

          <q-card-section> <!--COLOCAR CHECKBOX TEMPORARIOS, USAR V-FOR PARA RENDERIZAR AS OPÇÕES-->
            <q-checkbox keep-color color="white" v-model="val1" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val2" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val3" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val4" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val5" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val6" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val7" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val8" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val9" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val9" label="Tecnologia 1" class="text-white" /><br>
            <q-checkbox keep-color color="white" v-model="val10" label="Tecnologia 1" class="text-white" /><br>

          </q-card-section>
        </q-card>
      </div>
      <div class="col q-ml-md q-mr-md">
        <div class="row q-gutter-md">
          <q-card class="col bg-light-green-8">
            <q-card-section class="flex flex-center">
              <div>Título da Proposta</div><br>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>Nome da Empresa</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>dd/mm/yyyy</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <q-btn no-caps label="Ver proposta" color="white" class="text-light-green-10"/>
            </q-card-section>
          </q-card>

          <q-card class="col bg-light-green-8">
            <q-card-section class="flex flex-center">
              <div>Título da Proposta</div><br>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>Nome da Empresa</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>dd/mm/yyyy</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <q-btn no-caps label="Ver proposta" color="white" class="text-light-green-10"/>
            </q-card-section>
          </q-card>

          <q-card class="col bg-light-green-8">
            <q-card-section class="flex flex-center">
              <div>Título da Proposta</div><br>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>Nome da Empresa</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <div>dd/mm/yyyy</div>
            </q-card-section>

            <q-card-section class="flex flex-center">
              <q-btn no-caps label="Ver proposta" color="white" class="text-light-green-10"/>
            </q-card-section>
          </q-card>
        </div>

        <div class="row q-mt-lg">
          <q-card class="col q-mr-lg">
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


          <q-card class="col">
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab:'home',
      val1: false,
      val2: false,
      val3: false,
      val4: false,
      val5: false,
      val6: false,
      val7: false,
      val8: false,
      val9: false,
      val10: false,
    }
  }
}
</script>
