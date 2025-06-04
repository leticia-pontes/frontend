<template>
  <!-- <div class="row q-pa-md items-center q-gutter-md">
      <q-tabs class="flex flex-center" v-model="tab">
        <q-tab name="funciona" label="Como funciona?" no-caps/>
        <q-tab name="exemplos" label="Nossos exemplos" no-caps/>
      </q-tabs>
      <q-space/>
      <div class="text-light-green-10 text-h6">Já possui uma conta?</div>
      <q-btn no-caps color="light-green-10" label="Faça o login" push @click="$router.push('/login')"/>
    </div> -->


  <div class="row q-pa-xl flex flex-center">
    <div class="col">
      <div class="row ">
        <q-item>
          <q-icon name="not_listed_location" size="35px" color="light-green-10" class="q-mb-xl" />
          <div class="text-h5">Conheça o melhor da nossa plataforma</div>
        </q-item>
      </div>

      <div class="text-h3 q-ml-lg">Feito para quem contrata<br>Perfeito para quem realiza</div>
      <div class="text-h6 q-ml-lg">Encontre especialistas ou ofereça seus serviços em uma plataforma simples, segura e
        eficiente.</div>
      <q-btn no-caps class="q-ml-lg q-mt-sm" label="Cadastre-se" color="light-green-10" push
        @click="$router.push('/cadastro')" />
    </div>

    <div class="col">
      <img src="../assets/image-home.png" style="width:750px;height:550px;" />
    </div>
  </div>

  <div class="row q-pa-lg q-gutter-md">
    <div class="col ">
      <div class="text-h6">Como funciona?</div>
      Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut
      voluptates quas.
      Aut neque cumque ea aliquid labore est veritatis saepe non pariatur iusto et velit sint et odit autem.
      A corporis adipisci et nobis ducimus eum similique blanditiis nam Quis dolorem et consequatur temporibus. Et
      ducimus quia ut numquam dolore quo
      galisum accusantium qui nesciunt voluptas qui reiciendis rerum sit blanditiis ipsam ad inventore dolorum.
      Ut totam sint id ipsa autem nam accusantium dolorem aut iusto omnis est illum ducimus qui consequatur accusamus
      non voluptas tempore.
    </div>

    <div class="col"><br>
      <div>Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut
        voluptates quas.
        Aut neque cumque ea aliquid labore est veritatis saepe non pariatur iusto et velit sint et odit autem.
        A corporis adipisci et nobis ducimus eum similique blanditiis nam Quis dolorem et consequatur temporibus. Et
        ducimus quia ut numquam dolore quo
        galisum accusantium qui nesciunt voluptas qui reiciendis rerum sit blanditiis ipsam ad inventore dolorum.
        Ut totam sint id ipsa autem nam accusantium dolorem aut iusto omnis est illum ducimus qui consequatur accusamus
        non voluptas tempore.</div>
    </div>
  </div>


  <div class="bg-light-green-8 q-mt-xl" style="height:450px;">
    <div class="text-white flex flex-center q-pa-sm text-h6">Exemplos de trabalhos</div>
    <div v-if="carregando" class="text-white flex flex-center q-pa-sm text-h5">Carregando projetos...</div>
    <div v-else-if="erro" class="text-white flex flex-center q-pa-sm text-h5">{{ erro }}</div>
    <div v-else-if="projetos.length === 0" class="text-white flex flex-center q-pa-sm text-h5">Nenhum projeto
      encontrado.</div>


    <div v-else class="row justify-center q-pa-xl q-gutter-xl">
      <q-card v-for="projeto in projetosConcluidos" :key="projeto.id" class="col-3 bg-white"
        style="height: 300px; max-width: 250px; width: 100%;">

        <div class="q-pa-sm">
          <div class="text-subtitle1">{{ projeto.nome_projeto }}</div>
          <div class="text-caption text-grey-7 q-mt-xs">
            {{ projeto.descricao }}
          </div>

          <div class="text-caption text-grey-6 q-mt-xs">
            Empresa: {{ projeto.empresa.nome }}
          </div>


          <div class="q-mt-xs">
            <q-chip color="green" text-color="white" dense small>
              {{ projeto.status }}
            </q-chip>
          </div>
          <div class="text-caption text-blue-9 q-mt-sm">
            Início: {{ formatarData(projeto.data_inicio) }}
          </div>
          <div class="text-caption text-blue-9">
            Fim: {{ formatarData(projeto.data_fim) }}
          </div>
          
        </div>
      </q-card>
    </div>

  </div>


</template>

<script>
import axios from 'axios';
import { computed } from 'vue';


export default {
  data() {
    return {
      tab: 'funciona',
      projetos: [], // para armazenar os projetos da API
      carregando: false,
      erro: null,
    }
  },

  computed: {
    projetosConcluidos() {
      return this.projetos.filter(projeto => projeto.status === 'Concluído');
    }
  },

  mounted() {
    this.buscarProjetos();
  },

  methods: {
    async buscarProjetos() {
      this.carregando = true;
      this.erro = null;
      try {
        const response = await axios.get('http://localhost:8000/api/projetos');
        this.projetos = response.data.sort((a, b) => new Date(b.data_inicio) - new Date(a.data_inicio));
      } catch (err) {
        this.erro = 'Erro ao buscar projetos';
        console.error(err);
      } finally {
        this.carregando = false;
      }
    },

    formatarData(data) {
      if (!data) return '—';
      return new Date(data).toLocaleDateString('pt-BR');
    }
  }
}
</script>
