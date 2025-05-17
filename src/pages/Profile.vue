<template>
  <q-page class="profile-page">
    <q-card class="profile-card">
      <q-card-section class="profile-card-section">
        <div class="profile-title">Complete seu perfil</div>
      </q-card-section>

      <div class="form-wrapper">
        <!-- Primeiro formulário -->
        <q-card-section class="profile-form-section">
          <q-form @submit="onSubmit" class="profile-form">
            <div class="profile-input-group">
              <div for="profile-picture">
                <q-avatar size="200px">
                  <q-img src="../assets/profile.png" />
                </q-avatar>
                <input type="file" id="profile-picture" accept="image/*" />
              </div>

              <input
                v-model="texto"
                type="textarea"
                required
                class="profile-input"
              />

              <select class="custom-select">
                <option value="" selected>Selecione seu nicho</option>
                <option value="nicho1">Nicho 1</option>
                <option value="nicho2">Nicho 2</option>
              </select>
            </div>
          </q-form>
        </q-card-section>

        <!-- Segundo formulário -->
        <q-card-section class="profile-form-section">
          <q-form @submit="onSubmit" class="profile-form">
            <div class="profile-input-group">
              <input
                v-model="nome"
                type="text"
                required
                placeholder="Nome"
                class="profile-input"
              />

              <input
                v-model="email"
                type="email"
                required
                placeholder="E-mail"
                class="profile-input"
              />

              <div class="social-group">
                <input
                  v-model="instagram"
                  type="text"
                  required
                  placeholder="Instagram"
                  class="profile-social-input"
                />
                <input
                  v-model="linkedin"
                  type="text"
                  required
                  placeholder="Linkedin"
                  class="profile-social-input"
                />
                <input
                  v-model="facebook"
                  type="text"
                  required
                  placeholder="Facebook"
                  class="profile-social-input"
                />
                <input
                  v-model="site"
                  type="text"
                  required
                  placeholder="Site"
                  class="profile-social-input"
                />
              </div>
            </div>

            <button type="submit" class="profile-submit-btn">
              Concluir Perfil
            </button>
          </q-form>
        </q-card-section>
      </div>
    </q-card>
  </q-page>
</template>

<style scoped>
@import "../css/app.css";
</style>
