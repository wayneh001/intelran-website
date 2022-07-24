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
          <div class="mb-3 w-100">
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
                v-model="account.info.name"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
              ><input
                type="password"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Password"
                v-model="account.info.password"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
              ><input
                type="email"
                class="text-end"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                placeholder="Email"
                v-model="account.info.email"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
                v-model="account.info.contact"
            /></label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="mb-5">
          <h5
            class="ms-2"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Address
          </h5>
          <div class="mb-3 w-100">
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
                v-model="account.address.line1"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
          <div class="mb-3 w-100">
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
                v-model="account.address.zipCode"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
                v-model="account.address.state"
            /></label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
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
          <div class="mb-3 w-100">
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
                v-model="account.payment.card"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
                v-model="account.payment.expire"
            /></label>
          </div>
          <div class="mb-3 w-100">
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
                v-model="account.payment.cvc"
            /></label>
          </div>
        </div>
      </div>
      <div class="col-12">
        <button
          type="button"
          class="btn w-100 mb-3"
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
  </div>
</template>

<script>
export default {
  name: "CAccount",
  props: {
    mode: {
      type: String,
    },
  },
  data() {
    return {
      auth: this.$store.state.auth,
      account: this.$store.state.account,
    };
  },
  methods: {
    checkAuth() {
      if (this.auth === false) {
        this.$router.push("/dashboard/smartHome");
      }
    },
    update() {
      this.$store.commit('editAccount', this.account);
    }
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style></style>
