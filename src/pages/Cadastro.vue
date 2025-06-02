<template>
  <div class="absolute-center q-gutter-sm">

    <div class="flex flex-center text-h4 q-mb-xl" style="width:400px;">Cadastro</div>
    <q-input dense label="Nome" class="bg-white" v-model="dados.nome"/>
    <q-input dense label="E-mail" class="bg-white" v-model="dados.email"/>

    <div class="row">
      <q-input dense class="col bg-white q-mr-sm" label="Senha" v-model="dados.senha1"/>
        <q-input dense class="col bg-white" label="Senha" v-model="dados.senha2">
          <template v-slot:append v-if="dados.senha1 ">
            <q-icon name="done" />
          </template>
        </q-input>
    </div>

    <q-select  dense v-model="dados.perfil" :options="options" class="bg-white" label="Perfil"/>

    <q-btn no-caps label="Cadastrar" color="light-green-10" class="full-width"/>

    <div class="row flex flex-center">
      <div>Já possui uma conta?</div>
      <a href="/login" class="q-ml-sm">Faça Login</a>
    </div>
  </div>

</template>

<script>
export default{
  data () {
    return {
      dados: {
        perfil: null,
        nome: null,
        email: null,
        senha1: null,
        senha2: null,
      },



      options: [
        'Quero solicitar soluções',
        'Quero oferecer soluções'
      ]
    }
  }
}
</script>
