<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { account } from "@/content/content";

export default {
  name: "account",
  components: [{ View }],
  data() {
    return {
      content: account,
    };
  },
  methods: {},
};
</script>

<style></style>
