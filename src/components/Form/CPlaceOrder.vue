<template>
  <div>
    <Form @submit="submit">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-4 mb-md-3">
            <h5
              class="ms-md-2"
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              Info
            </h5>
            <button
              type="button"
              class="btn w-100 mb-2 mb-md-3"
              :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
              @click.prevent="loadInfo"
            >
              Load My Info
            </button>
            <div class="w-100 mb-2 mb-md-3">
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
                ><Field
                  name="name"
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Name"
                  v-model="info.name"
                  :rules="validate"
                />
                <ErrorMessage class="errorMessage" name="name" />
              </label>
            </div>
            <div class="w-100 mb-2 mb-md-3">
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
                ><Field
                  name="contact"
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Contact"
                  v-model="info.contact"
                  :rules="validateContact" />
                <ErrorMessage class="errorMessage" name="contact"
              /></label>
            </div>
            <h5
              class="ms-md-2"
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              Address
            </h5>
            <button
              type="button"
              class="btn w-100 mb-2 mb-md-3"
              :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
              @click.prevent="loadAddress"
            >
              Load My Address
            </button>
            <div class="w-100 mb-2 mb-md-3">
              <div class="w-100 mb-2 mb-md-3">
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
                  ><Field
                    name="line1"
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    placeholder="Line 1"
                    v-model="address.line1"
                    :rules="validate" />
                  <ErrorMessage class="errorMessage" name="line1"
                /></label>
              </div>
            </div>
            <div class="w-100 mb-2 mb-md-3">
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
                  name="line2"
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
            <div class="w-100 mb-2 mb-md-3">
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
                ><Field
                  name="zipCode"
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Zip Code"
                  maxLength="5"
                  v-model="address.zipCode"
                  :rules="validateZipCode" />
                <ErrorMessage class="errorMessage" name="zipCode"
              /></label>
            </div>
            <div class="w-100 mb-2 mb-md-3">
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
                ><Field
                  name="state"
                  type="text"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="State"
                  v-model="address.state"
                  :rules="validate" />
                <ErrorMessage class="errorMessage" name="state"
              /></label>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-2 mb-md-3">
            <div class="mb-4 mb-md-3">
              <h5
                class="ms-md-2"
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
              >
                Payment
              </h5>
              <button
                type="button"
                class="btn w-100 mb-2 mb-md-3"
                :class="[
                  { 'btn-main-light': this.mode === 'Light' },
                  { 'btn-main-dark': this.mode === 'Dark' },
                ]"
                @click.prevent="loadPayment"
              >
                Load My Payment
              </button>
              <div class="w-100 mb-2 mb-md-3">
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
                  ><Field
                    name="card"
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    v-model="payment.card"
                    :rules="validateCard" />
                  <ErrorMessage class="errorMessage" name="card"
                /></label>
              </div>
              <div class="w-100 mb-2 mb-md-3">
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
                    >Expiry</span
                  ><Field
                    name="expiry"
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    placeholder="MM/YYYY"
                    v-model="payment.expiry"
                    :rules="validateExpiry" />
                  <ErrorMessage class="errorMessage" name="expiry"
                /></label>
              </div>
              <div class="w-100 mb-2 mb-md-3">
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
                  ><Field
                    name="cvc"
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    placeholder="XXX"
                    maxlength="3"
                    v-model="payment.cvc"
                    :rules="validateCvc" />
                  <ErrorMessage class="errorMessage" name="cvc"
                /></label>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn w-100 mb-2 mb-md-3"
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
            class="btn w-100 mb-2 mb-md-3"
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
            type="submit"
            class="btn w-100 mb-2 mb-md-3"
            :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
          >
            Submit
          </button>
          <button
            type="button"
            class="btn btn-light w-100 mb-2 mb-md-3"
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
    </Form>
  </div>
</template>

<script>
import moment from "moment";
import { Form, Field, ErrorMessage } from "vee-validate";
import schema from "@/assets/js/validateSchema.js";
export default {
  name: "CPlaceOrder",
  props: {
    mode: {
      type: String,
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const mySchema = {
      validate: schema.validate,
      validateContact: schema.validateContact,
      validateZipCode: schema.validateZipCode,
      validateCard: schema.validateCard,
      validateExpiry: schema.validateExpiry,
      validateCvc: schema.validateCvc,
    };
    return mySchema;
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
        cart: {...this.$store.state.cart},
        receiver: {
          info: {...this.info},
          address: {...this.address},
        },
        payment: {...this.payment},
        shipping: {
          status: "Order received",
          no: `${shippingNo}`,
        },
      };
      this.$store.commit("placeAnOrder", order);
      this.$emit("showToast", {
        title: "Place order",
        content: "We have successfully reveived your order.",
      });
      this.$emit("finishedPlaceOrder");
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style>
.errorMessage {
  color: #ff0000;
}
</style>
