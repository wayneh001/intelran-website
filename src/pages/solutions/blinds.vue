<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { blinds } from "@/content/content";

export default {
  name: "blinds",
  components: [{ View }],
  data() {
    return {
      content: blinds,
    };
  },
  methods: {},
};
</script>

<style></style>
