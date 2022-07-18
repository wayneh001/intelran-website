<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { smartHome } from "@/content/content";

export default {
  name: "smartHome",
  components: { pageView },
  data() {
    return {
      content: smartHome,
    };
  },
  methods: {},
};
</script>

<style></style>
