<template>
  <q-card class="my-card flex flex-wrap" flat bordered dark>
    <q-card-section vertical>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">
          {{ travel.city_departure }} <q-icon name="keyboard_arrow_right" />
          {{ travel.city_arrival }}
        </div>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ travel.train_name }}</div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders img" :src="travel.train_img" alt="alt" />
        <div class="text-weight-bolder q-mt-sm">{{ travel.ticket_cost }}р.</div>
      </q-card-section>
    </q-card-section>

    <q-separator inset />

    <q-card-actions>
      <q-btn flat>отбытие {{ travel.time_departure }} </q-btn>
      <q-btn flat>прибытие {{ travel.time_arrival }} </q-btn>
      <q-btn flat color="primary"
        ><router-link :to="'/' + travel.travel_id" class="link"
          >Подробнее</router-link
        ></q-btn
      >
    </q-card-actions>
  </q-card>
</template>

<script setup>
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
