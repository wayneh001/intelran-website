<template>
  <div ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger custom-text-white">
          <h5 class="modal-title">
            <span>Error</span>
          </h5>
          <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
          ></button>
        </div>
        <div class="modal-body">
          {{ msg }}
        </div>
        <div class="modal-footer">
          <button
              class="btn btn-danger"
              type="button"
              @click.prevent="hideModal"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  name: "CAlert",
  props: {
    msg: {
      type: String,
      require: true,
    }
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
