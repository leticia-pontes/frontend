<template>
  <q-btn label="Abrir Modal de Projeto" @click="projeto = true" color="primary" />
  <q-btn label="Abrir Modal de Proposta" @click="proposta = true" color="red" />

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
          Título do Projeto em andamento
        </div>

        <div class="modal-description">
          <div class="descriptions-items">
            <span>Criado por:</span> Nome da pessoa
          </div>

          <div class="descriptions-items">
            <span>Desenvolvedor:</span> Nome da pessoa
          </div>

          <div class="descriptions-items">
            <span>Data de criação:</span> XX/XX/XXXX
          </div>

          <div class="descriptions-items">
            <span>Data do início:</span> XX/XX/XXXX
          </div>

          <div class="descriptions-items">
            <span>Data de término:</span> XX/XX/XXXX
          </div>

          <div class="descriptions-items">
            <span>Sobre o projeto:</span><br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect the industry's standard dummy text ever since the 15 00s, when an unknown printer took a galley of type and scrambled ronic typesetting, remai ning essentially unchanged not a at standard dummy text ever since the industry's standard dummy text ever since the 1500s, when an unknown galley of type and scrambled.
          </div>

          <div class="descriptions-items">
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
          </div>
        </div>
      </q-card-section>

      <q-card-section class="right-side">
        <div class="info-project">
          <div class="project-status">
            <!-- USAR A CLASSE DE ACORDO COM QUAL PRECISAR -->

            <!-- <div class="status status-finalizado">
              FINALIZADO
            </div> -->
            <div class="status status-andamento">
              EM ANDAMENTO
            </div>
            <!-- <div class="status status-cancelado">
              CANCELADO
            </div> -->

            <div class="progress-bar">
              <div class="bar">
                <div class="progress" style="width: 70%;"></div>
                <!-- esse valor muda -->
              </div>

              <span>40% concluído</span>
            </div>
          </div>
          <div class="description">
            Mais alguma informação que queira mostrar alem do que já está ali no canto...
            Unknown printer took a galley of type and scrambled it to make a type specimen book
          </div>
          <div class="descriptions-items">
            <span>Proposta Inicial:</span> R$ 5.500,00
          </div>
          <div class="descriptions-items">
            <span>Valor Atual:</span> R$ 7.500,00
          </div>
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
          Título da proposta
        </div>

        <div class="modal-description">
          <div class="descriptions-items">
            <span>Proposto por:</span> Nome da Empresa que está propondo
          </div>

          <div class="descriptions-items">
            <span>Data da Solicitação:</span> XX/XX/XXXX
          </div>

          <div class="descriptions-items">
            <span>Data de previsão de término:</span> XX/XX/XXXX, ou podendo ser “A definir”
          </div>

          <div class="descriptions-items">
            <span>Valor da proposta:</span> R$ xxxxx ou podendo ser “A definir”
          </div>

          <div class="descriptions-items">
            <span>Informações sobre o projeto:</span><br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect the industry's standard dummy text ever since the 15 00s, when an unknown printer took a galley of type and scrambled ronic typesetting, remai ning essentially unchanged not a at standard dummy text ever since the industry's standard dummy text ever since the 1500s, when an unknown galley of type and scrambled. It has survived not only five centuries, but also the leap into elect the industry's standard dummy text ever since the 15 00s, when an unknown printer took a galley of type and scrambled ronic typesetting, remai ning essentially unchanged not a at standard dummy text ever since the industry's standard dummy text ever since the 1500s, when an unknown galley of type and scrambled.<br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect the industry's standard dummy text ever since the 15 00s, when an unknown printer took a galley of type and scrambled ronic typesetting, remai ning essentially unchanged not a at standard dummy text ever since the industry's standard dummy text ever since the 1500s, when an unknown galley of type and scrambled. It has survived not only five centuries, but also the leap into elect the industry's standard dummy text ever since the 15 00s, when an unknown printer took a galley of type and scrambled ronic typesetting, remai ning essentially unchanged not a at standard dummy text ever since the industry's standard dummy text ever since the 1500s, when an unknown galley of type and scrambled.
          </div>
        </div>
      </q-card-section>

      <q-card-section class="right-side">
        <div class="about-people">
          <div class="card-photo">
            <img src="../assets/profile.png" alt="">
            <span>Nome da empresa</span>
          </div>
          <div class="description">
            Ramo de atuação: <strong>Tecnologia</strong>
            <br>
            Um breve descrição sobre a empresa o que ela faz, no que ela atua, etc. Essas coisas serão cadastradas no perfil It  a has survived not only five centuries, an but also the leap typesetting, remai nhji sang essentially unchanged not a bag unchhagedd.
          </div>
        </div>

        <q-btn
          label="Tenho interesse"
          class="simple-button"
        />

        <q-btn
          label="Entrar em contato"
          class="outline-button"
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
import { ref } from 'vue'

const itens =
              [
                'Realizar a tela de login but also the leap into elect the industrys standard dummy text ever since the 1500s, when an unknown',
                'Unchanged not a at standard dummy',
                'Realizar industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make and type specimen book. It has survived not only five centuries',
                'Rsemper nisi, et ornare sapien nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien placerat tempor',
                'Etiam justo risus, blandit nec placerat eu, dapibus sed metus. Not a at standard dummy',
                'Survived not only five centuries',
                'Phasellus rhoncus lorem non elementum vulputate.',
                'Urabitur aliquet, velit non placerat aliquam, odio ipsum pretium nibh, ut malesuada diam justo ut tellus. Maecenas facilisis sodales velit non molestie.',
                'Condimentum blandit iaculis. Vestibulum vehicula cursus dignissim. In quis mattis enim. Curabitur sed enim venenatis, pharetra mi vel, convallis felis.',
                'Tiam faucibus, nisl ac feugiat aliquet, magna nulla congue urna, eu porta mi magna eu elit. Cras fermentum tempor malesuada.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies leo id urna imperdiet suscipit. Nulla sed facilisis est. Suspendisse tempor aliquam eros in imperdiet. Metus tortor semper nisi, et ornare sapien nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex sed sapien placerat tempor',
                'Nunc a ornare magna. Maecenas aliquet, eros ut vulputate ultrices.',
                'Duis quis odio ac leo porta dapibus. Integer rhoncus mollis enim, sed accumsan eros maximus nec. Maecenas malesuada augue eget orci posuere, sit amet accumsan sapien ornare. Donec sed aliquam eros, et iaculis odio. Sed quis tempor mauris. Duis pretium lectus eu magna sollicitudin facilisis.'
              ]

const itensSelecionados = ref([]) // esse array vai conter os itens marcados
const projeto = ref(false)
const proposta = ref(false)
</script>

<style scoped>
@import '../css/app.css';
@import '../css/modals.css';
</style>
