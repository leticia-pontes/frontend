<template>
    <q-dialog v-model="open">
        <q-card class="rounded-card">
            <q-card-section class="flex flex-center">
                <img src="../assets/testing-logo.png" style="width:150px;"/>
            </q-card-section>

            <q-separator/>

            <q-card-section class="q-gutter-md">
                <q-input dense outlined label="email" v-model="email" style="width:300px;"/>
                <q-input dense outlined label="senha" v-model="senha" :type="showPassword ? 'text' : 'password'">
                    <template v-slot:append>
                        <q-icon
                            :name="showPassword ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="showPassword = !showPassword"
                        >
                            <q-tooltip class="text-caption">{{ showPassword ? 'Ocultar' : 'Mostar' }}</q-tooltip>
                        </q-icon>
                    </template>
                </q-input>
            </q-card-section>

            <q-btn color="indigo-6" class="full-width" label="Login"/>
        </q-card>
    </q-dialog>
</template>

<script> 
export default {
    data () {
        return {
            open: false,
            email:null,
            senha:null,
            showPassword: false,
        }
    },
    methods: {
        openModal() {
            this.open = true;
        }
    }
}
</script>


<style scoped>
.capitalize-btn {
    text-transform: capitalize;
}

.rounded-card {
    border-radius: 12px;
}

.expandable-card {
    transition: all 0.3s ease;
}

.expandable-card:hover{
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.hover-card {
  transition: all 0.3s ease;
}

.hover-card:hover {
  background-color: rgba(49, 27, 146, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(63, 81, 181, 0.3);
}

</style>