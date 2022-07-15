<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { environment } from "@/content/content";

export default {
  name: "environment",
  components: [{ View }],
  data() {
    return {
      content: environment,
    };
  },
  methods: {},
};
</script>

<style></style>
