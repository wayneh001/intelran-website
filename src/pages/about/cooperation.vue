<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
import { cooperation } from "@/content/content";

export default {
  name: "cooperation",
  components: [{ View }],
  data() {
    return {
      content: cooperation,
    };
  },
  methods: {},
};
</script>

<style></style>
