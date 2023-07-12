<template>
  <div>
    <pageView :key="componentKey" :content="content" @updateMode="updateMode"/>
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import {cart} from "@/content/content";

export default {
  name: "cart",
  components: {pageView},
  data() {
    return {
      content: cart,
      componentKey: 0,
    };
  },
  methods: {
    updateMode() {
      this.componentKey += 1;
    }
  },
};
</script>

<style></style>
