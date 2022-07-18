<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { light } from "@/content/content";

export default {
  name: "light",
  components: { pageView },
  data() {
    return {
      content: light,
    };
  },
  methods: {},
};
</script>

<style></style>
