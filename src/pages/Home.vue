<template>
   <div>
        <div class="row">
            <div>
                <p class="text-h4 q-mb-md">
                    Feito para quem contrata Perfeito para quem realiza
                </p>

                <p class="text-h5 q-mb-md">
                    Encontre especialistas ou ofereça seus serviços em uma plataforma simples, segura e eficiente.
                </p>

                <q-btn label="Cadastre-se" class="btn-register" to="/cadastro" />

            </div>
            <div>
                <img src="../assets/Freelancer-bro 1.png" alt="">
            </div>
            <div>



            </div>

            <div class="row q-gutter-x-xl">
                <q-card bordered flat class="col rounded-card expandable-card cursor-pointer" style="max-width: 800px">
                    <q-card-section class="row items-center">
                        <q-card-section class="col-3">
                            <q-img class="rounded-borders" src="../assets/avatar1.png" style="width: 150px" />
                        </q-card-section>

                        <q-card-section>
                            <div>
                                <div class="text-indigo-4 text-h5">S O L I C I T A Ç Õ E S</div>
                                <div>
                                    Confira o catálogo de solicitações e soluções disponíveis
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div>
                                Solicitações e soluções de desenvolvimento pré definidas,
                                catalogadas e publicadas para serem reutilizadas por você.
                                Economize tempo e faça as modificações que desejar.
                            </div>
                        </q-card-section>
                    </q-card-section>
                </q-card>

                <q-card bordered flat class="col rounded-card expandable-card cursor-pointer" style="max-width: 800px">
                    <q-card-section class="row items-center">
                        <q-card-section class="col-3">
                            <q-img class="rounded-borders" src="../assets/avatar2.png" style="width: 150px" />
                        </q-card-section>

                        <q-card-section>
                            <div>
                                <div class="text-indigo-4 text-h5">
                                    D E S E N V O L V E D O R E S
                                </div>
                                <div>Empresas parceiras cadastradas na plataforma</div>
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div>
                                Contrate empresas certificadas para trabalhar nas tecnologias
                                que o seu negócio precisa por um período específico.
                            </div>
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
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

.expandable-card:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
