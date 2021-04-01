<template>
  <div id="invoice">
    <h1>Invoice</h1>
    <div class="invoice">
      <div class="data" v-for="(detail, i) in invoicedata" :key="i">
        <Form />
        <h4>{{ detail.type }}</h4>
        <p>
          {{ detail.form }} is owed $ {{ detail.amount }} for
          {{ detail.details }} .
          <button @click="remove(i)">delete</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  props: {
    detail: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters('invoice', ['invoicedata']),
  },
  methods: {
    ...mapActions('invoice', ['remove']),
  },
}
</script>
<style scoped>
#invoice {
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
