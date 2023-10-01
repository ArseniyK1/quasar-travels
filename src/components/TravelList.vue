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

    const filteredTravels = computed(() => {
      return travelStore.sortTravelArray.length > 0
        ? travelStore.sortTravelArray
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
@media (max-width: 1811px) {
  .list div {
    text-align: center;
    margin: 15px auto;
  }
}
</style>
