<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { hub } from "@/content/content";

export default {
  name: "hub",
  components: { pageView },
  data() {
    return {
      content: hub,
    };
  },
  methods: {},
};
</script>

<style></style>
