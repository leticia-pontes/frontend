<template>
  <div>
    <div class="flex flex-center text-h4 q-pa-xl">
      Seja Bem-Vindo, {{ dadosEmpresa.nome || 'Empresa' }}
    </div>

    <div class="row q-gutter-md justify-center">
      <!-- Seção do formulário agora ocupa largura menor -->
      <div class="col-6">
        <q-card class="bg-light-green-8">
          <q-card-section>
            <div class="text-h6 text-white">Crie sua proposta</div>
          </q-card-section>

          <q-form @submit.prevent="criarProjeto">
            <q-card-section>
              <q-input
                v-model="dadosProjeto.titulo"
                dense
                outlined
                bg-color="white"
                label="Nome do projeto"
                :rules="[ val => !!val || 'Informe o nome do projeto' ]"
              />

              <q-input
                v-model="dadosProjeto.descricao"
                bg-color="white"
                outlined
                type="textarea"
                label="Descrição"
                class="q-mt-md"
                :rules="[ val => !!val || 'Informe a descrição do projeto' ]"
              />

              <q-input
                v-model="dadosProjeto.valor_estimado"
                dense
                outlined
                bg-color="white"
                label="Valor da proposta"
                class="q-mt-md"
              />
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
      dadosEmpresa: {
        nome: '',
        cnpj: '',
        email: '',
        telefone: '',
        endereco: '',
        perfil: null
      },

      dadosProjeto: {
        titulo: null,
        descricao: null,
        valor_estimado: null,
      },
    }
  },

  methods: {
    getEmpresaLogada() {
      const token = localStorage.getItem("auth_token")
      if (!token) return

      this.$api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.dadosEmpresa = res.data
      }).catch(() => {
        this.$q.notify({
          type: "negative",
          message: "Erro ao carregar dados da empresa"
        })
      })
    },

    criarProjeto() {
      this.$q.loading.show()

      const payload = {
        ...this.dadosProjeto,
        id_empresa_contratante: this.dadosEmpresa.id_empresa
      }

      this.$api.post("/pedidos", payload).then(() => {
        this.$q.notify({
          type: "positive",
          message: "Pedido criado com sucesso"
        })
        this.dadosProjeto = {
          titulo: null,
          descricao: null,
          valor_estimado: null
        }
      }).finally(() => {
        this.$q.loading.hide()
      })
    }
  },

  mounted() {
    this.getEmpresaLogada()
  }
}
</script>
