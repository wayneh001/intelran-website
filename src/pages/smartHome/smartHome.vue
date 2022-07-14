<template>
  <div>
    <View :content="content" />
  </div>
</template>

<script>
import View from "@/containers/view";
export default {
  name: "smartHome",
  components: [
    { View },
  ],
  data() {
    return {
        content: ""
    }
  },
  methods: {},
};
</script>

<style></style>