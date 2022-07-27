<template>
  <div>
    <Form @submit="update">
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
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.info.name"
                  :rules="validate" />
                <ErrorMessage class="errorMessage" name="name"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  >Password</span
                ><Field
                  name="password"
                  type="password"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Password"
                  v-model="account.info.password"
                  :rules="validate" />
                <ErrorMessage class="errorMessage" name="password"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  >Email</span
                ><Field
                  name="email"
                  type="email"
                  class="text-end"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  placeholder="Email"
                  v-model="account.info.email"
                  :rules="validateEmail" />
                <ErrorMessage class="errorMessage" name="email"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.info.contact"
                  :rules="validateContact" />
                <ErrorMessage class="errorMessage" name="contact"
              /></label>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-4 mb-md-3">
            <h5
              class="ms-md-2"
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              Address
            </h5>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.address.line1"
                  :rules="validate" />
                <ErrorMessage class="errorMessage" name="line1"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.address.line2"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.address.zipCode"
                  :rules="validateZipCode" />
                <ErrorMessage class="errorMessage" name="zipCode"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.address.state"
                  :rules="validate" />
                <ErrorMessage class="errorMessage" name="state"
              /></label>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5">
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
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.payment.card"
                  :rules="validateCard" />
                <ErrorMessage class="errorMessage" name="card"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.payment.expiry"
                  :rules="validateExpiry" />
                <ErrorMessage class="errorMessage" name="expiry"
              /></label>
            </div>
            <div class="mb-2 mb-md-3 w-100">
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
                  v-model="account.payment.cvc"
                  :rules="validateCvc" />
                <ErrorMessage class="errorMessage" name="cvc"
                /></label>
            </div>
          </div>
        </div>
        <div class="col-12">
          <button
            type="button"
            class="btn w-100 mb-2 mb-md-3"
            :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
            @click.prevent="update"
          >
            Update
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import schema from "@/assets/js/validateSchema.js";
export default {
  name: "CAccount",
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
  data() {
    return {
      auth: this.$store.state.auth,
      account: this.$store.state.account,
    };
  },
  setup() {
    const mySchema = {
      validate: schema.validate,
      validateEmail: schema.validateEmail,
      validateContact: schema.validateContact,
      validateZipCode: schema.validateZipCode,
      validateCard: schema.validateCard,
      validateExpiry: schema.validateExpiry,
      validateCvc: schema.validateCvc,
    };
    return mySchema;
  },
  methods: {
    checkAuth() {
      if (this.auth === false) {
        this.$router.push("/dashboard/smartHome");
      }
    },
    update() {
      this.$store.commit("editAccount", this.account);
      this.$emit("showToast", {
        title: "Edit account",
        content: "Account is successfully updated.",
      });
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style></style>
