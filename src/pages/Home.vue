<template>
    <div class="row q-pa-md items-center q-gutter-md">
      <q-tabs class="flex flex-center" v-model="tab">
        <q-tab name="funciona" label="Como funciona?" no-caps/>
        <q-tab name="exemplos" label="Nossos exemplos" no-caps/>
      </q-tabs>
      <q-space/>
      <div class="text-light-green-10 text-h6">Já possui uma conta?</div>
      <q-btn no-caps color="light-green-10" label="Faça o login" push @click="$router.push('/login')"/>
    </div>


    <div class="row q-pa-xl flex flex-center">
      <div class="col">
        <div class="row ">
          <q-item>
            <q-icon name="not_listed_location" size="35px" color="light-green-10" class="q-mb-xl"/>
            <div class="text-h5">Conheça o melhor da nossa plataforma</div>
          </q-item>
        </div>

        <div class="text-h3 q-ml-lg">Feito para quem contrata<br>Perfeito para quem realiza</div>
        <div class="text-h6 q-ml-lg">Encontre especialistas ou ofereça seus serviços em uma plataforma simples, segura e eficiente.</div>
        <q-btn no-caps class="q-ml-lg q-mt-sm" label="Cadastre-se" color="light-green-10" push @click="$router.push('/cadastro')"/>
      </div>

      <div class="col">
        <img src="../assets/image-home.png" style="width:750px;height:550px;"/>
      </div>
    </div>

    <div class="row q-pa-lg q-gutter-md">
        <div class="col ">
            <div class="text-h6">Como funciona?</div>
              Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut voluptates quas.
              Aut neque cumque ea aliquid labore est veritatis saepe non pariatur iusto et velit sint et odit autem.
              A corporis adipisci et nobis ducimus eum similique blanditiis nam Quis dolorem et consequatur temporibus. Et ducimus quia ut numquam dolore quo
              galisum accusantium qui nesciunt voluptas qui reiciendis rerum sit blanditiis ipsam ad inventore dolorum.
              Ut totam sint id ipsa autem nam accusantium dolorem aut iusto omnis est illum ducimus qui consequatur accusamus non voluptas tempore.
        </div>

        <div class="col"><br>
          <div>Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut voluptates quas.
              Aut neque cumque ea aliquid labore est veritatis saepe non pariatur iusto et velit sint et odit autem.
              A corporis adipisci et nobis ducimus eum similique blanditiis nam Quis dolorem et consequatur temporibus. Et ducimus quia ut numquam dolore quo
              galisum accusantium qui nesciunt voluptas qui reiciendis rerum sit blanditiis ipsam ad inventore dolorum.
              Ut totam sint id ipsa autem nam accusantium dolorem aut iusto omnis est illum ducimus qui consequatur accusamus non voluptas tempore.</div>
        </div>
    </div>

    <div class="q-pa-md">
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="double_arrow"
      label="Exemplos de trabalhos"
      header-class="bg-light-green-8 text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>

          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    </div>

    <!--<div class="bg-light-green-8 q-mt-xl" style="height:290px;">
      <div class="text-white flex flex-center q-pa-sm text-h6">Exemplos de trabalhos</div>

      <div class="row q-pa-xl q-gutter-xl">
        <q-card class="col-3 bg-white" style="height: 150px; width:150px;"> Exemplo1</q-card>
        <q-card class="col-3 bg-white" style="height: 150px; width:150px;"> Exemplo2</q-card>
        <q-card class="col-3 bg-white" style="height: 150px; width:150px;"> Exemplo3</q-card>
        <q-card class="col-3 bg-white"style="height: 150px; width:150px;">  Exemplo4</q-card>
        <q-card class="col-3 bg-white" style="height: 150px; width:150px;"> Exemplo3</q-card>
        <q-card class="col-3 bg-white"style="height: 150px; width:150px;">  Exemplo4</q-card>
        <q-card class="col-3 bg-white"style="height: 150px; width:150px;">  Exemplo4</q-card>
      </div>
    </div>-->
    <div></div>


</template>

<script>
export default {
  data () {
    return {
      tab:'funciona',
    }
  }
}
</script>
