<template>
  <q-dialog>
    <q-card class="row" style="width:900px; max-width: 100%;">
      <div class="col">
        <q-card-section>
          <div>Título da Proposta</div>
        </q-card-section>

        <q-card-section class="q-gutter-md" >
          <div>Proposto por: Nome da empresa que está propondo</div>
          <div>Data da Solicitação: xx/xx/xxxx</div>
          <div>Data de previsão de término: xx/xx/xxxx</div>
          <div>Valor da proposta: R$ xxxx,xx podendo ser "A definirs"</div>
        </q-card-section>

        <q-card-section>
          <div>Informações sobre o projeto: </div>
          <div>
            Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut voluptates quas.
                Aut neque cumque ea aliquid labore est veritatis saepe non pariatur iusto et velit sint et odit autem.
                A corporis adipisci et nobis ducimus eum similique blanditiis nam Quis dolorem et consequatur temporibus. Et ducimus quia ut numquam dolore quo
                galisum accusantium qui nesciunt voluptas qui reiciendis rerum sit blanditiis ipsam ad inventore dolorum.
                Ut totam sint id ipsa autem nam accusantium dolorem aut iusto omnis est illum ducimus qui consequatur accusamus non voluptas tempore.
          </div>
        </q-card-section>
      </div>

      <div class="col-4">
        <q-card class="bg-light-green-4 q-ma-md" >
          <q-card-section class="row items-center q-gutter-sm">
            <q-avatar>
              <img src="../assets/avatar2.png"/>
            </q-avatar>
            <div>Nome da Proposta </div>
          </q-card-section>

          <q-card-section>
            <div> Ramo de atuação: <b>Tecnologia</b></div>

            <div>
              Lorem ipsum dolor sit amet. Sit sint sapiente sed odio harum aut numquam modi aut blanditiis internos ut voluptates quas.
                Aut neque cumque ea aliquid labore est veritatis saepe
            </div>
          </q-card-section>
        </q-card>

        <div class="q-ma-md">
          <q-btn color="light-green-10" no-caps class="text-white full-width q-mb-md" label="Tenho interesse"/>
          <q-btn color="white" no-caps class="text-light-green-10 full-width" label="Entrar em contato"/>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
