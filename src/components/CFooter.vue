<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">
        <div v-for="(e, i) in socialApps" :key="i" class="mx-2 my-4 mx-md-3 my-md-5">
          <img :src="e.src" alt="" class="d-inline-block" style="cursor: pointer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {socialApps} from "@/content/icons";

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
