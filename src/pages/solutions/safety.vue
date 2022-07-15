<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { safety } from "@/content/content";

export default {
  name: "safety",
  components: [{ View }],
  data() {
    return {
      content: safety,
    };
  },
  methods: {},
};
</script>

<style></style>
