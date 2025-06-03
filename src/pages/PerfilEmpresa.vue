<template>
  <div>
    <q-tabs v-model="tab">
      <q-tab name="home" label="Home" no-caps @click="$router.push('/')"/>
      <q-tab name="perfil" label="Meu Perfil" no-caps @click="$router.push('/desenvolvedor-profile')"/>
      <q-tab name="pedidos" label="Pedidos" no-caps @click="$router.push('/pedidos-solicitacoes')"/>
      <q-tab name="conversas" label="Conversas" no-caps/>
      <q-tab name="configuracoes" label="Configurações" no-caps @click="$router.push('/complete-perfil')"/>
    </q-tabs>

    <div class="flex flex-center text-h4 q-pa-xl">Seja Bem Vindo, Empresa X</div>

    <div class="row q-gutter-md">
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

      <div class="col q-mr-md">
        <q-card class="bg-light-green-8">
          <q-card-section>
            <div class="text-h6 text-white">Crie sua proposta</div>
          </q-card-section>

          <q-card-section>
            <div class="row">
              <div class="col q-gutter-md">
                <q-input dense class="bg-white" label="Nome do projeto"/>
                <q-input class="bg-white" v-model="text" type="textarea" label="Descrição"/>
                <q-input dense class="bg-white" label="Dados adicionais, observaçõs..."/>
              </div>
              <div class="col-4 q-ml-md q-gutter-x-md">
                <q-input dense class="bg-white" label="Valor da proposta"/>
                <q-checkbox keep-color color="white" v-model="val1" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val2" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val3" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val4" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val5" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val6" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val7" label="Tecnologia 1" class="text-white" />
                <q-checkbox keep-color color="white" v-model="val8" label="Tecnologia 1" class="text-white" />

              </div>
            </div>
          </q-card-section>
        </q-card>


        <div class="q-mt-md q-mb-md">Veja perfis, projetos e propostas</div>

        <div class="row">
          <div class="col q-gutter-sm q-mr-sm">
            <q-card>
              <q-card-section class="row items-center q-gutter-sm q-mb-lg">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg"/>
                </q-avatar>
                <div>Nome da empresa</div>
              </q-card-section>
            </q-card>

            <q-card>
              <q-card-section class="row items-center q-gutter-sm">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg"/>
                </q-avatar>
                <div>Nome da empresa</div>
              </q-card-section>
            </q-card>
          </div>


          <div class="col q-gutter-sm">
            <q-card>
              <q-card-section class="row items-center q-gutter-sm">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg"/>
                </q-avatar>
                <div>Nome da empresa</div>
              </q-card-section>
            </q-card>

            <q-card>
              <q-card-section class="row items-center q-gutter-sm">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg"/>
                </q-avatar>
                <div>Nome da empresa</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>TESTE</div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'home',
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

      text:'',
    }
  }
}
</script>
