<template>
  <div>
    <pageView :key="componentKey" :content="content" @updateMode="updateMode"/>
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import {technique} from "@/content/content";

export default {
  name: "technique",
  components: {pageView},
  data() {
    return {
      content: technique,
      componentKey: 0,
    };
  },
  methods: {
    updateMode() {
      this.componentKey += 1;
    },
  },
};
</script>

<style></style>
