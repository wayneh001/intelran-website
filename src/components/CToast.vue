<template>
  <div>
    <div
        :class="[
        { 'd-flex': this.screenSize < 768 },
        { 'justify-content-center': this.screenSize < 768 },
      ]"
    >
      <div
          :class="[
          { 'pe-3': this.screenSize >= 768 },
          { 'end-0': this.screenSize >= 768 },
        ]"
          class="toast-container position-absolute top-0"
          style="padding-top: 0.5rem; z-index: 10"
      >
        <div
            ref="toast"
            aria-atomic="true"
            aria-live="assertive"
            class="toast"
            role="alert"
        >
          <div class="toast-header">
            <span class="p-2 rounded me-md-2 d-inline-block bg-success"></span>
            <strong class="me-auto">{{ msg.title }}</strong>
            <button
                aria-label="Close"
                class="btn-close"
                data-bs-dismiss="toast"
                type="button"
            ></button>
          </div>
          <div v-if="msg.content" class="toast-body">
            {{ msg.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Toast from "bootstrap/js/dist/toast";

export default {
  name: "CToast",
  props: {
    msg: {
      Object,
      require: true,
    },
  },
  data() {
    return {
      screenSize: this.$store.state.screenSize,
    };
  },
  methods: {
    showToast() {
      const toastEl = this.$refs.toast;
      const toast = new Toast(toastEl, {
        delay: 6000,
      });
      toast.show();
    },
  },
};
</script>
