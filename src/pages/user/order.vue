<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { order } from "@/content/content";

export default {
  name: "order",
  components: [{ View }],
  data() {
    return {
      content: order,
    };
  },
  methods: {},
};
</script>

<style></style>
