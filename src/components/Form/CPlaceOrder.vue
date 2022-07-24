<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-5">
          <h5
            class="ms-2"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Info
          </h5>
          <button
            type="button"
            class="btn w-100 mb-3"
            :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
            @click.prevent="loadInfo"
          >
            Load My Info
          </button>
          <div class="w-100 mb-3">
            <label
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
              ><span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >Name</span
              ><input
                type="text"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Name"
                v-model="info.name"
            /></label>
          </div>
          <div class="w-100 mb-3">
            <label
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
              ><span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >Contact</span
              ><input
                type="text"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Contact"
                v-model="info.contact"
            /></label>
          </div>
          <h5
            class="ms-2"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Address
          </h5>
          <button
            type="button"
            class="btn w-100 mb-3"
            :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
            @click.prevent="loadAddress"
          >
            Load My Address
          </button>
          <div class="w-100 mb-3">
            <div class="w-100 mb-3">
              <label
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >Line 1</span
                ><input
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Line 1"
                  v-model="address.line1"
              /></label>
            </div>
          </div>
          <div class="w-100 mb-3">
            <label
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
              ><span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >Line 2</span
              ><input
                type="text"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Line 2"
                v-model="address.line2"
            /></label>
          </div>
          <div class="w-100 mb-3">
            <label
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
              ><span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >Zip Code</span
              ><input
                type="text"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Zip Code"
                v-model="address.zipCode"
            /></label>
          </div>
          <div class="w-100 mb-3">
            <label
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
              ><span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >State</span
              ><input
                type="text"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="State"
                v-model="address.state"
            /></label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-5">
            <h5
              class="ms-2"
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              Payment
            </h5>
            <button
              type="button"
              class="btn w-100 mb-3"
              :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
              @click.prevent="loadPayment"
            >
              Load My Payment
            </button>
            <div class="w-100 mb-3">
              <label
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >Card</span
                ><input
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  v-model="payment.card"
              /></label>
            </div>
            <div class="w-100 mb-3">
              <label
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >Expire</span
                ><input
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="MM/YYYY"
                  v-model="payment.expire"
              /></label>
            </div>
            <div class="w-100 mb-3">
              <label
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >CVC</span
                ><input
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="XXX"
                  v-model="payment.cvc"
              /></label>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn w-100 mb-3"
          :class="[
            { 'btn-main-light': this.mode === 'Light' },
            { 'btn-main-dark': this.mode === 'Dark' },
          ]"
          @click.prevent="payByApple"
        >
           Pay
        </button>
        <button
          type="button"
          class="btn w-100 mb-3"
          :class="[
            { 'btn-main-light': this.mode === 'Light' },
            { 'btn-main-dark': this.mode === 'Dark' },
          ]"
          @click.prevent="payByGoogle"
        >
          <img
            src="@/assets/img/icons/func/GooglePay.svg"
            style="width: 1rem"
          />
          Pay
        </button>
        <button
          type="button"
          class="btn w-100 mb-3"
          :class="[
            { 'btn-main-light': this.mode === 'Light' },
            { 'btn-main-dark': this.mode === 'Dark' },
          ]"
          @click.prevent="submit"
        >
          Submit
        </button>
        <button
          type="button"
          class="btn btn-light w-100 mb-3"
          :class="[
            { 'btn-outline-main-light': this.mode === 'Light' },
            { 'btn-outline-main-dark': this.mode === 'Dark' },
          ]"
          @click.prevent="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CPlaceOrder",
  props: {
    mode: {
      type: String,
    },
  },
  data() {
    return {
      auth: this.$store.state.auth,
      info: {},
      address: {},
      payment: {},
    };
  },
  methods: {
    checkAuth() {
      if (this.auth === false) {
        this.$router.push("/dashboard/smartHome");
      }
    },
    loadInfo() {
      this.info = this.$store.state.account.info;
    },
    loadAddress() {
      this.address = this.$store.state.account.address;
    },
    loadPayment() {
      this.payment = this.$store.state.account.payment;
    },
    cancel() {
      this.$emit("cancelPlaceOrder");
    },
    getRandom() {
      return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    },
    submit() {
      let date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      let no = this.getRandom();
      let shippingNo = this.getRandom();
      let order = {
        uid: "",
        no: `${no}`,
        date: date,
        cart: this.$store.state.cart,
        receiver: {
          info: this.info,
          address: this.address,
        },
        payment: this.payment,
        shipping: {
          status: "Order received",
          no: `${shippingNo}`,
        },
      };
      this.$store.commit("placeAnOrder", order);
      this.$router.push("/dashboard/order");
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style></style>
