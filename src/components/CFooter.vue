<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">
        <div v-for="(e, i) in socialApps" :key="i" class="mx-3 my-5">
          <img :src="e.src" class="d-inline-block" style="cursor: pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { socialApps } from "@/content/icons";
export default {
  name: "CFooter",
  data() {
    return {
      socialApps: socialApps,
    };
  },
  methods: {
    getIcons() {
      for (let i in this.socialApps) {
        this.socialApps[
          i
        ].src = require(`@/assets/img/icons/social/${this.socialApps[i].url}`);
      }
    },
  },
  created() {
    this.getIcons();
  },
};
</script>

<style></style>
