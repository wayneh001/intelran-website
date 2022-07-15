<template>
  <div>
    <div class="d-flex justify-content-center align-items-start">
      <div class="align-items-center">
        <router-link
          v-for="(e, i) in icons"
          :key="i"
          :to="/dashboard/`${e.route}`"
        >
          <svg viewBox="" width="48" height="48">
            <g :stroke="e.stroke" stroke-width="4" :fill="e.fill">
              <path :d="e.path" />
            </g>
          </svg>
          <label>{{ e.name }}</label>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { navIcons } from "@/content/icons";
export default {
  name: "CHeader",
  props: {
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
        if (navIcons[i].label === this.label) {
          this.icons.push(navIcons[i]);
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
