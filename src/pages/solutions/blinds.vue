<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { blinds } from "@/content/content";

export default {
  name: "blinds",
  components: { pageView },
  componentKey: 0,
  data() {
    return {
      content: blinds,
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
