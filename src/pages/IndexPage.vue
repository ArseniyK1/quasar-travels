<template>
  <q-page class="flex index">
    <MyFilters />
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

<style>
.index {
  width: 100vw;
  height: 100vh;
  background: #363636;
}
</style>
