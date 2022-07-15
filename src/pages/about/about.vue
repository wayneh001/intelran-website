<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { about } from "@/content/content";

export default {
  name: "about",
  components: [{ View }],
  data() {
    return {
      content: about,
    };
  },
  methods: {},
};
</script>

<style></style>
