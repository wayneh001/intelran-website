<template>
  <div>
    <Form @submit="update">
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
              >
                <Field
                    v-model="account.info.name"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validate"
                    class="text-end"
                    name="name"
                    placeholder="Name"
                    type="text"/>
                <ErrorMessage class="errorMessage" name="name"
                />
              </label>
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
              >
                <Field
                    v-model="account.info.password"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validate"
                    class="text-end"
                    name="password"
                    placeholder="Password"
                    type="password"/>
                <ErrorMessage class="errorMessage" name="password"
                />
              </label>
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
              >
                <Field
                    v-model="account.info.email"
                    :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                    :rules="validateEmail"
                    class="text-end"
                    name="email"
                    placeholder="Email"
                    type="email"/>
                <ErrorMessage class="errorMessage" name="email"
                />
              </label>
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
              >
                <Field
                    v-model="account.info.contact"
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
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-4 mb-md-3">
            <h5
                :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
                class="ms-md-2"
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
              >
                <Field
                    v-model="account.address.line1"
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
                  v-model="account.address.line2"
                  :class="[
                    { 'input-light': this.mode === 'Light' },
                    { 'input-dark': this.mode === 'Dark' },
                  ]"
                  class="text-end"
                  placeholder="Line 2"
                  type="text"
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
              >
                <Field
                    v-model="account.address.zipCode"
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
              >
                <Field
                    v-model="account.address.state"
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
              >
                <Field
                    v-model="account.payment.card"
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
              >
                <Field
                    v-model="account.payment.expiry"
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
              >
                <Field
                    v-model="account.payment.cvc"
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
        <div class="col-12">
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="button"
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
import {ErrorMessage, Field, Form} from "vee-validate";
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
    return {
      validate: schema.validate,
      validateEmail: schema.validateEmail,
      validateContact: schema.validateContact,
      validateZipCode: schema.validateZipCode,
      validateCard: schema.validateCard,
      validateExpiry: schema.validateExpiry,
      validateCvc: schema.validateCvc,
    };
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
