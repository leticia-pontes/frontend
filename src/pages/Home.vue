<template>
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

  <div id="como-funciona" class="row q-pa-lg q-gutter-md">
    <div class="col ">
      <div class="text-h6">Como funciona?</div>
      Nossa plataforma conecta empresas que têm demandas específicas com desenvolvedoras de soluções tecnológicas. As contratantes criam pedidos detalhando seus projetos e necessidades. Já as empresas desenvolvedoras podem visualizar esses pedidos, escolher os que desejam atender e submeter propostas para execução.
    </div>

    <div class="col"><br>
      <div>
        Durante o processo, as desenvolvedoras acompanham o andamento dos projetos, entregam as soluções e recebem avaliações ao final. Para tornar a experiência mais motivadora, incluímos um sistema de gamificação, onde as desenvolvedoras acumulam pontos, sobem de nível e conquistam distintivos conforme a qualidade e a quantidade de trabalhos entregues.
      </div>
    </div>
  </div>


  <div id="nossos-exemplos" class="bg-light-green-8 q-mt-xl" style="height:450px;">
    <div class="text-white flex flex-center q-pa-sm text-h6">Exemplos de trabalhos</div>
    <div v-if="carregando" class="text-white flex flex-center q-pa-sm text-h5">Carregando projetos...</div>
    <div v-else-if="erro" class="text-white flex flex-center q-pa-sm text-h5">{{ erro }}</div>
    <div v-else-if="projetos.length === 0" class="text-white flex flex-center q-pa-sm text-h5">Nenhum projeto
      encontrado.</div>


    <div v-else class="row justify-center q-pa-xl q-gutter-xl">
      <q-card v-for="projeto in projetos" :key="projeto.id_pedido" class="col-3 bg-white"
        style="height: 300px; max-width: 250px; width: 100%;">

        <div class="q-pa-sm">
          <div class="text-subtitle1">{{ projeto.titulo }}</div>
          <div class="text-caption text-grey-7 q-mt-xs">
            {{ truncarTexto(projeto.descricao, 200) }}
          </div>

          <div class="text-caption text-grey-6 q-mt-xs">
            Empresa: {{ projeto.contratante?.nome || 'N/A' }}
          </div>

          <div class="text-caption text-blue-9 q-mt-sm">
            Pedido: {{ formatarData(projeto.data_pedido) }}
          </div>
          <div class="text-caption text-blue-9">
            Prazo: {{ formatarData(projeto.data_prazo) }}
          </div>
        </div>
      </q-card>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projetos: [],
      carregando: false,
      erro: null,
    };
  },

  mounted() {
    this.buscarProjetosRecentes();
  },

  methods: {
    async buscarProjetosRecentes() {
      this.carregando = true;
      this.erro = null;
      try {
        const response = await axios.get('http://localhost:8000/api/pedidos-recentes');
        this.projetos = response.data;
      } catch (err) {
        this.erro = 'Erro ao buscar projetos recentes';
        console.error(err);
      } finally {
        this.carregando = false;
      }
    },

    formatarData(data) {
      if (!data) return '—';
      return new Date(data).toLocaleDateString('pt-BR');
    },

    truncarTexto(texto, limite = 100) {
      if (!texto) return '';
      if (texto.length <= limite) return texto;
      return texto.slice(0, limite) + '...';
    },
  }
}
</script>
