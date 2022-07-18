<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { about } from "@/content/content";

export default {
  name: "about",
  components: { pageView },
  data() {
    return {
      content: about,
    };
  },
  methods: {},
};
</script>

<style></style>
