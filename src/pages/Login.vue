<template>
  <q-page class="login-page">
    <q-card class="login-card">
      <!-- Cabeçalho do card -->
      <q-card-section class="login-card-section">
        <div class="login-title">Entrar</div>
      </q-card-section>

      <!-- Formulário de login -->
      <q-card-section class="login-form-section">
        <q-form @submit="onSubmit" class="login-form">
          <div class="login-input-group">
            <!-- Campo E-mail -->
            <input
              v-model="email"
              type="email"
              required
              placeholder="E-mail"
              class="login-input"
            />
            <!-- Campo Senha -->
            <input
              v-model="password"
              type="password"
              required
              placeholder="Senha"
              class="login-input"
            />
          </div>
          <!-- Botão de submit -->
          <button type="submit" class="login-submit-btn">Entrar</button>
        </q-form>
      </q-card-section>

      <!-- Links auxiliares (esqueci senha / cadastro) -->
      <div class="auth-options">
        <q-btn flat class="password-btn" label="Esqueci a senha" />

        <div class="register-container">
          <span class="register-text">Não tem uma conta ainda? </span>
          <q-btn
            flat
            class="register-btn"
            label="Cadastre-se"
            :to="{ name: 'cadastro' }"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'
import { api } from 'boot/axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const onSubmit = async () => {
  if (!email.value || !password.value) {
    Notify.create({
      type: 'negative',
      message: 'Preencha e-mail e senha antes de continuar.',
    })
    return
  }

  try {
    const response = await api.post('/auth/login', {
      email: email.value.trim(),
      senha: password.value
    })

    const tokenRecebido = response.data.access_token
    if (!tokenRecebido) {
      Notify.create({
        type: 'negative',
        message: 'Falha na autenticação. Token não recebido.'
      })
      return
    }

    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_tipo_perfil')
    localStorage.removeItem('id_empresa')
    localStorage.removeItem('id_perfil')

    localStorage.setItem('auth_token', tokenRecebido)

    Notify.create({
      type: 'positive',
      message: 'Login efetuado com sucesso!',
      position: 'top',
      timeout: 2000
    })

    router.push({ name: 'profile' })
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    Notify.create({
      type: 'negative',
      message: error.response?.data?.message || 'Falha na autenticação. Verifique credenciais.'
    })
  }
}
</script>

<style scoped>
@import '../css/app.css';
</style>
