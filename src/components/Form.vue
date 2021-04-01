<template>
  <div>
    <div id="display">
      <Invoice :detail="invoices" />
      <Payment :details="payment" />
    </div>
    <div id="form-data">
      <div id="type">
        Type:
        <select
          id="my_select"
          class="input-data"
          v-model="formData.type"
          :class="{ 'is-invalid': submitted && $v.formData.form.$error }"
        >
          <option value="invoice" id="invoice">invoice</option>
          <option value="payment" id="payment">payment</option>
        </select>
        <div
          v-if="submitted && $v.formData.type.$error"
          class="invalid-feedback"
        >
          <label v-if="!$v.formData.type.required">Type is required</label>
        </div>
      </div>
      <div style="padding-top: 2px">
        To/Form:
        <input
          v-model="formData.form"
          type="text"
          class="input-data"
          id="form"
          :class="{ 'is-invalid': submitted && $v.formData.form.$error }"
        />
        <div
          v-if="submitted && $v.formData.form.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.formData.form.required"> Name is required</span>
        </div>
      </div>
      <div class="form-group">
        Details:
        <input
          type="text"
          v-model="formData.details"
          id="details"
          class="input-data"
          :class="{ 'is-invalid': submitted && $v.formData.details.$error }"
        />
        <div
          v-if="submitted && $v.formData.details.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.formData.details.required"> Details is required</span>
          <span v-if="!$v.formData.details.minLength"
            >at least 6 characters required</span
          >
        </div>
      </div>
      <div class="form-group">
        Amount:
        <input
          type="text"
          v-model="formData.amount"
          id="amount"
          class="input-data"
          :class="{ 'is-invalid': submitted && $v.formData.amount.$error }"
        />
        <div
          v-if="submitted && $v.formData.amount.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.formData.amount.required"> Amount is required</span>
          <span v-if="!$v.formData.amount.integer"
            >Only accept integer value</span
          >
        </div>
      </div>
      <div class="add">
        <button @click.prevent="add" type="submit">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Invoice from './Invoice'
import Payment from './Payment'
import { required, minLength, integer } from 'vuelidate/lib/validators'

export default {
  components: {
    Invoice,
    Payment,
  },
  data() {
    return {
      invoices: [],
      payment: [],
      formData: {
        type: '',
        form: '',
        details: '',
        amount: '',
      },
      submitted: false,
    }
  },
  validations() {
    return {
      formData: {
        type: { required },
        form: { required },
        details: { required, minLength: minLength(6) },
        amount: { required, integer },
      },
    }
  },

  methods: {
    ...mapActions('invoice', ['addInvoice']),
    ...mapActions('payment', ['addPayment']),

    add() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      if (this.formData.type === 'invoice') {
        this.addInvoice(this.formData)
      } else {
        this.addPayment(this.formData)
      }
      this.reset()
    },
    reset() {
      this.formData = {
        type: 'invoice',
        form: '',
        details: '',
        amount: '',
      }
    },
  },
}
</script>

<style scoped>
#display {
  display: flex;
  justify-content: space-around;
}
h1 {
  color: fuchsia;
}
#form-data {
  background-color: rgb(204, 203, 203);
  height: 35vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
}
.invalid-feedback {
  margin-left: 20px;
  color: rgb(235, 76, 76);
}
.add button {
  height: 30px;
  width: 90px;
  background-color: rgb(59, 56, 59);
  border-radius: 5px;
  color: white;
}
.add {
  padding-top: 2px;
  margin-left: 5%;
}
#type {
  margin-left: 26px;
}

#my_select {
  margin-left: 20px;
  height: 3vh;
  width: 15vh;
  margin-bottom: 10px;
}
.input-data {
  height: 3vh;
  width: 25vh;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}
@media screen and (max-width: 1063px) {
  #form-data {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 20px;
  }
  .add button {
    height: 30px;
    width: 90px;
  }
}
</style>
