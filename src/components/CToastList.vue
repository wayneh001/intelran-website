<template>
  <div
      class="toast-container position-absolute pe-3 top-0 end-0"
      style="z-index: 10"
  >
    <CToast v-for="(e, i) in messages" :key="i" :msg="e"/>
  </div>
</template>

<script>
import CToast from "@/components/CToast";

export default {
  name: "CToastList",
  components: {CToast},
  props: {
    messages: {
      type: Array,
      require: true,
    }
  },
  created() {
    console.log('created');
  }
};
</script>
