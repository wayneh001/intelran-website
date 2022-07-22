<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { about } from "@/content/content";

export default {
  name: "about",
  components: { pageView },
  data() {
    return {
      content: about,
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
