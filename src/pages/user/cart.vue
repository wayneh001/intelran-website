<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { cart } from "@/content/content";

export default {
  name: "cart",
  components: [{ View }],
  data() {
    return {
      content: cart,
    };
  },
  methods: {},
};
</script>

<style></style>
