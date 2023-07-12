<template>
  <div ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger custom-text-white">
          <h5 class="modal-title">
            <span>Delete {{ item.title }}</span>
          </h5>
          <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
          ></button>
        </div>
        <div class="modal-body">
          Confirm delete?
        </div>
        <div class="modal-footer">
          <button
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              type="button"
          >
            Cancel
          </button>
          <button
              class="btn btn-danger"
              type="button"
              @click.prevent="confirm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  name: "CDeleteAlert",
  props: {
    item: {
      type: Object,
      require: true
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    confirm() {
      this.$emit('confirm', this.item);
      this.hideModal();
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
