<template>
  <div>
    <!--CARD FILTROS-->
    <b-button @click="showFilters = !showFilters" type="is-dark">Filtros</b-button>
    <div v-if="showFilters">
      <div class="buttons">
        <p>Filtros Ativos: {{ filterOn }}</p>
        <b-button size="is-small" @click="getTasks">Limpar</b-button>
      </div>
      <!--Matéria-->

      <b-field label="Matéria">
        <b-select v-model="cards.subject">
          <option value="Banco de Dados">Banco de Dados</option>
          <option value="Biologia">Biologia</option>
          <option value="Educação Física">Educação Física</option>
          <option value="Engenharia de Software">Engenharia de Software</option>
          <option value="Filosofia">Filosofia</option>
          <option value="Física">Física</option>
          <option value="Geografia">Geografia</option>
          <option value="Hardware">Hardware</option>
          <option value="História">História</option>
          <option value="Língua Inglesa">Língua Inglesa</option>
          <option value="Língua Espanhola">Língua Espanhola</option>
          <option value="Língua Portuguesa">Língua Portuguesa</option>
          <option value="Matemática">Matemática</option>
          <option value="Programação">Programação</option>
          <option value="Projeto Integrador">Projeto Integrador</option>
          <option value="Química">Química</option>
          <option value="Sociologia">Sociologia</option>
        </b-select>
        <p class="control">
          <b-button @click="filterSubject(cards.subject)" class="button is-dark">Filtrar</b-button>
        </p>
      </b-field>

      <!--Tipo De Atividade-->

      <b-field label="Tipo De Atividade">
        <b-select v-model="cards.type">
          <option value="Prova">Prova</option>
          <option value="Reunião">Reunião</option>
          <option value="Trabalho">Trabalho</option>
        </b-select>
        <p class="control">
          <b-button @click="filterType(cards.type)" class="button is-dark">Filtrar</b-button>
        </p>
      </b-field>

      <!--Data Marcad-->

      <b-field label="Data">
        <b-input v-model="cards.date" placeholder="dd/mm/aaaa"></b-input>
        <p class="control">
          <b-button @click="filterDate(cards.date)" class="button is-dark">Filtrar</b-button>
        </p>
      </b-field>

      <!--Ciclo-->
      <b-field label="Ciclo">
        <b-input v-model="cards.cycle"></b-input>
        <p class="control">
          <b-button @click="filterCycle(cards.cycle)" class="button is-dark">Filtrar</b-button>
        </p>
      </b-field>
    </div>
    <br />
    <br />
    <!--CARD BUEFY-->
    <div v-for="index of todoList" :key="index.id">
      <div class="card">
        <div class="card-content">
          <p class="title">{{index.subject}}</p>
          <br />
          <p class="subtitle">{{index.type}}</p>
          <p class="subtitle">{{index.description}}</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>Ciclo: {{index.cycle}}</span>
          </p>
          <p class="card-footer-item">
            <span>Data Marcada: {{index.date}}</span>
          </p>
        </footer>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      cards: {
        subject: "",
        type: "",
        date: "",
        cycle: "",
      },
      filterOn: [],
      todoList: [],
      showFilters: false,
    };
  },
  methods: {
    getTasks() {
      firebase
        .firestore()
        .collection("todo")
        .get()
        .then((snapshot) => {
          this.todoList = [];
          this.filterOn = [];
          snapshot.docs.forEach((item) => {
            this.todoList.push(item.data());
          });
        })
        .catch((err) => {
          alert(
            "Erro Ao Chamar itens, envie uma reclamação caso isso se repita",
            err
          );
        });
    },
    filterSubject(filter) {
      let subjectList = [];
      let i;
      this.filterOn.push(filter);
      for (i of this.todoList) {
        if (i.subject == filter) {
          subjectList.push(i);
        }
      }
      this.todoList = subjectList;
    },
    filterDate(filter) {
      let dateList = [];
      let i;
      this.filterOn.push(filter);
      for (i of this.todoList) {
        if (i.date == filter) {
          dateList.push(i);
        }
      }
      this.todoList = dateList;
    },
    filterType(filter) {
      let typeList = [];
      let i;
      this.filterOn.push(filter);
      for (i of this.todoList) {
        if (i.type == filter) {
          typeList.push(i);
        }
      }
      this.todoList = typeList;
    },
    filterCycle(filter) {
      console.log(filter);
      let cycleList = [];
      let i;
      this.filterOn.push(filter);
      for (i of this.todoList) {
        if (i.cycle == filter) {
          cycleList.push(i);
        }
      }
      this.todoList = cycleList;
    },
  },
  created() {
    this.getTasks();
  },
};
</script>