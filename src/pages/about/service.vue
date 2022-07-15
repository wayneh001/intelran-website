<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { service } from "@/content/content";

export default {
  name: "service",
  components: [{ View }],
  data() {
    return {
      content: service,
    };
  },
  methods: {},
};
</script>

<style></style>
