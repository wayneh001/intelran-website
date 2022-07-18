<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { environment } from "@/content/content";

export default {
  name: "environment",
  components: { pageView },
  data() {
    return {
      content: environment,
    };
  },
  methods: {},
};
</script>

<style></style>
