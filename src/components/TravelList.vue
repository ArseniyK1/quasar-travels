<template>
  <div class="list styled-scrollbars">
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}

.styled-scrollbars {
  scrollbar-color: #fff #000;
}
.styled-scrollbars::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.styled-scrollbars::-webkit-scrollbar-thumb {
  background: #999;
}
.styled-scrollbars::-webkit-scrollbar-track {
  background: #333;
}
</style>
