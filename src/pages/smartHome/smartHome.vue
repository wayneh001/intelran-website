<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { smartHome } from "@/content/content";

export default {
  name: "smartHome",
  components: { pageView },
  data() {
    return {
      content: smartHome,
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
