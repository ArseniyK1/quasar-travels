<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="index">
      <my-filters />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import { useTravelStore } from "src/stores/TravelStore"; // Импортируйте ваш стор
import MyFilters from "src/components/MyFilters.vue";

export default {
  components: { MyFilters },
  setup() {
    const leftDrawerOpen = ref(false);
    const travelStore = useTravelStore(); // Инициализируйте ваш стор

    return {
      leftDrawerOpen,
      travelStore,
    };
  },
};
</script>

<style lang="scss">
.index {
  width: 100vw;
  height: 100vh;
  background: #363636;
  display: flex;
}
</style>
