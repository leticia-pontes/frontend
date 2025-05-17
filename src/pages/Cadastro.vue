<template>
  <q-page class="register-page">
    <q-card class="register-card">
      
      <q-card-section class="register-card-section">
        <div class="register-title">Cadastro</div>
      </q-card-section>

      <q-card-section class="register-form-section">
        <q-form @submit="onSubmit" class="register-form">
          <div class="register-input-group">
           <input
              v-model="nome"
              type="text"
              required
              placeholder="Nome"
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
                  v-model="password"
                  type="password"
                  required
                  placeholder="Confirme a senha"
                  class="register-input"
                />
            </div>
            <select class="custom-select">
                <option value=""  selected>Selecione seu perfil</option>
                <option value="empresa_contratante">Empresa Contratante</option>
                <option value="desenvolvedor">Desenvolvedor</option>
            </select>


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

<style scoped>
@import '../css/app.css';
</style>
