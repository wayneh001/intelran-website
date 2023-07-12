<template>
  <div>
    <pageView :key="componentKey" :content="content" @updateMode="updateMode"/>
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import {order} from "@/content/content";

export default {
  name: "order",
  components: {pageView},
  data() {
    return {
      content: order,
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
