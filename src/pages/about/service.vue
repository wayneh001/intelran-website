<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { service } from "@/content/content";

export default {
  name: "service",
  components: { pageView },
  data() {
    return {
      content: service,
    };
  },
  methods: {},
};
</script>

<style></style>
