<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { connection } from "@/content/content";

export default {
  name: "connection",
  components: [{ View }],
  data() {
    return {
      content: connection,
    };
  },
  methods: {},
};
</script>

<style></style>
