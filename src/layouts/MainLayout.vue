<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <IndexPage />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import IndexPage from "pages/IndexPage.vue";
import { useTravelStore } from "src/stores/TravelStore"; // Импортируйте ваш стор

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const travelStore = useTravelStore(); // Инициализируйте ваш стор

    return {
      leftDrawerOpen,
      travelStore,
    };
  },
  components: {
    IndexPage,
  },
};
</script>

<style lang="scss"></style>
