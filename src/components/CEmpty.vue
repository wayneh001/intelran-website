<template>
  <div>
    <div class="d-flex justify-content-center align-items-center vh-50">
      <div>
        <h5
          class="ms-md-2"
          :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
        >
          Your cart is empty
        </h5>
        <router-link
          to="/dashboard/hub"
          class="btn w-100 mb-2 mb-md-3"
          :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
        >
          Go Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CEmpty",
  props: {
    mode: {
      type: String,
    },
  },
};
</script>
