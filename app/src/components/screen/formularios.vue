<template>
  <div>
    <!--formularios para teste-->
    <br />COLINHA
    <br />Banco de Dados
    <br />Biologia
    <br />Educação Física
    <br />Engenharia de Software
    <br />Filosofia
    <br />Física
    <br />Geografia
    <br />Hardware
    <br />História
    <br />Língua Estrangeira - Língua Inglesa
    <br />Língua Estrangeiras - Língua Espanhola
    <br />Língua Portuguesa
    <br />Matemática
    <br />Programação
    <br />Projeto Integrador
    <br />Química
    <br />Sociologia
    <br />
    <br />
    <hr />Subjects
    <input v-model="atividade.subject" type="text" />
    <br />Date
    <input v-model="atividade.date" type="text" />
    <br />cyclo
    <input v-model="atividade.cyclo" type="text" />
    <br />type
    <input v-model="atividade.type" type="text" />
    <br />description
    <input v-model="atividade.description" type="text" />
    <br />
    <button @click="adicionarAtividade">ADICIONAR</button>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      atividade: {
        subject: "",
        date: "",
        cycle: "",
        type: "",
        description: "",
      },
    };
  },
  methods: {
    adicionarAtividade() {
      firebase
        .firestore()
        .collection("todo")
        .add(this.atividade)
        .then(() => {
          alert("Adicionado com sucesso");
        });
    },
  },
};
</script>