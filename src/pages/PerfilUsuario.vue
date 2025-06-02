<template>
    <div>
        <q-card class="q-ma-sm">
            <q-toolbar class="bg-indigo-1"/>

            <q-card-section>
                <div class="row items-center">
                    <div>
                        <q-avatar size="200px">
                            <q-img src="../assets/testingLogo.jpg"/>
                        </q-avatar>
                    </div>

                    <div>
                        <div class="text-h6 text-bold">
                            TESTE TECHNOLOGY
                        </div>

                        <div>
                            Lorem ipsum dolor sit amet. Et autem quasi et modi nihil ut libero galisum sed illum pariatur. Hic neque error eum Quis incidunt aut tempore alias.
                        </div>

                        <div>
                            Marília - SP, Av.  Avenida Teste nº1234
                        </div>

                        <div>
                            <img src="../assets/five-stars.jpg" style="height: 23px; width:105px;"/>
                        </div>
                    </div>
                </div>
            </q-card-section>

            <q-separator/>

            <div class="row">
                <div class="col">
                    <q-card-section >
                        <div>
                            <div class="flex flex-center text-bold">A T I V I D A D E S</div>
                           <q-separator/>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        <div class="row items-center">
                            <q-img class="q-ma-md" src="../assets/trofeu.avif" style="height: 50px; width:50px;"/>
                            <div>
                                <div>Pontuação:</div>
                                <div class="text-h6">870 PONTOS</div>
                            </div>
                        </div>

                        <div class="row items-center">
                            <q-icon name="trending_up" class="q-ma-md" size="50px"/>
                            <div>
                                <div>Reputação:</div>
                                <div class="text-h6">98% de avaliações positivas</div>
                            </div>
                        </div>

                        <div class="row items-center">
                            <img class="q-ma-md" src="../assets/project.png" style="height: 50px; width:50px;"/>
                            <div>
                                <div>Projetos:</div>
                                <div class="text-h6">360 concluídos 23 em andamento</div>
                            </div>
                        </div>
                    </q-card-section>

                </div>

                <q-separator vertical/>

                <div class="col">
                    <q-card-section class="col">
                        <div>
                            <div class="flex flex-center text-bold">I D E N T I D A D E</div>
                            <q-separator/>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-gutter-md">
                        <div class="row">
                            <div class="text-bold q-mr-sm">Nome Fantasia: </div>
                            <div>Teste Technology</div>
                        </div>

                        <div class="row">
                            <div class="text-bold q-mr-sm">Razão Social: </div>
                            <div>Teste Technology Soluções Digitais LTDA</div>
                        </div>

                        <div class="row items-center">
                            <div class="text-bold q-mr-sm">CNPJ: </div>
                            <div class="q-mr-sm">12.345.678/0001-90</div>
                            <!--<q-icon name="check" color="green" size="20px"/>-->
                            <q-img src="../assets/shield.avif" style="width:20px;height:20px;"/>
                        </div>

                        <div class="row">
                            <div class="text-bold q-mr-sm">Atuação:</div>
                            <div>Varejo e E-Commerce</div>
                        </div>

                        <div class="row">
                            <div class="text-bold q-mr-sm">Funcionários:</div>
                            <div>45 colaboradores</div>
                        </div>

                        <div class="row">
                            <div class="text-bold q-mr-sm">Tempo de mercado: </div>
                            <div>8 anos</div>
                        </div>

                        <div class="row">
                            <div class="text-bold q-mr-sm">Observações: </div>
                            <div>Prioriza soluções escaláveis e com arquitetura de microsserviços</div>
                        </div>
                    </q-card-section>
                </div>
            </div>

        </q-card>

        <div class="row">
            <q-card class="q-ma-sm col">
                <div>
                    <q-toolbar class="bg-indigo-1">
                        <q-toolbar-title class="text-subtitle2">
                            <div class=" text-bold q-mt-md text-indigo-3">C A T Á L O G O</div>
                        </q-toolbar-title>



                        <q-input placeholder="Pesquisar Projeto" dense outlined filled label="Pesquisar projeto">
                            <template v-slot:append>
                                <q-icon name="search"/>
                            </template>
                        </q-input>

                    </q-toolbar>
                </div>

                <q-card-section>
                    <q-virtual-scroll
                            style="max-height: 200px;"
                            :items="projectList"
                            separator
                            v-slot="{ item, index }"
                        >
                            <q-item
                            :key="index"
                            dense
                            clickable
                            >
                            <q-item-section>
                                <q-item-label>
                                {{ index + 1 }} - {{ item.label }}
                                </q-item-label>
                            </q-item-section>

                            </q-item>
                        </q-virtual-scroll>
                </q-card-section>
            </q-card>

            <q-card class="q-ma-sm col">
                <div>
                    <q-toolbar class="bg-indigo-1">
                        <q-toolbar-title class="text-subtitle2">
                            <div class=" text-bold q-mt-md text-indigo-3">A V A L I A Ç Õ E S</div>
                        </q-toolbar-title>



                        <q-input placeholder="Pesquisar Projeto" dense outlined filled label="Pesquisar usuário">
                            <template v-slot:append>
                                <q-icon name="search"/>
                            </template>
                        </q-input>

                    </q-toolbar>
                </div>

                <q-card-section>
                    <q-virtual-scroll
                            style="height: 200px;"
                            :items="ratingList"
                            separator
                            v-slot="{ item, index }"
                        >
                            <q-item
                            :key="index"
                            dense
                            clickable
                            >
                                <q-item-section>
                                    <q-item-label>
                                    {{ item.label }}
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-virtual-scroll>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
const maxSize = 360
const projectList = []
const ratingList = []

for ( let i = 1; i <= maxSize; i++){
    projectList.push({
        label: 'TITULO DO PROJETO'
    })
}

for (let i = 1; i <= 300; i++){
    ratingList.push({
        label: 'Nome do Usuário Cadastrado'
    })
}



export default {
    data () {
        return {
            value: 61,
            projectList,
            ratingList
        }
    }
}
</script>
