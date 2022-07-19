<template>
  <div>
    <div class="d-flex justify-content-start align-items-center px-5">
      <router-link
        v-for="(e, i) in icons"
        :key="i"
        :to="/dashboard/ + e.route"
        class="m-2"
        style="width: 5rem;"
      >
        <div class="justify-content-center">
          <div class="text-center mb-2">
            <img :src="e.src" class="mx-auto" style="width: 22px" />
          </div>
          <div class="text-header text-center" :class="{ selected: e.name === label }">
            {{ e.name }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { navIcons } from "@/content/icons";
export default {
  name: "CHeader",
  props: {
    nav: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
    mode: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      icons: [],
    };
  },
  methods: {
    filterIcons() {
      for (let i in navIcons) {
        if (navIcons[i].nav === this.nav) {
          let icon = {
            nav: navIcons[i].nav,
            name: navIcons[i].name,
            route: navIcons[i].route,
          };
          let status = "";
          navIcons[i].name === this.label
            ? (status = "active")
            : (status = "inactive");
          let str = `${status}${this.mode}`;
          console.log(str, navIcons[i]);
          icon.src = require(`@/assets/img/icons/header/${navIcons[i].url[str]}`);
          this.icons.push(icon);
        }
      }
    },
  },
  created() {
    this.filterIcons();
  },
};
</script>

<style></style>
