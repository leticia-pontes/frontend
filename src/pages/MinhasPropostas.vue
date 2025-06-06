<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

const token = localStorage.getItem('auth_token')

if (!token) {
  Notify.create({
    type: 'negative',
    message: 'Usuário não autenticado. Por favor, faça login novamente.',
    position: 'top'
  })
}

const pedidos = ref([])
const propostaSelecionada = ref(null)
const tipoPerfil = ref('')
const modalDesenvolvedor = ref(false)
const modalContratante = ref(false)

function abrirModalProposta(pedido) {
  propostaSelecionada.value = pedido
  if (tipoPerfil.value === 'contratante') {
    modalContratante.value = true
  } else {
    modalDesenvolvedor.value = true
  }
}

function formatarData(dataISO) {
  if (!dataISO) return 'A definir'
  const data = new Date(dataISO)
  return data.toLocaleDateString('pt-BR')
}

function formatarValor(valor) {
  const numero = Number(valor)
  if (!valor || isNaN(numero)) return 'A definir'
  return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

async function mostrarInteresse() {
  if (!propostaSelecionada.value) return

  try {
    await axios.put(
      `http://localhost:8000/api/pedidos/${propostaSelecionada.value.id_pedido}`,
      { id_empresa_desenvolvedora: propostaSelecionada.value.id_empresa_desenvolvedora || 4 },
      { headers: { Authorization: `Bearer ${token}` } }
    )

    Notify.create({
      type: 'positive',
      message: 'Interesse registrado com sucesso!',
      position: 'top'
    })

    modalDesenvolvedor.value = false
  } catch (error) {
    Notify.create({
      type: 'negative',
      message: 'Erro ao registrar interesse.',
      position: 'top'
    })
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/pedidos', {
      headers: { Authorization: `Bearer ${token}` }
    })

    pedidos.value = response.data.data
    tipoPerfil.value = response.data.tipo_perfil || ''
  } catch (error) {
    Notify.create({
      type: 'negative',
      message: 'Erro ao buscar os dados.',
      position: 'top'
    })
  }
})
</script>

<template>
  <div>
    <div v-if="pedidos.length" class="cards-container">
      <q-card
        v-for="pedido in pedidos"
        :key="pedido.id_pedido"
        class="pedido-card"
        @click="abrirModalProposta(pedido)"
        clickable
        bordered
      >
        <q-card-section>
          <div class="card-title">{{ pedido.titulo }}</div>
          <div class="card-subtitle">Solicitado por: {{ pedido.contratante?.nome }}</div>
          <div class="card-info">
            <div>Valor estimado: {{ formatarValor(pedido.valor_estimado) }}</div>
            <div>Prazo: {{ formatarData(pedido.data_prazo) }}</div>
            <div>Status: {{ pedido.current_status?.status || 'Indefinido' }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div v-else class="no-pedidos-message">
      Não foram encontrados pedidos para a empresa logada.
    </div>

    <!-- Modal Desenvolvedor -->
    <q-dialog v-model="modalDesenvolvedor">
      <q-card class="modal modal-proposta">
        <q-btn icon="close" round dense flat class="absolute-top-right" @click="modalDesenvolvedor = false" />
        <q-card-section class="left-side">
          <div class="modal-title">{{ propostaSelecionada?.titulo }}</div>
          <div class="modal-description">
            <div class="descriptions-items">
              <span>Proposto por:</span> {{ propostaSelecionada?.contratante?.nome }}
            </div>
            <div class="descriptions-items">
              <span>Data da Solicitação:</span> {{ formatarData(propostaSelecionada?.data_pedido) }}
            </div>
            <div class="descriptions-items">
              <span>Data de previsão de término:</span> {{ formatarData(propostaSelecionada?.data_prazo) }}
            </div>
            <div class="descriptions-items">
              <span>Valor da proposta:</span> {{ formatarValor(propostaSelecionada?.valor_estimado) }}
            </div>
            <div class="descriptions-items">
              <span>Informações sobre o projeto:</span><br>
              {{ propostaSelecionada?.descricao }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="right-side">
          <div class="about-people">
            <div class="card-name">
              <span>{{ propostaSelecionada?.contratante?.nome }}</span>
            </div>
            <div class="description">
              {{ propostaSelecionada?.contratante?.endereco || 'Endereço não informado' }}<br>
              {{ propostaSelecionada?.contratante?.telefone || 'Telefone não informado' }}<br>
              <a v-if="propostaSelecionada?.contratante?.email" :href="`mailto:${propostaSelecionada?.contratante?.email}`">
                {{ propostaSelecionada?.contratante?.email }}
              </a>
            </div>
          </div>

          <q-btn label="Tenho interesse" class="simple-button" @click="mostrarInteresse" />
          <q-btn
            v-if="propostaSelecionada?.contratante?.telefone"
            label="Entrar em contato"
            class="outline-button"
            :href="`tel:${propostaSelecionada?.contratante?.telefone}`"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Modal Contratante -->
    <q-dialog v-model="modalContratante">
      <q-card class="modal modal-status">
        <q-btn icon="close" round dense flat class="absolute-top-right" @click="modalContratante = false" />
        <q-card-section>
          <div class="modal-title">{{ propostaSelecionada?.titulo }}</div>
          <div class="modal-description">
            <p><strong>Status atual:</strong> {{ propostaSelecionada?.current_status?.status || 'Indefinido' }}</p>
            <p><strong>Descrição:</strong> {{ propostaSelecionada?.descricao }}</p>
            <p><strong>Prazo:</strong> {{ formatarData(propostaSelecionada?.data_prazo) }}</p>
            <p><strong>Valor estimado:</strong> {{ formatarValor(propostaSelecionada?.valor_estimado) }}</p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
}
.pedido-card {
  width: 300px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}
.pedido-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.card-title {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
}
.card-subtitle {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}
.card-info > div {
  font-size: 13px;
  margin-bottom: 3px;
}
.no-pedidos-message {
  font-size: 16px;
  color: #777;
  margin-top: 20px;
}
.modal-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
