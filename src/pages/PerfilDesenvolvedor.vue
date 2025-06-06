<template>
  <div>
    <div class="flex flex-center text-h4 q-pa-xl">
      Seja Bem Vindo, {{ empresa.nome || 'Desenvolvedor X' }}
    </div>

    <div class="row q-gutter-md">
      <!-- Filtro de tecnologias -->
      <div class="col-3 q-ml-xl">
        <q-card class="bg-light-green-8 q-pa-lg">
          <q-card-section>
            <q-input rounded-border dense outlined class="bg-white" label="Buscar" v-model="filtroBusca">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <q-checkbox
              v-for="tecnologia in tecnologias"
              :key="tecnologia.id"
              v-model="tecnologiasSelecionadas"
              :val="tecnologia.id"
              :label="tecnologia.nome"
              keep-color
              color="white"
              class="text-white"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Conteúdo principal -->
      <div class="col q-ml-md q-mr-md">
        <div v-if="pedidosFiltrados.length" class="row q-gutter-md cards-container">
          <q-card
            v-for="pedido in pedidosFiltrados"
            :key="pedido.id_pedido"
            class="col pedido-card bg-white"
            clickable
            bordered
            @click="abrirModalProposta(pedido)"
          >
            <q-card-section>
              <div class="card-title">{{ pedido.titulo }}</div>
              <div class="card-subtitle">Solicitado por: {{ pedido.contratante?.nome }}</div>
              <div class="card-info q-mt-sm">
                <div>Valor estimado: {{ formatarValor(pedido.valor_estimado) }}</div>
                <div>Prazo: {{ formatarData(pedido.data_prazo) }}</div>
                <div>Status: {{ pedido.current_status?.status || 'Indefinido' }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div v-else class="no-pedidos-message q-pa-md">
          Não foram encontrados pedidos pendentes.
        </div>
      </div>
    </div>

    <!-- Modal Desenvolvedor -->
    <q-dialog v-model="modalDesenvolvedor">
      <q-card class="modal modal-proposta" style="min-width: 400px; max-width: 600px;">
        <q-btn icon="close" round dense flat class="absolute-top-right" @click="modalDesenvolvedor = false" />
        <q-card-section class="left-side">
          <div class="modal-title">{{ propostaSelecionada?.titulo }}</div>
          <div class="modal-description q-mt-md">
            <div class="descriptions-items">
              <strong>Proposto por:</strong> {{ propostaSelecionada?.contratante?.nome }}
            </div>
            <div class="descriptions-items">
              <strong>Data da Solicitação:</strong> {{ formatarData(propostaSelecionada?.data_pedido) }}
            </div>
            <div class="descriptions-items">
              <strong>Data de previsão de término:</strong> {{ formatarData(propostaSelecionada?.data_prazo) }}
            </div>
            <div class="descriptions-items">
              <strong>Valor da proposta:</strong> {{ formatarValor(propostaSelecionada?.valor_estimado) }}
            </div>
            <div class="descriptions-items q-mt-sm">
              <strong>Informações sobre o projeto:</strong><br />
              {{ propostaSelecionada?.descricao }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="right-side q-pa-md">
          <div class="about-people q-mb-md">
            <div class="card-name q-mb-sm">
              <span>{{ propostaSelecionada?.contratante?.nome }}</span>
            </div>
            <div class="description">
              {{ propostaSelecionada?.contratante?.endereco || 'Endereço não informado' }}<br />
              {{ propostaSelecionada?.contratante?.telefone || 'Telefone não informado' }}<br />
              <a v-if="propostaSelecionada?.contratante?.email" :href="`mailto:${propostaSelecionada?.contratante?.email}`">
                {{ propostaSelecionada?.contratante?.email }}
              </a>
            </div>
          </div>

          <q-btn label="Tenho interesse" class="simple-button" color="primary" @click="mostrarInteresse" />
          <q-btn
            v-if="propostaSelecionada?.contratante?.telefone"
            label="Entrar em contato"
            class="outline-button q-ml-sm"
            :href="`tel:${propostaSelecionada?.contratante?.telefone}`"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      empresa: {},
      tecnologias: [],
      tecnologiasSelecionadas: [],
      filtroBusca: '',
      pedidos: [],
      modalDesenvolvedor: false,
      propostaSelecionada: null,
    }
  },
  computed: {
    pedidosFiltrados() {
      return this.pedidos.filter(pedido => {
        // Filtro busca por título
        const busca = this.filtroBusca.toLowerCase()
        const tituloMatch = pedido.titulo?.toLowerCase().includes(busca)

        // Filtra tecnologias selecionadas (se pedido.tecnologias existir)
        let techMatch = true
        if (this.tecnologiasSelecionadas.length > 0) {
          // Confirma se pedido.tecnologias é array e seus itens tem id
          techMatch = Array.isArray(pedido.tecnologias)
            ? pedido.tecnologias.some(t => this.tecnologiasSelecionadas.includes(t.id))
            : false
        }

        return tituloMatch && techMatch
      })
    }
  },
  methods: {
    formatarValor(valor) {
      if (!valor) return 'Indefinido'
      let num = valor
      if (typeof valor === 'string') {
        num = parseFloat(valor.replace(',', '.'))
      }
      if (isNaN(num)) return 'Indefinido'
      return `R$ ${num.toFixed(2).replace('.', ',')}`
    },
    formatarData(dataStr) {
      if (!dataStr) return 'Indefinido'
      const date = new Date(dataStr)
      if (isNaN(date.getTime())) return 'Indefinido'
      return date.toLocaleDateString()
    },
    abrirModalProposta(pedido) {
      this.propostaSelecionada = pedido
      this.modalDesenvolvedor = true
    },
    mostrarInteresse() {
      this.$q.notify({
        color: 'green',
        icon: 'check',
        message: 'Interesse demonstrado com sucesso!'
      })
      this.modalDesenvolvedor = false
    },
    carregarPedidos() {
      const token = localStorage.getItem('auth_token')
      if (!token) return

      axios.get(`http://localhost:8000/api/pedidos/pendentes`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        const pedidosArray = res.data.data || []
        console.log('Pedidos pendentes carregados:', pedidosArray)
        this.pedidos = pedidosArray
      })
      .catch(err => {
        console.error('Erro ao carregar pedidos pendentes:', err)
      })
    },
    carregarEmpresa() {
      const idEmpresa = localStorage.getItem('id_empresa')
      const token = localStorage.getItem('auth_token')
      if (!idEmpresa || !token) return

      axios.get(`http://localhost:8000/api/empresas/${idEmpresa}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.empresa = res.data
      })
      .catch(err => console.error('Erro ao carregar empresa:', err))
    },
    carregarTecnologias() {
      const token = localStorage.getItem('auth_token')
      if (!token) return

      axios.get('http://localhost:8000/api/tecnologias', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.tecnologias = res.data
      })
      .catch(err => console.error('Erro ao carregar tecnologias:', err))
    }
  },
  created() {
    this.carregarEmpresa()
    this.carregarTecnologias()
    this.carregarPedidos()
  }
}
</script>

<style scoped>
.pedido-card {
  cursor: pointer;
}

.card-title {
  font-weight: 600;
  font-size: 1.2em;
}

.card-subtitle {
  font-size: 0.9em;
  color: gray;
}

.card-info div {
  font-size: 0.85em;
  margin-top: 2px;
}

.no-pedidos-message {
  font-size: 1.1em;
  color: #777;
}

.modal-proposta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-side {
  flex: 1 1 60%;
  padding: 16px;
}

.right-side {
  flex: 1 1 35%;
  background-color: #f7f7f7;
  padding: 16px;
}

.simple-button {
  width: 100%;
  margin-bottom: 12px;
}

.outline-button {
  width: 100%;
  border: 1px solid #1976d2;
  color: #1976d2;
}

.descriptions-items {
  margin-bottom: 8px;
}
</style>
