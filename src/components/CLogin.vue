<template>
  <div>
    <div class="container mt-md-5">
      <div class="col-12 col-md-6 mx-auto">
        <div class="mb-4 mb-md-3">
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
            >Username</span
            ><input
                v-model="user.username"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                class="text-end"
                placeholder="Username"
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
            >Password</span
            ><input
                v-model="user.password"
                :class="[
                  { 'input-light': this.mode === 'Light' },
                  { 'input-dark': this.mode === 'Dark' },
                ]"
                class="text-end"
                placeholder="Password"
                type="password"
            /></label>
          </div>
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="button"
              @click.prevent="login"
          >
            Login
          </button>
          <button
              :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
              class="btn w-100 mb-2 mb-md-3"
              type="button"
              @click.prevent="registrate"
          >
            Registration
          </button>
        </div>
      </div>
    </div>
    <CAlert ref="alert" :msg="msg"/>
  </div>
</template>

<script>
import CAlert from "@/components/CAlert";

export default {
  name: "CLogin",
  components: {
    CAlert,
  },
  props: {
    mode: {
      type: String,
    },
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      msg: "Invalid username or password, please try again later.",
    };
  },
  methods: {
    login() {
      if (this.user.username === "admin" && this.user.password === "admin") {
        this.$store.dispatch("login");
        this.$emit("reload");
      } else {
        this.$refs.alert.showModal();
      }
    },
  },
};
</script>
