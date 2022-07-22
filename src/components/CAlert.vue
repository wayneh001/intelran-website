<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger custom-text-white">
          <h5 class="modal-title">
            <span>Delete {{ item.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Confirm delete?
          <strong class="text-danger">{{ item.title }}</strong>
          can not be restored after delete.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            cancel
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click.prevent="$emit('confirm')"
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAlert",
  props: {
    item: {},
  },
  data() {
    return {
      modal: "",
    };
  },
};
</script>
