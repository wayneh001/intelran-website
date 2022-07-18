<template>
  <div>
    <pageView :content="content" />
  </div>
</template>

<script>
import pageView from "@/containers/pageView";
import { account } from "@/content/content";

export default {
  name: "account",
  components: { pageView },
  data() {
    return {
      content: account,
    };
  },
  methods: {},
};
</script>

<style></style>
