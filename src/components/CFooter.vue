<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center align-items-between">
        <!-- <div v-for="(e, i) in socialApps" :key="i">
          <svg viewBox="" width="48" height="48">
            <g :stroke="e.stroke" stroke-width="4" :fill="e.fill">
              <path :d="e.path" />
            </g>
          </svg>
        </div> -->
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
};
</script>

<style></style>
