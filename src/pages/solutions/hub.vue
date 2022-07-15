<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { hub } from "@/content/content";

export default {
  name: "hub",
  components: [{ View }],
  data() {
    return {
      content: hub,
    };
  },
  methods: {},
};
</script>

<style></style>
