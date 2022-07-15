<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 10"
  >
    <CToast v-for="(e, i) in messages" :key="i" :msg="e" />
  </div>
</template>

<script>
import CToast from "@/components/CToast";

export default {
  name: "CToastList",
  components: { CToast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ["emitter"],
  mounted() {
    this.emitter.on("push-message", (message) => {
      const { style = "danger", title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
