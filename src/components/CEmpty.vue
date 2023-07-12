<template>
  <div>
    <div class="d-flex justify-content-center align-items-center vh-50">
      <div>
        <h5
            :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
            class="ms-md-2"
        >
          Your cart is empty
        </h5>
        <router-link
            :class="[
            { 'custom-text-dark': this.mode === 'Light' },
            { 'custom-text-white': this.mode === 'Dark' },
          ]"
            class="btn w-100 mb-2 mb-md-3"
            to="/dashboard/hub"
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
