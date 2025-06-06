<template>
  <div class="q-pa-md" style="max-width: 600px; margin: 0 auto;">
    <div class="flex flex-center text-h4 q-mb-xl">
      Perfil da Empresa: {{ dadosEmpresa.nome || 'Empresa' }}
    </div>

    <!-- Card: Dados da Empresa -->
    <q-card class="q-mb-lg">
      <q-card-section class="bg-light-green-8 text-white">
        <div class="text-h6">Informações da Empresa</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list dense>
          <q-item>
            <q-item-section>Nome:</q-item-section>
            <q-item-section>{{ dadosEmpresa.nome }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>CNPJ:</q-item-section>
            <q-item-section>{{ dadosEmpresa.cnpj }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Email:</q-item-section>
            <q-item-section>{{ dadosEmpresa.email }}</q-item-section>
          </q-item>
          <q-item v-if="dadosEmpresa.telefone">
            <q-item-section>Telefone:</q-item-section>
            <q-item-section>{{ dadosEmpresa.telefone }}</q-item-section>
          </q-item>
          <q-item v-if="dadosEmpresa.endereco">
            <q-item-section>Endereço:</q-item-section>
            <q-item-section>{{ dadosEmpresa.endereco }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Data de Cadastro:</q-item-section>
            <q-item-section>{{ formatarData(dadosEmpresa.data_cadastro) }}</q-item-section>
          </q-item>
          <q-item v-if="dadosEmpresa.perfil?.tipo_perfil">
            <q-item-section>Tipo de Perfil:</q-item-section>
            <q-item-section>{{ dadosEmpresa.perfil.tipo_perfil.nome_tipo }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Card: Gamificação -->
    <q-card>
      <q-card-section class="bg-indigo-8 text-white">
        <div class="text-h6">Gamificação</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="q-mb-md">
          <q-linear-progress :value="nivelProgresso / 100" color="light-green" rounded>
            <div class="absolute-full flex flex-center text-white">
            </div>
          </q-linear-progress>
        </div>

        <q-item>
          <q-item-section>🏆 Nível:</q-item-section>
          <q-item-section>{{ nivel }}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>🌟 Pontos:</q-item-section>
          <q-item-section>{{ pontos }}</q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <div class="text-subtitle1 q-mb-sm">🏅 Distintivos conquistados:</div>
        <div class="row q-gutter-sm">
          <q-chip
            v-for="(badge, index) in distintivos"
            :key="index"
            icon="emoji_events"
            color="amber"
            text-color="black"
            class="text-bold"
          >
            {{ badge }}
          </q-chip>
          <div v-if="!distintivos.length" class="text-grey">Nenhum distintivo ainda</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dadosEmpresa: { /* ... */ },
      nivel: 1,
      nivelProgresso: 0,
      pontos: 0,
      distintivos: []
    }
  },

  methods: {
    async getEmpresaLogada() {
      const token = localStorage.getItem("auth_token")
      if (!token) return

      try {
        const [empresaRes, statusRes, distintivosRes] = await Promise.all([
          this.$api.get("/auth/me", { headers: { Authorization: `Bearer ${token}` }}),
          this.$api.get("/gamificacao/status", { headers: { Authorization: `Bearer ${token}` }}),
          this.$api.get("/gamificacao/distintivos", { headers: { Authorization: `Bearer ${token}` }})
        ])

        this.dadosEmpresa = empresaRes.data

        // Atualiza gamificação
        this.nivel = statusRes.data.nivel
        this.pontos = statusRes.data.pontos
        this.nivelProgresso = statusRes.data.progresso
        this.distintivos = distintivosRes.data.map(d => d.titulo)

      } catch (error) {
        this.$q.notify({
          type: "negative",
          message: "Erro ao carregar dados da empresa ou gamificação"
        })
      }
    },

    formatarData(data) {
      return new Date(data).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },

  mounted() {
    this.getEmpresaLogada()
  }
}
</script>
