<template>
  <q-page class="login-page">
    <q-card class="login-card">

      <q-card-section class="login-card-section">
        <div class="login-title">Entrar</div>
      </q-card-section>

      <q-card-section class="login-form-section">
        <q-form @submit="onSubmit" class="login-form">
          <div class="login-input-group">
           <input
              v-model="email"
              type="email"
              required
              placeholder="E-mail"
              class="login-input"
            />
            <input
              v-model="password"
              type="password"
              required
              placeholder="Senha"
              class="login-input"
            />
          </div>
          <button type="submit" class="login-submit-btn">Entrar</button>
        </q-form>
      </q-card-section>

   <div class="auth-options">
        <q-btn flat class="password-btn" label="Esqueci a senha" />

        <div class="register-container">
            <span class="register-text">Não tem uma conta ainda? </span>
            <q-btn flat class="register-btn" label="Cadastre-se" :to="{ name: 'cadastro' }" />
        </div>
    </div>



    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const onSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      senha: password.value
    })

    console.log('Login bem-sucedido!', response.data)

    localStorage.setItem('auth_token', response.data.access_token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`

    router.push({ name: 'como-funciona' }) // Para verificar se redireciona

  } catch (error) {
    if (error.response) {
      alert('Erro no login: ' + error.response.data.message)
    } else {
      alert('Erro no login: ' + error.message)
    }
  }
}
</script>

<style scoped>
@import '../css/app.css';
</style>
