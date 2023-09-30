import { defineStore } from "pinia";

export const useTravelStore = defineStore("travelStore", {
  state: () => ({
    travels: [
      {
        travel_id: 1,
        time_departure: "00:00",
        time_arrival: "05:00",
        travel_time: 5,
        city_departure: "Липецк",
        city_arrival: "Москва",
        ticket_cost: 2000,
        ticket_count: 10,
        train_name: "Стриж",
        train_wagon_types: "купе",
        train_img: "src/assets/strizh.jpg",
      },
      {
        travel_id: 2,
        time_departure: "10:00",
        time_arrival: "17:00",
        travel_time: 7,
        city_departure: "Саратов",
        city_arrival: "Пермь",
        ticket_cost: 1200,
        ticket_count: 5,
        train_name: "Рассвет",
        train_wagon_types: "сидячий",
        train_img: "src/assets/rassvet.jpg",
      },
      {
        travel_id: 3,
        time_departure: "12:20",
        time_arrival: "15:20",
        travel_time: 3,
        city_departure: "Липецк",
        city_arrival: "Воронеж",
        ticket_cost: 999,
        ticket_count: 1,
        train_name: "Прекрасное далеко",
        train_wagon_types: "плацкарт",
        train_img: "src/assets/prekrasnoe.jpg",
      },
      {
        travel_id: 4,
        time_departure: "20:00",
        time_arrival: "00:00",
        travel_time: 4,
        city_departure: "Рязань",
        city_arrival: "Сызрань",
        ticket_cost: 699,
        ticket_count: 50,
        train_name: "Ворчун",
        train_wagon_types: "купе",
        train_img: "src/assets/strela.jpg",
      },
      {
        travel_id: 5,
        time_departure: "14:00",
        time_arrival: "22:00",
        travel_time: 8,
        city_departure: "Владивосток",
        city_arrival: "Казань",
        ticket_cost: 5999,
        ticket_count: 16,
        train_name: "Амур",
        train_wagon_types: "плацкарт",
        train_img: "src/assets/sapsan.jpg",
      },
    ],
    sortTrav: [],
  }),
  getters: {},
  actions: {
    sortTravels: function (sort) {
      // Обратите внимание на использование function
      let sortArr = [...this.travels]; // Используйте this для доступа к состоянию
      if (sort) {
        if (sort === "cityAscending") {
          sortArr.sort((a, b) => a.ticket_cost - b.ticket_cost);
        }
        if (sort === "cityDescending") {
          sortArr.sort((a, b) => b.ticket_cost - a.ticket_cost);
        }
        if (sort === "купе" || sort === "плацкарт" || sort === "сидячий") {
          sortArr = sortArr.filter((travel) =>
            travel.train_wagon_types.includes(sort)
          );
        }

        if (sortArr.length > 0) {
          this.sortTrav = sortArr; // Используйте this для установки состояния
        } else {
          this.sortTrav = [];
        }
      }
    },
  },
});
