<template>
  <div>
    <pageView :content="content" @updateMode="updateMode" :key="componentKey" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { cooperation } from "@/content/content";

export default {
  name: "cooperation",
  components: { pageView },
  data() {
    return {
      content: cooperation,
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
