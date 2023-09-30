<template>
  <q-page class="main">
    <!-- <MyFilters /> -->
    <TravelList />
  </q-page>
</template>

<script>
import MyFilters from "src/components/MyFilters.vue";
import TravelList from "src/components/TravelList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    MyFilters,
    TravelList,
  },
});
</script>

<style scoped>
.main {
  width: 100%;
}
</style>
