<template>
  <q-page class="profile-page flex flex-center">
    <q-card class="profile-card">
      <!-- Título -->
      <q-card-section class="profile-card-section">
        <div class="profile-title">Complete seu perfil</div>
      </q-card-section>

      <!-- Formulário -->
      <q-card-section class="profile-form-section">
        <q-form @submit.prevent="onSubmit" class="profile-form">
          <!-- Biografia (opcional) -->
          <div class="profile-input-group" style="margin-bottom: 16px;">
            <textarea
              v-model="texto"
              class="profile-input"
              style="width: 100%; height: 120px; resize: vertical;"
              placeholder="Biografia (opcional)"
            ></textarea>
          </div>

          <!-- Nicho ou Tecnologia (condicional) -->
          <div class="profile-input-group" style="margin-bottom: 24px;" v-if="tipoPerfil">
            <!-- Se for CONTRATANTE -->
            <select v-if="tipoPerfil === 'contratante'" v-model="nicho" class="custom-select">
              <option value="" disabled selected>Selecione seu nicho (opcional)</option>
              <option
                v-for="item in nichos"
                :key="item.id_nicho"
                :value="item.id_nicho"
              >
                {{ item.nome_nicho }}
              </option>
            </select>

            <!-- Se for DESENVOLVEDOR -->
            <select v-else-if="tipoPerfil === 'desenvolvedor'" v-model="tecnologia" class="custom-select">
              <option value="" disabled selected>Selecione sua tecnologia (opcional)</option>
              <option
                v-for="item in tecnologias"
                :key="item.id_tecnologia"
                :value="item.id_tecnologia"
              >
                {{ item.nome_tecnologia }}
              </option>
            </select>
          </div>

          <!-- Redes sociais (opcionais) -->
          <div class="profile-input-group social-group" style="max-width: 100%;">
            <input v-model="instagram" type="text" placeholder="Instagram (opcional)" class="profile-social-input" />
            <input v-model="linkedin" type="text" placeholder="LinkedIn (opcional)" class="profile-social-input" />
            <input v-model="facebook" type="text" placeholder="Facebook (opcional)" class="profile-social-input" />
            <input v-model="site" type="text" placeholder="Site (opcional)" class="profile-social-input" />
          </div>

          <!-- Botões -->
          <div class="button-group flex justify-center" style="gap: 16px;">
            <button type="submit" class="profile-submit-btn">Concluir Perfil</button>
            <button @click.prevent="onSkip" class="profile-skip-btn">Pular</button>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

const router = useRouter()

// Inputs
const texto = ref('')
const nicho = ref('')
const tecnologia = ref('')
const instagram = ref('')
const linkedin = ref('')
const facebook = ref('')
const site = ref('')

// Dados externos
const tipoPerfil = ref('') // 'contratante' ou 'desenvolvedor'
const nichos = ref([])
const tecnologias = ref([])

// Carrega tipo do perfil e dados correspondentes
async function carregarTipoPerfil() {
  try {
    const token = localStorage.getItem('auth_token')
    const resp = await api.get('/auth/me', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    tipoPerfil.value = resp.data?.perfil?.tipo_perfil?.nome_tipo?.toLowerCase()

    console.log(tipoPerfil.value)

    if (tipoPerfil.value === 'contratante') {
      await carregarNichos()
    } else if (tipoPerfil.value === 'desenvolvedor') {
      await carregarTecnologias()
    }
  } catch (err) {
    console.error('Erro ao buscar tipo de perfil:', err)
    Notify.create({
      type: 'negative',
      message: 'Erro ao carregar dados do usuário.'
    })
  }
}

// API de nichos
async function carregarNichos() {
  try {
    const resp = await api.get('/nichos')
    nichos.value = resp.data
  } catch (err) {
    console.error('Erro ao carregar nichos:', err)
    Notify.create({
      type: 'negative',
      message: 'Falha ao carregar nichos'
    })
  }
}

// API de tecnologias
async function carregarTecnologias() {
  try {
    const resp = await api.get('/tecnologias')
    tecnologias.value = resp.data
  } catch (err) {
    console.error('Erro ao carregar tecnologias:', err)
    Notify.create({
      type: 'negative',
      message: 'Falha ao carregar tecnologias'
    })
  }
}

// Submit do formulário
async function onSubmit() {
  const token = localStorage.getItem('auth_token')
  if (!token) {
    Notify.create({
      type: 'negative',
      message: 'Você precisa estar logado para concluir o perfil.'
    })
    return
  }

  const payload = {}

  if (texto.value.trim() !== '') {
    payload.biografia = texto.value.trim()
  }

  if (tipoPerfil.value === 'contratante' && nicho.value) {
    payload.nichos = [Number(nicho.value)]
  } else if (tipoPerfil.value === 'desenvolvedor' && tecnologia.value) {
    payload.tecnologias = [Number(tecnologia.value)]
  }

  const redes = [instagram.value, linkedin.value, facebook.value, site.value]
    .map(x => x.trim())
    .filter(x => x !== '')

  if (redes.length) {
    payload.redes_sociais = redes
  }

  try {
    const resp = await api.post(
      '/perfis',
      payload,
      { headers: { Authorization: 'Bearer ' + token } }
    )

    Notify.create({
      type: 'positive',
      message: 'Perfil criado/atualizado com sucesso!'
    })

    const meResp = await api.get('/auth/me', {
      headers: { Authorization: 'Bearer ' + token }
    })

    const user = meResp.data

    if (user?.perfil?.empresa?.id_empresa) {
      localStorage.setItem('id_empresa', user.perfil.empresa.id_empresa)
    }

    if (tipoPerfil.value === 'desenvolvedor') {
      router.push({ name: 'desenvolvedor-profile' })
    } else if (tipoPerfil.value === 'contratante') {
      router.push({ name: 'empresa-profile' })
    } else {
      router.push({ name: 'profile' })
    }
  } catch (err) {
    const status = err.response?.status
    const corpo = err.response?.data
    console.error('Erro:', corpo)

    if (status === 422 && corpo.errors) {
      for (const field in corpo.errors) {
        corpo.errors[field].forEach(msg => {
          Notify.create({ type: 'negative', message: msg })
        })
      }
    } else {
      Notify.create({
        type: 'negative',
        message: corpo?.message || 'Erro ao criar o perfil.'
      })
    }
  }
}

function onSkip() {
  if (tipoPerfil.value === 'desenvolvedor') {
    router.push({ name: 'desenvolvedor-profile' })
  } else if (tipoPerfil.value === 'contratante') {
    router.push({ name: 'empresa-profile' })
  } else {
    router.push({ name: 'profile' })
  }
}

onMounted(carregarTipoPerfil)
</script>

<style scoped>
@import "../css/app.css";

.profile-card-section {
  padding-top: 12px;
  padding-bottom: 12px;
}

.profile-page {
  min-height: 100vh;
}

.profile-card {
  width: 100%;
  max-width: 480px;
}

.profile-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.button-group {
  margin-top: 16px;
}

.profile-submit-btn {
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.profile-skip-btn {
  background-color: transparent;
  border-radius: 4px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>
