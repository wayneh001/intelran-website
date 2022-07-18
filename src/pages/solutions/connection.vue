<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { connection } from "@/content/content";

export default {
  name: "connection",
  components: { pageView },
  data() {
    return {
      content: connection,
    };
  },
  methods: {},
};
</script>

<style></style>
