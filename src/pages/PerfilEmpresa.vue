<template>
  <div>
      <q-tabs v-model="tab">
          <q-tab name="home" label="Home" no-caps @click="$router.push('/')"/>
          <q-tab name="perfil" label="Meu Perfil" no-caps @click="$router.push('/desenvolvedor-profile')"/>
          <q-tab name="pedidos" label="Pedidos" no-caps @click="$router.push('/pedidos-solicitacoes')"/>
          <q-tab name="conversas" label="Conversas" no-caps/>
          <q-tab name="configuracoes" label="Configurações" no-caps @click="$router.push('/complete-perfil')"/>
      </q-tabs>

      <div class="flex flex-center text-h4 q-pa-xl">Seja Bem Vindo, Empresa X</div>

      <div class="row q-gutter-md">
          <div class="col-3 q-ml-xl">
              <q-card class="bg-light-green-8 q-pa-lg">
                  <q-card-section>
                      <q-input rounded-border dense outlined bg-color="white" label="Buscar">
                          <template v-slot:append>
                              <q-icon name="search"/>
                          </template>
                      </q-input>
                  </q-card-section>

                  <q-card-section>
                      <q-scroll-area
                          v-if="!isTecnologiasLoading"
                          style="height: 400px"
                      >
                          <q-option-group
                              :options="tecnologias.map(row => ({
                                  label: row.nome_tecnologia,
                                  value: row.id_tecnologia
                              }))"
                              v-model="tecnologiasSelecionadas"
                              color="white"
                              class="text-white"
                              type="checkbox"
                              keep-color
                          />
                      </q-scroll-area>

                      <div
                          v-else
                          class="flex flex-center"
                      >
                          <q-spinner color="white" size="2rem"/>
                      </div>
                  </q-card-section>
              </q-card>
          </div>

          <div class="col q-mr-md">
              <q-card class="bg-light-green-8">
                  <q-card-section>
                      <div class="text-h6 text-white">Crie sua proposta</div>
                  </q-card-section>

                  <q-form @submit.prevent="criarProjeto">
                      <q-card-section>
                          <div class="row">
                              <div class="col">
                                  <q-input
                                      v-model="dadosProjeto.titulo"
                                      dense
                                      outlined
                                      bg-color="white"
                                      label="Nome do projeto"
                                      :rules="[
                                          val => !!val || 'Informe o nome do projeto'
                                      ]"
                                  />

                                  <q-input
                                      v-model="dadosProjeto.descricao"
                                      bg-color="white"
                                      outlined
                                      type="textarea"
                                      label="Descrição"
                                      :rules="[
                                          val => !!val || 'Informe a descrição do projeto'
                                      ]"
                                  />
                              </div>

                              <div class="col-4 q-ml-md q-gutter-x-md">
                                  <q-input v-model="dadosProjeto.valor_estimado" dense outlined bg-color="white" label="Valor da proposta"/>

                                  <q-separator spaced color="white"/>

                                  <div class="text-white">Tecnologias</div>

                                  <q-field
                                      v-model="dadosProjeto.tecnologias"
                                      borderless
                                      no-error-icon
                                      :rules="[
                                          val => val.length > 0 || 'Obrigatório selecionar pelo menos 1 tecnologia'
                                      ]"
                                  >
                                      <template v-slot:control>
                                          <q-scroll-area class="full-width" style="height: 300px; max-height: 300px; overflow: auto">
                                              <q-option-group
                                                  :options="tecnologias.map(row => ({
                                                      label: row.nome_tecnologia,
                                                      value: row.id_tecnologia
                                                  }))"
                                                  v-model="dadosProjeto.tecnologias"
                                                  color="white"
                                                  class="text-white"
                                                  option-label="nome_tecnologia"
                                                  option-value="id_tecnologia"
                                                  type="checkbox"
                                                  keep-color
                                              />
                                          </q-scroll-area>
                                      </template>
                                  </q-field>
                              </div>
                          </div>
                      </q-card-section>

                      <q-card-actions align="right">
                          <q-btn
                              label="Enviar solicitação"
                              dense
                              color="light-green-10"
                              icon="send"
                              type="submit"
                          />
                      </q-card-actions>
                  </q-form>
              </q-card>

              <div class="q-mt-md q-mb-md">Veja perfis, projetos e propostas</div>

              <div class="row">
                  <div class="col q-gutter-sm q-mr-sm">
                      <q-card>
                          <q-card-section class="row items-center q-gutter-sm q-mb-lg">
                              <q-avatar>
                                  <img src="https://cdn.quasar.dev/img/avatar4.jpg"/>
                              </q-avatar>
                              <div>Nome da empresa</div>
                          </q-card-section>
                      </q-card>

                      <q-card>
                          <q-card-section class="row items-center q-gutter-sm">
                              <q-avatar>
                                  <img src="https://cdn.quasar.dev/img/avatar2.jpg"/>
                              </q-avatar>
                              <div>Nome da empresa</div>
                          </q-card-section>
                      </q-card>
                  </div>

                  <div class="col q-gutter-sm">
                      <q-card>
                          <q-card-section class="row items-center q-gutter-sm">
                              <q-avatar>
                                  <img src="https://cdn.quasar.dev/img/avatar3.jpg"/>
                              </q-avatar>
                              <div>Nome da empresa</div>
                          </q-card-section>
                      </q-card>

                      <q-card>
                          <q-card-section class="row items-center q-gutter-sm">
                              <q-avatar>
                                  <img src="https://cdn.quasar.dev/img/avatar1.jpg"/>
                              </q-avatar>
                              <div>Nome da empresa</div>
                          </q-card-section>
                      </q-card>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          tab: 'home',

          group: 'op1',

          options: [
              {
              teste: 'Option 1',
              teste2: 'op1'
              },
          ],

          tecnologias: [],
          tecnologiasSelecionadas: [],
          isTecnologiasLoading: true,

          dadosProjeto: {
              titulo: null,
              descricao: null,
              valor_estimado: null,
              tecnologias: [],
          },
      }
  },

  methods: {
      getTecnologias() {
          this.$api.get("/tecnologias").then(res => {
              this.tecnologias = res.data;
          }).finally(() => this.isTecnologiasLoading = false);
      },

      criarProjeto() {
          this.$q.loading.show();

          this.$api.post("/pedidos", this.dadosProjeto).then(() => {
              this.$q.notify({
                  type: "positive",
                  message: "Pedido criado com sucesso",
              });

              this.dadosProjeto = {};
          })
          .finally(() => this.$q.loading.hide());
      },
  },

  mounted() {
      this.getTecnologias();
  },
}
</script>
