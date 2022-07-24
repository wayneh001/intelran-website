<template>
  <div>
    <nav
      class="navbar navbar-expand-lg px-5"
      :class="[
        { 'custom-bg-light': this.mode === 'Light' },
        { 'custom-bg-black': this.mode === 'Dark' },
      ]"
    >
      <div class="container-fluid">
        <label
          class="navbar-brand fw-bolder"
          :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
          >IntelRAN</label
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link fw-bolder"
                :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  { 'active-light': this.mode === 'Light' && navActive === 0 },
                  { 'active-dark': this.mode === 'Dark' && navActive === 0 },
                ]"
                to="/dashboard/smartHome"
                >Smart Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fw-bolder"
                :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  { 'active-light': this.mode === 'Light' && navActive === 1 },
                  { 'active-dark': this.mode === 'Dark' && navActive === 1 },
                ]"
                to="/dashboard/hub"
                >Solutions</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fw-bolder"
                :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  { 'active-light': this.mode === 'Light' && navActive === 2 },
                  { 'active-dark': this.mode === 'Dark' && navActive === 2 },
                ]"
                to="/dashboard/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
        <div class="d-flex jutify-content-center align-items-center">
          <img
            :src="modeIconSrc"
            class="icon-22 mx-2 image-cursor"
            @click.prevent="changeMode"
          />
          <div class="nav-item dropdown">
            <a
              id="dropdown-toggle"
              class="nav-link"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><img :src="userIconSrc" class="icon-22 mx-2 image-cursor" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-left"
              :class="[
                { 'custom-bg-light': this.mode === 'Light' },
                { 'custom-bg-dark': this.mode === 'Dark' },
              ]"
            >
              <li>
                <router-link
                  class="dropdown-item"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  to="/dashboard/account"
                  >Account</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  to="/dashboard/cart"
                  >Cart</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  to="/dashboard/order"
                  >Order</router-link
                >
              </li>
              <li>
                <div
                  class="px-2"
                  :class="[
                    { 'hr-light': this.mode === 'Light' },
                    { 'hr-dark': this.mode === 'Dark' },
                  ]"
                >
                  <hr class="dropdown-divider" />
                </div>
              </li>
              <li>
                <span
                  class="dropdown-item pointer"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  style="cursor: pointer"
                  @click.prevent="logout"
                  >Log out</span
                >
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { headerIcons, funcIcons } from "@/content/icons";
export default {
  name: "CNav",
  props: {
    nav: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      modeIconSrc: "",
      userIconSrc: "",
      navActive: 0,
    };
  },
  methods: {
    getActive() {
      switch (this.nav) {
        case "Smart Home":
          this.navActive = 0;
          break;
        case "Solutions":
          this.navActive = 1;
          break;
        case "About":
          this.navActive = 2;
          break;
        case "User":
          this.navActive = 3;
          break;
      }
    },
    getRightIcons() {
      if (this.mode === "Light") {
        this.modeIconSrc = require(`@/assets/img/icons/func/${funcIcons[6].url.dark}`);
        this.userIconSrc = require(`@/assets/img/icons/header/${headerIcons[11].url.activeLight}`);
      } else {
        this.modeIconSrc = require(`@/assets/img/icons/func/${funcIcons[6].url.light}`);
        this.userIconSrc = require(`@/assets/img/icons/header/${headerIcons[11].url.activeDark}`);
      }
    },
    changeMode() {
      this.mode === "Light" ? (this.mode = "Dark") : (this.mode = "Light");
      this.$store.commit("changeMode", this.mode);
      this.$emit("updateMode");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/dashboard/smartHome");
    },
  },
  created() {
    this.mode = this.$store.state.mode;
    this.getActive();
    this.getRightIcons();
  },
};
</script>

<style>
.active-light {
  color: #1a56a2;
}

.active-dark {
  color: #fff;
}

.image-cursor {
  cursor: pointer;
}
</style>
