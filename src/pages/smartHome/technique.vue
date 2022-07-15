<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { technique } from "@/content/content";

export default {
  name: "technique",
  components: [{ View }],
  data() {
    return {
      content: technique,
    };
  },
  methods: {},
};
</script>

<style></style>
