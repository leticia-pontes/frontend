<template>
  <div class="absolute-center">
    <div class="text-h4 flex flex-center q-mb-xl">Nossos Planos</div>

    <div class="row q-gutter">

      <q-card class="col q-ma-md" v-for="plano in planos" :key="plano.id_plano" style="width:400px; height:450px; display: flex; flex-direction: column; justify-content: space-between;">
        <q-card-section>
          <div class="text-grey-8 flex flex-center">{{ plano.nome_plano }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-light-green-10 text-bold text-h5 flex flex-center">R$ {{ plano.valor }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-bold" style="margin-bottom: 20px;">Vantagens</div>
          <ul>
            <li v-for="(vantagem, index) in getVantagens(plano.descricao)" :key="index" style="list-style: none; margin-bottom: 10px;">
              {{ vantagem }}
            </li>
          </ul>
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn
            label="Selecionar"
            text-color="white"
            style="background-color: #3F560E; width: 100%; font-weight: bold;"
            @click="selecionarPlano(plano)"
          />
          <!-- AINDA VAI ATUALIZAR O PLANO DO USUARIO -->
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      planos: []
    }
  },
  methods: {
    getVantagens(descricao) {
      try {
        const obj = JSON.parse(descricao)
        return obj.vantagens || []
      } catch {
        return []
      }
    }
  },
  async mounted () {
    const token = '1|dsTZvCtq18LYWdF3acizWpdgBzXlUVfmgAewBWSLd5a5d6a0' // ALTERAR, APENAS TESTE

    try {
      const response = await axios.get('http://localhost:8000/api/planos', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log('Dados recebidos:', response.data)
      this.planos = response.data

    } catch (error) {
      console.error('Erro ao buscar planos:', error)
    }
  }
}


</script>
