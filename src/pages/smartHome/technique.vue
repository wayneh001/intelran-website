<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { technique } from "@/content/content";

export default {
  name: "technique",
  components: { pageView },
  data() {
    return {
      content: technique,
    };
  },
  methods: {},
};
</script>

<style></style>
