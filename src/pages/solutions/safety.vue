<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { safety } from "@/content/content";

export default {
  name: "safety",
  components: { pageView },
  data() {
    return {
      content: safety,
    };
  },
  methods: {},
};
</script>

<style></style>
