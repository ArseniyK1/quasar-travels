<template>
  <q-page padding class="one-travel">
    <q-btn
      round
      color="white-5"
      icon="arrow_back"
      @click="goBack"
      class="arrow-back"
    />
    <div class="q-pa-md row items-start q-gutter-md flex justify-center card">
      <q-card class="my-card" dark bordered>
        <q-img :src="travel_obj[0].train_img" />

        <q-card-section>
          <div class="text-overline text-orange-9">
            {{ travel_obj[0].city_departure }}
            <q-icon name="keyboard_arrow_right" />
            {{ travel_obj[0].city_arrival }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{ travel_obj[0].train_name }}
          </div>
          <div class="text-subtitle1">
            Подробная информация о поезде:
            <p class="text-caption text-grey">
              Стоимость билета на данный рейс: {{ travel_obj[0].ticket_cost }}
            </p>
            <p class="text-caption text-grey">
              Количество доступных билетов: {{ travel_obj[0].ticket_count }}
            </p>
            <p class="text-caption text-grey">
              Время отправления: {{ travel_obj[0].time_departure }}
            </p>
            <p class="text-caption text-grey">
              Время прибытия: {{ travel_obj[0].time_arrival }}
            </p>
            <p class="text-caption text-grey">
              Время в пути: {{ travel_obj[0].travel_time }}
            </p>
            <p class="text-caption text-grey">
              Вид вагонов: {{ travel_obj[0].train_wagon_types }}
            </p>
          </div>
          <q-btn
            class="buy-ticket"
            color="primary"
            v-if="buy_ticket"
            @click="buyTicket"
            >Купить билет</q-btn
          >
          <div class="buy-ticket" v-else>Билет куплен!</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useTravelStore } from "src/stores/TravelStore";
const travelStore = useTravelStore();
export default {
  name: "OneTravelPage",
  data() {
    return {
      travelId: null,
      travel_obj: null,
      buy_ticket: true,
    };
  },
  methods: {
    findOneTravel() {
      this.travel_obj = travelStore.travels.filter(
        (travel) => travel.travel_id === +this.travelId
      );
    },
    buyTicket() {
      this.travel_obj[0].ticket_count--;
      this.buy_ticket = false;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.travelId = this.$route.params.travelId;
    this.findOneTravel();
  },
};
</script>

<style lang="scss" scoped>
.arrow-back {
  background: #464646;
}
.one-travel {
  width: 100%;
  overflow: hidden;
}

.card {
  width: 100%;
  // border: 1px solid red;
  .my-card {
    width: 45%;
    position: relative;
    .buy-ticket {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>
