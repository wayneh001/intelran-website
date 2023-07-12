<template>
  <div>
    <nav
        :class="[
        { 'custom-bg-light': this.mode === 'Light' },
        { 'custom-bg-black': this.mode === 'Dark' },
      ]"
        class="navbar navbar-expand-lg px-1 px-md-5 pt-3 pt-md-5"
    >
      <div class="container d-flex align-items-center">
        <label
            :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
            class="navbar-brand fw-bolder d-none d-md-inline-block"
        >IntelRAN</label
        >
        <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler mt-2"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
        >
          <span
              :class="[
              { 'navbar-toggler-icon-light': this.mode === 'Light' },
              { 'navbar-toggler-icon-dark': this.mode === 'Dark' },
            ]"
              class="navbar-toggler-icon"
          ></span>
        </button>
        <div class="d-flex d-md-none justify-content-center align-items-center">
          <div class="nav-item">
            <img
                :src="modeIconSrc"
                alt=""
                class="icon-22 mx-3 mx-md-5 image-cursor"
                @click.prevent="changeMode"/>
          </div>
          <div class="nav-item dropdown">
            <a
                id="dropdown-toggle"
                aria-expanded="false"
                class="nav-link p-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
            ><img :src="userIconSrc" alt="" class="icon-22 mx-md-2 image-cursor"/>
            </a>
            <div
                :class="[
                { 'custom-bg-light': this.mode === 'Light' },
                { 'custom-bg-dark': this.mode === 'Dark' },
              ]"
                class="dropdown-menu dropdown-menu-end dropdown-menu-md-start"
            >
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/account"
                >Account
                </router-link
                >
              </li>
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/cart"
                >Cart
                </router-link
                >
              </li>
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/order"
                >Order
                </router-link
                >
              </li>
              <li>
                <div
                    :class="[
                    { 'hr-light': this.mode === 'Light' },
                    { 'hr-dark': this.mode === 'Dark' },
                  ]"
                    class="px-md-2"
                >
                  <hr class="dropdown-divider"/>
                </div>
              </li>
              <li>
                <span
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item pointer"
                    style="cursor: pointer"
                    @click.prevent="logout"
                >Log out</span
                >
              </li>
            </div>
          </div>
        </div>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                  :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  {
                    'active-light': this.mode === 'Light' && navActive === 0,
                  },
                  { 'active-dark': this.mode === 'Dark' && navActive === 0 },
                ]"
                  class="nav-link fw-bolder"
                  to="/dashboard/smartHome"
              >Smart Home
              </router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                  :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  {
                    'active-light': this.mode === 'Light' && navActive === 1,
                  },
                  { 'active-dark': this.mode === 'Dark' && navActive === 1 },
                ]"
                  class="nav-link fw-bolder"
                  to="/dashboard/hub"
              >Solutions
              </router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                  :class="[
                  { 'text-nav-light': this.mode === 'Light' },
                  { 'text-nav-dark': this.mode === 'Dark' },
                  {
                    'active-light': this.mode === 'Light' && navActive === 2,
                  },
                  { 'active-dark': this.mode === 'Dark' && navActive === 2 },
                ]"
                  class="nav-link fw-bolder"
                  to="/dashboard/about"
              >About
              </router-link
              >
            </li>
          </ul>
        </div>
        <div class="d-none d-md-flex justify-content-center align-items-center">
          <img
              :src="modeIconSrc"
              alt=""
              class="icon-22 mx-2 image-cursor"
              @click.prevent="changeMode"/>
          <div class="nav-item dropdown">
            <a
                id="dropdown-toggle"
                aria-expanded="false"
                class="nav-link p-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
            ><img :src="userIconSrc" alt="" class="icon-22 mx-md-2 image-cursor"/>
            </a>
            <div
                :class="[
                { 'custom-bg-light': this.mode === 'Light' },
                { 'custom-bg-dark': this.mode === 'Dark' },
              ]"
                class="dropdown-menu dropdown-menu-left"
            >
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/account"
                >Account
                </router-link
                >
              </li>
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/cart"
                >Cart
                </router-link
                >
              </li>
              <li>
                <router-link
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item"
                    to="/dashboard/order"
                >Order
                </router-link
                >
              </li>
              <li>
                <div
                    :class="[
                    { 'hr-light': this.mode === 'Light' },
                    { 'hr-dark': this.mode === 'Dark' },
                  ]"
                    class="px-md-2"
                >
                  <hr class="dropdown-divider"/>
                </div>
              </li>
              <li>
                <span
                    :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                    class="dropdown-item pointer"
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
import {funcIcons, headerIcons} from "@/content/icons";

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
.navbar-toggler {
  padding: 0;
}

.navbar-toggler-icon-light {
  width: 18px;
  background-image: url("@/assets/img/icons/header/Hambergur@Light.svg");
}

.navbar-toggler-icon-dark {
  width: 18px;
  background-image: url("@/assets/img/icons/header/Hambergur@Dark.svg");
}

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
