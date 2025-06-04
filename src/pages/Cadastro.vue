<template>
  <q-page class="register-page">
    <q-card class="register-card">

      <q-card-section class="register-card-section">
        <div class="register-title">Cadastro</div>
      </q-card-section>

      <q-card-section class="register-form-section">
        <q-form @submit.prevent="onSubmit" class="register-form">
          <div class="register-input-group">
            <input
              v-model="nome"
              type="text"
              required
              placeholder="Nome"
              class="register-input"
            />
            <input
              v-model="cnpj"
              type="text"
              required
              placeholder="CNPJ"
              class="register-input"
            />
            <input
              v-model="email"
              type="email"
              required
              placeholder="E-mail"
              class="register-input"
            />
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
            <input
              v-model="telefone"
              type="tel"
              placeholder="Telefone"
              class="register-input"
            />
            <input
              v-model="endereco"
              type="text"
              placeholder="Endereço"
              class="register-input"
            />
            <!--
            <select v-model="perfil" class="custom-select" required>
              <option value="" disabled selected>Selecione seu perfil</option>
              <option value="Contratante">Empresa Contratante</option>
              <option value="Desenvolvedor">Desenvolvedor</option>
            </select>
            -->
          </div>

          <button type="submit" class="register-submit-btn">Cadastrar-se</button>
        </q-form>
      </q-card-section>

      <div class="auth-options-login">
        <span class="register-text">Já possui uma conta?&nbsp</span>
        <q-btn flat class="register-btn" label="Faça login" :to="{ name: 'login' }" />
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
const telefone = ref('')
const endereco = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const onSubmit = async () => {

  if (!nome.value.trim()) {
    alert('O campo Nome é obrigatório.')
    return
  }
  if (!cnpj.value.trim()) {
    alert('O campo CNPJ é obrigatório.')
    return
  }
  if (!email.value.trim()) {
    alert('O campo E-mail é obrigatório.')
    return
  }
  if (!password.value) {
    alert('O campo Senha é obrigatório.')
    return
  }
  if (!confirmPassword.value) {
    alert('Por favor, confirme a senha.')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('As senhas não coincidem!')
    return
  }

  try {
    const response = await axios.post('http://localhost:8000/api/empresas', {
      nome: nome.value,
      cnpj: cnpj.value,
      email: email.value,
      senha: password.value,
      telefone: telefone.value || null,
      endereco: endereco.value || null
    })

    // Guarda o id da empresa para passar para a próxima página
    localStorage.setItem('id_empresa', response.data.id_empresa)

    // alert('Cadastro realizado com sucesso!')

    // Redirecionar para a próxima página (personalização de perfil)
    router.push({ name: 'profile' })

  } catch (error) {
    if (error.response) {
      alert('Erro no cadastro: ' + JSON.stringify(error.response.data.errors || error.response.data.message))
    } else {
      alert('Erro no cadastro: ' + error.message)
    }
  }
}
</script>

<style scoped>
@import '../css/app.css';
</style>
