<template>
  <div>
    <Form @submit="submit">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-4 mb-md-3">
            <h5
                :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
                class="ms-md-2"
            >
              Info
            </h5>
            <button
                :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
                class="btn w-100 mb-2 mb-md-3"
                type="button"
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
              >
                <Field
                    v-model="info.name"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validate"
                    class="text-end"
                    name="name"
                    placeholder="Name"
                    type="text"
                />
                <ErrorMessage class="errorMessage" name="name"/>
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
              >
                <Field
                    v-model="info.contact"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validateContact"
                    class="text-end"
                    name="contact"
                    placeholder="Contact"
                    type="text"/>
                <ErrorMessage class="errorMessage" name="contact"
                />
              </label>
            </div>
            <h5
                :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
                class="ms-md-2"
            >
              Address
            </h5>
            <button
                :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
                class="btn w-100 mb-2 mb-md-3"
                type="button"
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
                >
                  <Field
                      v-model="address.line1"
                      :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                      :rules="validate"
                      class="text-end"
                      name="line1"
                      placeholder="Line 1"
                      type="text"/>
                  <ErrorMessage class="errorMessage" name="line1"
                  />
                </label>
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
                  v-model="address.line2"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  class="text-end"
                  name="line2"
                  placeholder="Line 2"
                  type="text"
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
              >
                <Field
                    v-model="address.zipCode"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validateZipCode"
                    class="text-end"
                    maxLength="5"
                    name="zipCode"
                    placeholder="Zip Code"
                    type="text"/>
                <ErrorMessage class="errorMessage" name="zipCode"
                />
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
              >State</span
              >
                <Field
                    v-model="address.state"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validate"
                    class="text-end"
                    name="state"
                    placeholder="State"
                    type="text"/>
                <ErrorMessage class="errorMessage" name="state"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-2 mb-md-3">
            <div class="mb-4 mb-md-3">
              <h5
                  :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                  class="ms-md-2"
              >
                Payment
              </h5>
              <button
                  :class="[
                  { 'btn-main-light': this.mode === 'Light' },
                  { 'btn-main-dark': this.mode === 'Dark' },
                ]"
                  class="btn w-100 mb-2 mb-md-3"
                  type="button"
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
                >
                  <Field
                      v-model="payment.card"
                      :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                      :rules="validateCard"
                      class="text-end"
                      name="card"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      type="text"/>
                  <ErrorMessage class="errorMessage" name="card"
                  />
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
                >Expiry</span
                >
                  <Field
                      v-model="payment.expiry"
                      :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                      :rules="validateExpiry"
                      class="text-end"
                      name="expiry"
                      placeholder="MM/YYYY"
                      type="text"/>
                  <ErrorMessage class="errorMessage" name="expiry"
                  />
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
                >CVC</span
                >
                  <Field
                      v-model="payment.cvc"
                      :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                      :rules="validateCvc"
                      class="text-end"
                      maxlength="3"
                      name="cvc"
                      placeholder="XXX"
                      type="text"/>
                  <ErrorMessage class="errorMessage" name="cvc"
                  />
                </label>
              </div>
            </div>
          </div>
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="button"
              @click.prevent="payByApple"
          >
             Pay
          </button>
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="button"
              @click.prevent="payByGoogle"
          >
            <img
                src="@/assets/img/icons/func/GooglePay.svg"
                style="width: 1rem"
            />
            Pay
          </button>
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="submit"
          >
            Submit
          </button>
          <button
              :class="[
              { 'btn-outline-main-light': this.mode === 'Light' },
              { 'btn-outline-main-dark': this.mode === 'Dark' },
            ]"
              class="btn btn-light w-100 mb-2 mb-md-3"
              type="button"
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
import {ErrorMessage, Field, Form} from "vee-validate";
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
