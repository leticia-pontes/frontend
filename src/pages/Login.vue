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

const nome = ref('')
const cnpj = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const telefone = ref('')
const endereco = ref('')
const nivel = ref(0)
const pontos = ref(0)
const router = useRouter()

const onSubmit = async () => {
  if (password.value !== passwordConfirm.value) {
    alert('As senhas não conferem')
    return
  }

  try {
    const response = await axios.post('http://localhost:8000/api/empresas/', {
      nome: nome.value,
      cnpj: cnpj.value,
      email: email.value,
      senha: password.value,
      telefone: telefone.value || null,
      endereco: endereco.value || null,
      nivel: nivel.value,
      pontos: pontos.value,
    })

    alert('Empresa cadastrada com sucesso!')
    router.push({ name: 'como-funciona' })
  } catch (error) {
    if (error.response) {
      alert('Erro ao cadastrar: ' + error.response.data.message)
    } else {
      alert('Erro ao cadastrar: ' + error.message)
    }
  }
}
</script>

<style scoped>
@import '../css/app.css';
</style>
