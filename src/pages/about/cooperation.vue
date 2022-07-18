<template>
  <div>
    <pageView :content="content" />
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
    };
  },
  methods: {},
};
</script>

<style></style>
