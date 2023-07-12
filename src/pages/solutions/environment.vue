<template>
  <div>
    <pageView :key="componentKey" :content="content" @updateMode="updateMode"/>
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import {environment} from "@/content/content";

export default {
  name: "environment",
  components: {pageView},
  data() {
    return {
      content: environment,
      componentKey: 0,
    };
  },
  methods: {
    updateMode() {
      this.componentKey += 1;
    }
  },
};
</script>

<style></style>
