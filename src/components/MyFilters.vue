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
      <q-btn
        rounded
        label="Сбросить"
        color="primary"
        class="q-mt-xs"
        @click="handleFilterChange('reset')"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTravelStore } from "src/stores/TravelStore";
const travelStore = useTravelStore();
const { sortTravels } = travelStore;

export default {
  setup() {
    const filterCity = ref(null);
    const filterComfort = ref(null);
    const filterTime = ref(null);

    const handleFilterChange = (reset) => {
      if (filterCity.value === "По возрастанию") {
        sortTravels("cityAscending");
      }
      if (filterCity.value === "По убыванию") {
        sortTravels("cityDescending");
      }
      if (filterComfort.value) {
        sortTravels(filterComfort.value);
      }
      if (filterTime.value === "По возрастанию") {
        sortTravels("travelAscending");
      }
      if (filterTime.value === "По убыванию") {
        sortTravels("travelDescending");
      }
      if (reset === "reset") {
        filterCity.value = "";
        filterComfort.value = "";
        filterTime.value = "";
        sortTravels("reset");
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
