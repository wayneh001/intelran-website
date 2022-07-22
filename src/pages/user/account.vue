<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { account } from "@/content/content";

export default {
  name: "account",
  components: { pageView },
  data() {
    return {
      content: account,
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
