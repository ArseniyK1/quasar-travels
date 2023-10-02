<template>
  <q-card class="my-card flex flex-wrap" flat bordered dark>
    <q-card-section vertical>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">
          {{ travel.place_departure }} <q-icon name="keyboard_arrow_right" />
          {{ travel.place_arrival }}
        </div>

        <div class="text-h5 q-mt-sm q-mb-xs">
          Время в пути: {{ travel.duration }}
        </div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders img"
          src="src/assets/rassvet.jpg"
          alt="alt"
        />
      </q-card-section>
    </q-card-section>

    <q-separator inset />

    <q-card-actions>
      <q-btn color="primary"
        >отбытие {{ parseDate(travel.time_departure) }}
      </q-btn>
      <q-btn color="primary"
        >прибытие {{ parseDate(travel.time_arrival) }}
      </q-btn>

      <q-btn flat color="primary"
        ><router-link :to="'/' + travel.id" class="link"
          ><q-icon name="open_in_new" />Подробнее</router-link
        ></q-btn
      >
    </q-card-actions>
  </q-card>
</template>

<script setup>
function parseDate(dateString) {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} ${formattedHours}:${formattedMinutes}`;

  return formattedDate;
}
const props = defineProps({
  travel: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.my-card {
  width: 30rem;
  height: 50%;
  margin: 10px;
  .img {
    width: 25rem;
    height: 15rem;
  }
  .link {
    text-decoration: none;
  }
}
</style>
