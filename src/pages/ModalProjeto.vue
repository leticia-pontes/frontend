<template>
  <div v-if="pedidos.length" style="display: flex; justify-content: space-around; gap: 10px;">
    <!-- SIMULACAO DE VARIAS PROPOSTAS -->
    <q-btn style="padding: 10px;"
      v-for="pedido in pedidos"
      :key="pedido.id_pedido"
      :label="`Abrir Proposta ${pedido.id_pedido}`"
      @click="abrirModalProposta(pedido)"
      color="primary"
    />
  </div>

  <br>
  <hr>
  <br>

  <div v-if="pedidos.length" style="display: flex; justify-content: space-around; gap: 10px;">
    <!-- SIMULACAO DE VARIOS PROJETOS -->
    <q-btn style="padding: 10px;"
      v-for="pedido in pedidos"
      :key="pedido.id_pedido"
      :label="`Abrir Projeto ${pedido.id_pedido}`"
      @click="abrirModalProjeto(pedido)"
      color="primary"
    />
  </div>

  <q-dialog v-model="projeto">
    <q-card class="modal modal-projeto">
      <q-btn icon="close"
          round
          dense
          flat
          class="absolute-top-right"
          @click="projeto = false"
        />

      <q-card-section class="left-side">
        <div class="modal-title">
          {{ projetoSelecionado.titulo }}
        </div>

        <div class="modal-description">
          <div class="descriptions-items">
            <span>Criado por:</span> {{ projetoSelecionado.contratante.nome }}
          </div>

          <div class="descriptions-items">
            <span>Desenvolvedor:</span> {{ projetoSelecionado.desenvolvedora?.nome }}
          </div>

          <div class="descriptions-items">
            <span>Data de criação:</span> {{ formatarData(projetoSelecionado.created_at) }}
          </div>

          <div class="descriptions-items">
            <span>Data da última atualização:</span> {{ formatarData(projetoSelecionado.updated_at) }}
          </div>

          <div class="descriptions-items">
            <span>Data de término:</span> XX/XX/XXXX
          </div>

          <div class="descriptions-items">
            <span>Sobre o projeto:</span><br>
            {{ projetoSelecionado.descricao }}
          </div>

          <!-- <div class="descriptions-items">
            <span>Checklist de itens:</span>
            <div class="checklist-items">
              <q-checkbox
                v-for="item in itens"
                  :key="item"
                  :label="item"
                  :val="item"
                v-model="itensSelecionados"
                class="checkbox"
                checked-icon="check"
              />
            </div>
          </div> -->
        </div>
      </q-card-section>

      <q-card-section class="right-side">
        <div class="info-project">
          <div class="project-status">
            <div :class="['status', statusInfo.class]">
              {{ statusInfo.label }}
            </div>
          </div>
          <div class="descriptions-items">
            <span>Proposta Inicial:</span> {{ formatarValor(projetoSelecionado.valor_estimado) }}
          </div>
          <!-- <div class="descriptions-items">
            <span>Valor Atual:</span> R$ 7.500,00
          </div> -->
        </div>

        <div class="title-section">Comentários:</div>
        <div class="comments">
          <div class="message">
            <div class="people-image">
              <img src="../assets/profile.png" alt="Imagem da pessoa">
            </div>
            <div class="content">
              <div class="author">Nome do desenvolvedor:</div>
              Ei, marquei ali no checklist o item tal! Acho que precisamos rever como é que vamos poder executar!
            </div>
          </div>
          <div class="message">
            <div class="people-image">
              <img src="../assets/profile.png" alt="Imagem da pessoa">
            </div>
            <div class="content">
              <div class="author">Nome do que criou:</div>
              Opa! Vamos ver sim! Acho que ficou meio confuso mesmo!
            </div>
          </div>
          <div class="message">
            <div class="people-image">
              <img src="../assets/profile.png" alt="Imagem da pessoa">
            </div>
            <div class="content">
              <div class="author">Nome do desenvolvedor:</div>
              Prontinho! Feito :D
            </div>
          </div>
          <div class="message">
            <div class="people-image">
              <img src="../assets/profile.png" alt="Imagem da pessoa">
            </div>
            <div class="content">
              <div class="author">Nome do desenvolvedor:</div>
              Acabei de realizar mais um item do checklist! Quando você puder, vamos revisá-lo e você verifica? Obrigado!
            </div>
          </div>
          <div class="message">
            <div class="people-image">
              <img src="../assets/profile.png" alt="Imagem da pessoa">
            </div>
            <div class="content">
              <div class="author">Nome do que criou:</div>
              Uma outra mensagem só pra conseguir ver se o overflow está certo!
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="proposta">
    <q-card class="modal modal-proposta">
      <q-btn icon="close"
          round
          dense
          flat
          class="absolute-top-right"
          @click="proposta = false"
        />

      <q-card-section class="left-side">
        <div class="modal-title">
          {{ propostaSelecionada.titulo }}
        </div>

        <div class="modal-description">
          <div class="descriptions-items">
            <span>Proposto por:</span> {{ propostaSelecionada.contratante.nome }}
          </div>

          <div class="descriptions-items">
            <span>Data da Solicitação:</span> {{ formatarData(propostaSelecionada.data_pedido) }}
          </div>

          <div class="descriptions-items">
            <span>Data de previsão de término:</span> {{ formatarData(propostaSelecionada.data_prazo) }}
          </div>

          <div class="descriptions-items">
            <span>Valor da proposta:</span> {{ formatarValor(propostaSelecionada.valor_estimado) }}
          </div>

          <div class="descriptions-items">
            <span>Informações sobre o projeto:</span><br>
            {{ propostaSelecionada.descricao }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="right-side">
        <div class="about-people">
          <div class="card-name">
            <span>{{ propostaSelecionada.contratante.nome }}</span>
          </div>
          <div class="description">
            {{ propostaSelecionada.contratante.endereco }}
            <br>
            {{ propostaSelecionada.contratante.telefone }}
            <br>
            <a :href="`mailto:${propostaSelecionada.contratante.email}`">
              {{ propostaSelecionada.contratante.email }}
            </a>
          </div>
        </div>

        <q-btn
          label="Tenho interesse"
          class="simple-button"
          @click="mostrarInteresse"
        />

        <q-btn
          label="Entrar em contato"
          class="outline-button"
          :href="`tel:${propostaSelecionada.contratante.telefone}`"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.checkbox ::v-deep(.q-checkbox__label) {
  font-size: 14px;
  margin-left: 3px;
}
.checkbox ::v-deep(.q-checkbox__inner) {
  font-size: 28px;
}
</style>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

const token = '2|irNE1Htf5HrY27yLcmWYhhiwMUz1r6GCpaZheu4Zc6cc7251' // alterar depois

const pedidos = ref([])
const proposta = ref(false)
const projeto = ref(false)
const propostaSelecionada = ref(null)
const projetoSelecionado = ref(null)

function abrirModalProposta(pedido) {
  propostaSelecionada.value = pedido
  proposta.value = true
}

function abrirModalProjeto(pedido) {
  projetoSelecionado.value = pedido
  projeto.value = true
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
    const response = await axios.put(`http://localhost:8000/api/pedidos/${propostaSelecionada.value.id_pedido}`, {
      id_empresa_desenvolvedora: 4 // SUBSTITUIR PELO DESENVOLVEDOR QUE ESTA LOGADO
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    console.log('Atualizado com sucesso:', response.data)
    propostaSelecionada.value.id_empresa_desenvolvedora = 4 // SUBSTITUIR PELO DESENVOLVEDOR QUE ESTA LOGADO
    Notify.create({
      type: 'positive',
      message: 'Interesse registrado com sucesso!',
      position: 'top',
      timeout: 3000
    })
  } catch (error) {
    console.error('Erro ao atualizar:', error)
    Notify.create({
      type: 'negative',
      message: 'Erro ao registrar interesse.',
      position: 'top',
      timeout: 4000
    })
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/pedidos', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('Dados recebidos:', response.data)
    pedidos.value = response.data.data
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error)
  }
})

const statusInfo = computed(() => {
  const status = projetoSelecionado.value.current_status?.status || ''

  const mapStatus = {
    'Pendente': { class: 'status-pendente', label: 'PENDENTE' },
    'Aceito': { class: 'status-aceito', label: 'ACEITO' },
    'Em Andamento': { class: 'status-andamento', label: 'EM ANDAMENTO' },
    'Aguardando Aprovação': { class: 'status-aguardando', label: 'AGUARDANDO APROVAÇÃO' },
    'Concluído': { class: 'status-finalizado', label: 'CONCLUÍDO' },
    'Cancelado': { class: 'status-cancelado', label: 'CANCELADO' },
  }

  return mapStatus[status] || { class: '', label: 'STATUS DESCONHECIDO' }
})

// const itens =
//               [
//                 'Realizar a tela de login but also the leap into elect the industrys standard dummy text ever since the 1500s, when an unknown',
//                 'Unchanged not a at standard dummy',
//                 'Realizar industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make and type specimen book. It has survived not only five centuries',
//                 'Rsemper nisi, et ornare sapien nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien placerat tempor',
//                 'Etiam justo risus, blandit nec placerat eu, dapibus sed metus. Not a at standard dummy',
//                 'Survived not only five centuries',
//                 'Phasellus rhoncus lorem non elementum vulputate.',
//                 'Urabitur aliquet, velit non placerat aliquam, odio ipsum pretium nibh, ut malesuada diam justo ut tellus. Maecenas facilisis sodales velit non molestie.',
//                 'Condimentum blandit iaculis. Vestibulum vehicula cursus dignissim. In quis mattis enim. Curabitur sed enim venenatis, pharetra mi vel, convallis felis.',
//                 'Tiam faucibus, nisl ac feugiat aliquet, magna nulla congue urna, eu porta mi magna eu elit. Cras fermentum tempor malesuada.',
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies leo id urna imperdiet suscipit. Nulla sed facilisis est. Suspendisse tempor aliquam eros in imperdiet. Metus tortor semper nisi, et ornare sapien nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex sed sapien placerat tempor',
//                 'Nunc a ornare magna. Maecenas aliquet, eros ut vulputate ultrices.',
//                 'Duis quis odio ac leo porta dapibus. Integer rhoncus mollis enim, sed accumsan eros maximus nec. Maecenas malesuada augue eget orci posuere, sit amet accumsan sapien ornare. Donec sed aliquam eros, et iaculis odio. Sed quis tempor mauris. Duis pretium lectus eu magna sollicitudin facilisis.'
//               ]

// const itensSelecionados = ref([]) // esse array vai conter os itens marcados

</script>

<style scoped>
@import '../css/app.css';
@import '../css/modals.css';
</style>
