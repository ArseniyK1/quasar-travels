<template>
  <div class="filters">
    <div class="text-h5 text-white q-mt-sm q-mb-sm">
      <q-icon name="sort" /> Сортировка
    </div>
    <div class="column">
      <div class="col">
        <q-select
          rounded
          outlined
          v-model="filterCity"
          transition-show="scale"
          transition-hide="scale"
          :options="citys"
          label="Цена"
          class="q-selecet filled"
          @update:model-value="handleFilterChange()"
          dark
        />
      </div>
      <div class="col">
        <q-select
          rounded
          outlined
          v-model="filterComfort"
          :options="wagon_types"
          transition-show="scale"
          transition-hide="scale"
          label="Комфорт"
          class="q-selecet filled"
          @update:model-value="handleFilterChange()"
          dark
        />
      </div>
      <div class="col">
        <q-select
          rounded
          outlined
          transition-show="scale"
          transition-hide="scale"
          v-model="filterTime"
          :options="travel_times"
          label="Время в пути"
          class="q-selecet text-white"
          @update:model-value="handleFilterChange()"
          dark
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTravelStore } from "src/stores/TravelStore";

export default {
  setup() {
    const travelStore = useTravelStore();
    const filterCity = ref(null);
    const filterComfort = ref(null);
    const filterTime = ref(null);

    const handleFilterChange = (value) => {
      console.log(value);
      if (filterCity.value === "По возрастанию") {
        travelStore.sortTravels("cityAscending");
      }
      if (filterCity.value === "По убыванию") {
        travelStore.sortTravels("cityDescending");
      }
      if (filterComfort.value) {
        travelStore.sortTravels(filterComfort.value);
      }
      if (filterTime.value === "По возрастанию") {
        travelStore.sortTravels("travelAscending");
      }
      if (filterTime.value === "По убыванию") {
        travelStore.sortTravels("travelDescending");
      }
    };

    const citys = ["По возрастанию", "По убыванию"];
    const wagon_types = ["купе", "плацкарт", "сидячий"];
    const travel_times = ["По возрастанию", "По убыванию"];

    return {
      filterCity,
      filterComfort,
      filterTime,
      handleFilterChange,
      citys,
      wagon_types,
      travel_times,
    };
  },
};
</script>

<style lang="scss">
.filters {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .column {
    width: 80%;
    .q-selecet {
      margin: 10px 0;
    }
  }
}
</style>
