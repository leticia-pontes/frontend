<template>
  <q-page class="register-page">
    <q-card class="register-card">

      <q-card-section class="register-card-section">
        <div class="register-title">Cadastro</div>
      </q-card-section>

      <q-card-section class="register-form-section">
        <q-form @submit.prevent="onSubmit" class="register-form">
          <div class="register-input-group">
            <!-- Nome (sempre obrigatório) -->
            <input
              v-model="nome"
              type="text"
              required
              placeholder="Nome"
              class="register-input"
            />

            <!-- Tipo de Perfil → Contratante ou Desenvolvedor -->
            <select v-model="nomeTipoPerfil" class="custom-select" required>
              <option value="" disabled selected>Selecione seu tipo de perfil</option>
              <option value="Contratante">Empresa Contratante</option>
              <option value="Desenvolvedor">Desenvolvedor</option>
            </select>

            <!-- CNPJ só aparace se for “Contratante” -->
            <input
              v-if="nomeTipoPerfil === 'Contratante'"
              v-model="cnpj"
              type="text"
              required
              placeholder="CNPJ"
              class="register-input"
            />

            <!-- E-mail (sempre obrigatório) -->
            <input
              v-model="email"
              type="email"
              required
              placeholder="E-mail"
              class="register-input"
            />

            <!-- Senha e Confirmação -->
            <div class="password-group">
              <input
                v-model="password"
                type="password"
                required
                placeholder="Senha"
                class="register-input"
              />
              <input
                v-model="confirmPassword"
                type="password"
                required
                placeholder="Confirme a senha"
                class="register-input"
              />
            </div>

            <!-- Telefone (opcional) -->
            <input
              v-model="telefone"
              type="tel"
              placeholder="Telefone (opcional)"
              class="register-input"
            />

            <!-- Endereço (opcional) -->
            <input
              v-model="endereco"
              type="text"
              placeholder="Endereço (opcional)"
              class="register-input"
            />

          </div>

          <button type="submit" class="register-submit-btn">
            Cadastrar-se
          </button>
        </q-form>
      </q-card-section>

      <div class="auth-options-login">
        <span class="register-text">Já possui uma conta?&nbsp;</span>
        <q-btn flat class="register-btn" label="Faça login" :to="{ name: 'login' }" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'

const router = useRouter()

// Campos do formulário
const nome = ref('')
const nomeTipoPerfil = ref('')    // "Contratante" ou "Desenvolvedor"
const cnpj = ref('')               // obrigatório apenas se Contratante
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const telefone = ref('')
const endereco = ref('')

const onSubmit = async () => {
  // 1) Validações básicas em frontend
  if (!nome.value.trim()) {
    Notify.create({ type: 'negative', message: 'O campo Nome é obrigatório.' })
    return
  }
  if (!nomeTipoPerfil.value) {
    Notify.create({ type: 'negative', message: 'Selecione seu tipo de perfil.' })
    return
  }
  if (nomeTipoPerfil.value === 'Contratante' && !cnpj.value.trim()) {
    Notify.create({ type: 'negative', message: 'O campo CNPJ é obrigatório para Contratante.' })
    return
  }
  if (!email.value.trim()) {
    Notify.create({ type: 'negative', message: 'O campo E-mail é obrigatório.' })
    return
  }
  if (!password.value) {
    Notify.create({ type: 'negative', message: 'O campo Senha é obrigatório.' })
    return
  }
  if (!confirmPassword.value) {
    Notify.create({ type: 'negative', message: 'Por favor, confirme a senha.' })
    return
  }
  if (password.value !== confirmPassword.value) {
    Notify.create({ type: 'negative', message: 'As senhas não coincidem!' })
    return
  }

  try {
    // 2) Monta o payload conforme validação do controller:
    const payload = {
      nome: nome.value.trim(),
      email: email.value.trim(),
      senha: password.value,
      senha_confirmation: confirmPassword.value,
      nome_tipo_perfil: nomeTipoPerfil.value, // “Contratante” ou “Desenvolvedor”
      telefone: telefone.value.trim() || null,
      endereco: endereco.value.trim() || null,
    }
    if (nomeTipoPerfil.value === 'Contratante') {
      payload.cnpj = cnpj.value.trim()
    }

    // 3) Chamada ao endpoint de registro unificado
    const response = await axios.post(
      'http://localhost:8000/api/auth/register',
      payload
    )

    // 4) Se deu sucesso (201), o back retorna:
    //    { message, empresa, perfil, access_token, token_type }
    const { empresa, perfil, access_token } = response.data

    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_tipo_perfil')
    localStorage.removeItem('id_empresa')
    localStorage.removeItem('id_perfil')

    // 5) Armazena token e tipo de perfil para uso futuro
    localStorage.setItem('auth_token', access_token)
    localStorage.setItem('user_tipo_perfil', perfil.id_tipo_perfil.toString())
    // Se precisar, armazene também ids:
    localStorage.setItem('id_empresa', empresa.id_empresa.toString())
    localStorage.setItem('id_perfil', perfil.id_perfil.toString())

    Notify.create({
      type: 'positive',
      message: 'Cadastro realizado com sucesso!'
    })

    // 6) Redireciona para “/profile” (guardas de rota cuidarão de apontar para
    //    empresa-profile ou desenvolvedor-profile conforme user_tipo_perfil).
    router.push({ name: 'profile' })
  }
  catch (error) {
    // 7) Se back retornar 422 (validação), mostra os erros
    if (error.response) {
      const data = error.response.data
      if (data.errors) {
        // percorre each campo
        for (const field in data.errors) {
          data.errors[field].forEach(msg => {
            Notify.create({ type: 'negative', message: msg })
          })
        }
      }
      else if (data.message) {
        Notify.create({ type: 'negative', message: data.message })
      }
    }
    else {
      Notify.create({ type: 'negative', message: `Erro: ${error.message}` })
    }
  }
}
</script>

<style scoped>
@import '../css/app.css';

.register-input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

</style>
