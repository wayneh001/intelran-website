<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { hub } from "@/content/content";

export default {
  name: "hub",
  components: { pageView },
  data() {
    return {
      content: hub,
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
