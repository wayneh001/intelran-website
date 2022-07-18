<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { order } from "@/content/content";

export default {
  name: "order",
  components: { pageView },
  data() {
    return {
      content: order,
    };
  },
  methods: {},
};
</script>

<style></style>
