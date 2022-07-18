<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { blinds } from "@/content/content";

export default {
  name: "blinds",
  components: { pageView },
  data() {
    return {
      content: blinds,
    };
  },
  methods: {},
};
</script>

<style></style>
