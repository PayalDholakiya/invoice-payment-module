<template>
  <div id="payment">
    <h1>Payment</h1>
    <div class="data" v-for="(details, i) in data" :key="i">
      <!-- <Form /> -->
      <h4>{{ details.type }}</h4>
      <p>
        {{ details.form }} is owed $ {{ details.amount }} for
        {{ details.details }} .
        <button @click="remove(i)">delete</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    details: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters('payment', ['data']),
  },
  methods: {
    ...mapActions('payment', ['remove']),
  },
}
</script>

<style scoped>
#payment {
  height: 40vh;
  width: 100%;
  overflow-y: scroll;
  margin-top: 5px;
  padding-left: 5px;
  border: 1px solid gainsboro;
  border-radius: 5px;
}
.data {
  margin-top: 5px;
  padding-left: 5px;
  border: 1px solid gainsboro;
  border-radius: 5px;
}
h4 {
  text-align: start;
  color: fuchsia;
}
p {
  text-align: start;
}
p button {
  text-align: end;
}
</style>
