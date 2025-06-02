<template>
  <div class="row q-pa-md items-center q-gutter-md">
    <q-space/>
    <q-tabs class="flex flex-center" v-model="tab">
      <q-tab name="funciona" label="Como funciona?" no-caps/>
      <q-tab name="exemplos" label="Nossos exemplos" no-caps/>
    </q-tabs>
    <q-space/>
  </div>

  <div class="flex flex-center text-h3 q-mt-xl">Complete seu perfil</div>
  <q-space/>
  <div class="row q-pa-xl">
    <div class="col q-ml-xl">
      <div class="row items-center">
        <q-avatar class="q-ml-xl q-mr-md" size="170px">
          <img src="../assets/avatar2.png"/>
        </q-avatar>

        <div class="text-body1"> Escolha uma foto de perfil</div>
      </div>

      <div class="q-mt-md">
        <q-input outlined class="shadow-2" bg-color="white" type="textarea" style="width:500px;"/>

        <q-select dense bg-color="white" outlined label="Escolha seu nicho" class="q-mt-md" style="width:500px;"/>
      </div>
    </div>
    <div class="col q-pa-sm">
      <q-input outlined dense class="shadow-2" bg-color="white" label="Preferências de tecnologia"/>
      <div class="row q-gutter-sm q-mt-sm">
        <q-input outlined dense class="shadow-2 col" bg-color="white" label="Intagram"/>
        <q-input outlined dense class="shadow-2 col" bg-color="white" label="Linkedin"/>
      </div>

      <div class="row q-gutter-sm q-mt-sm">
        <q-input outlined dense class="shadow-2 col" bg-color="white" label="Facebook"/>
        <q-input outlined dense class="shadow-2 col" bg-color="white" label="Website"/>
      </div>

      <q-btn color="light-green-10" class="q-mt-md full-width" label="Concluir Perfil" no-caps/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab:'funciona'
    }
  }
}
</script>
