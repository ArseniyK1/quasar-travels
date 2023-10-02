<template>
  <q-page padding class="one-travel styled-scrollbars">
    <q-btn
      round
      color="white-5"
      icon="arrow_back"
      @click="goBack"
      class="arrow-back"
    />
    <div class="q-pa-md row items-start q-gutter-md flex justify-center card">
      <q-card class="my-card" dark bordered>
        <!-- <q-img :src="travel_obj[0].train_img" /> -->

        <q-card-section>
          <div class="text-overline text-orange-9" v-if="travel_obj">
            {{ travel_obj.place_departure }}
            <q-icon name="keyboard_arrow_right" />
            {{ travel_obj.place_arrival }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs"></div>
          <div class="text-subtitle1">
            Подробная информация о поезде:
            <p
              class="text-caption text-grey"
              v-if="travel_obj && travel_obj.ticket"
            >
              Стоимость билета на данный рейс: {{ travel_obj.ticket.cost }}
            </p>
            <p
              class="text-caption text-grey"
              v-if="travel_obj && travel_obj.time_departure"
            >
              Время отправления: {{ travel_obj.time_departure }}
            </p>
            <p
              class="text-caption text-grey"
              v-if="travel_obj && travel_obj.time_arrival"
            >
              Время прибытия: {{ travel_obj.time_arrival }}
            </p>
            <p
              class="text-caption text-grey"
              v-if="travel_obj && travel_obj.duration"
            >
              Время в пути: {{ travel_obj.duration }}
            </p>
            <p
              class="text-caption text-grey"
              v-if="travel_obj && travel_obj.train"
            >
              Вид вагонов: {{ travel_obj.train.type }}
            </p>
          </div>
          <p class="text-caption" v-if="travel_obj && travel_obj.ticket">
            Количество доступных билетов: {{ travel_obj.ticket.quantity }}
          </p>

          <table v-if="travel_obj && travel_obj.ticket.quantity > 0">
            <thead>
              <tr>
                <th>Место</th>
                <th>Статус</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              <!-- Генерируем строки таблицы для каждого доступного места -->
              <tr v-for="(seat, index) in generateSeats()" :key="index">
                <td>{{ seat.number }}</td>
                <td>{{ seat.status }}</td>
                <td>
                  <button
                    @click="selectSeat(index)"
                    :disabled="seat.status !== 'Свободно'"
                  >
                    Выбрать
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
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
    async findOneTravel() {
      const res = await api.get(
        `http://localhost:5000/api/travel/${this.travelId}`
      );
      this.travel_obj = res.data;
      console.log(this.travel_obj);
    },

    goBack() {
      this.$router.go(-1);
    },
    generateSeats() {
      const seats = [];
      const availableSeats = this.travel_obj.ticket.quantity;

      // Максимум 20 мест
      for (let i = 1; i <= 10; i++) {
        if (i <= availableSeats) {
          seats.push({ number: `${i}`, status: "Свободно" });
        } else {
          seats.push({ number: `${i}`, status: "Занято" });
        }
      }

      return seats;
    },
    selectSeat(index) {
      if (this.travel_obj) {
        const seat = this.travel_obj.ticket.seats[index];
        if (seat.status === "Свободно") {
          seat.status = "Выбрано";
          // Добавьте здесь логику для регистрации выбранного места
          // Например, можно отправить запрос на сервер
        }
      }
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
  overflow: auto;
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
