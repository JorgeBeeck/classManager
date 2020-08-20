<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <br />

    <main>
      <cards />
    </main>
  </div>
</template>
<script>
import navbar from "@/components/template/navbar.vue";
import cards from "@/components/screen/cards.vue";
//import formularios from "@/components/screen/formularios.vue";

export default {
  data() {
    return {
      addItem: false,
    };
  },
  components: {
    navbar,
    cards,
    //formularios,
  },
};
</script>

<style>
main {
  padding: 0% 3%;
}
</style>

