<template>
  <div class="list">
    <travel-item
      v-for="travel of filteredTravels"
      :key="travel.travel_id"
      :travel="travel"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import TravelItem from "./TravelItem.vue";
import { useTravelStore } from "src/stores/TravelStore";

export default {
  components: {
    TravelItem,
  },
  setup() {
    const travelStore = useTravelStore();

    // Вычисляемое свойство для получения отфильтрованных данных из стора
    const filteredTravels = computed(() => {
      return travelStore.sortTrav.length > 0
        ? travelStore.sortTrav
        : travelStore.travels;
    });

    return {
      filteredTravels,
    };
  },
};
</script>

<style scoped>
.list {
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
