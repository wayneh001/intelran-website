<template>
  <div>
    <div class="d-flex flex-nowrap overflow-auto justify-content-start align-items-center px-1 px-md-5">
      <router-link
        v-for="(e, i) in icons"
        :key="i"
        :to="/dashboard/ + e.route"
        class="col-3 col-md-1 m-2"
      >
        <div class="justify-content-center">
          <div class="text-center mb-2">
            <img :src="e.src" class="icon-22 mx-auto" />
          </div>
          <div
            class="text-header text-center"
            :class="[
              {
                'selected-light':
                  this.mode === 'Light' && e.name === headerIcon,
              },
              {
                'selected-dark': this.mode === 'Dark' && e.name === headerIcon,
              },
            ]"
          >
            {{ e.name }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { headerIcons } from "@/content/icons";
export default {
  name: "CHeader",
  props: {
    nav: {
      type: String,
      require: true,
    },
    headerIcon: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      mode: "",
      icons: [],
    };
  },
  methods: {
    filterIcons() {
      for (let i in headerIcons) {
        if (headerIcons[i].nav === this.nav) {
          let icon = {
            nav: headerIcons[i].nav,
            name: headerIcons[i].name,
            route: headerIcons[i].route,
          };
          let status = "";
          headerIcons[i].name === this.headerIcon
            ? (status = "active")
            : (status = "inactive");
          let str = `${status}${this.mode}`;
          icon.src = require(`@/assets/img/icons/header/${headerIcons[i].url[str]}`);
          this.icons.push(icon);
        }
      }
    },
  },
  created() {
    this.mode = this.$store.state.mode;
    this.filterIcons();
  },
};
</script>

<style></style>
