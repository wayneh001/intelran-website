<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { cart } from "@/content/content";

export default {
  name: "cart",
  components: { pageView },
  data() {
    return {
      content: cart,
    };
  },
  methods: {},
};
</script>

<style></style>
