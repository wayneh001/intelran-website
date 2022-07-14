<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { smartHome } from "@/content/content";

export default {
  name: "smartHome",
  components: [{ View }],
  data() {
    return {
      content: smartHome,
    };
  },
  methods: {},
};
</script>

<style></style>
