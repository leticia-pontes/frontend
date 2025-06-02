<template>
    <div class="absolute-center">
        <div class="text-h4 flex flex-center q-mb-xl" style="width:400px;">Entrar</div>
        <q-form @submit.prevent="login">
            <q-input
                v-model="dados.email"
                dense
                outlined
                class="full-width q-mb-md"
                hide-bottom-space
                color="dark"
                label="E-mail"
                bg-color="white"
                :rules="[
                    val => !!val || 'Informe o seu e-mail',
                    (val, rules) => rules.email(val) || 'E-mail inválido'
                ]"
            />

            <q-input
                v-model="dados.senha"
                dense
                outlined
                hide-bottom-space
                label="Senha"
                color="dark"
                class="q-mb-md"
                bg-color="white"
                :type="showPassword ? 'text' : 'password'"
                :rules="[
                    val => !!val || 'Informe a sua senha'
                ]"
            >
                <template v-slot:append>
                    <q-icon
                        :name="showPassword ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="showPassword = !showPassword"
                    >
                        <q-tooltip class="text-caption">{{ showPassword ? 'Ocultar' : 'Mostrar' }}</q-tooltip>
                    </q-icon>
                </template>
            </q-input>

            <q-btn type="submit" no-caps label="Entrar" class="full-width" color="light-green-10"/>
        </q-form>
        <div class="row q-mt-sm items-center">
            <a href="" class="col text-light-green-10" >Esqueci a senha</a>
            <div class="row items-center">
                <div>Não tem uma conta ainda?</div>
                <a href="/cadastro" class="col text-light-green-10 q-ml-sm">Cadastre-se</a>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            showPassword: false,

            dados: {
                email: null,
                senha: null,
            },
        }
    },

    methods: {
        login() {
            this.$q.loading.show();

            this.$api.post("/login", this.dados).then(res => {
                this.$q.notify({
                    type: "positive",
                    message: "Login realizado"
                });
                this.$router.push('/desenvolvedor-profile');
            }).catch(() => {
                this.$q.notify({
                    type: "negative",
                    message: "Usuário ou senha incorretos",
                });
            })
            .finally(() => this.$q.loading.hide());
        },
    },
}
</script>


