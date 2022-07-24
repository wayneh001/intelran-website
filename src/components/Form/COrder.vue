<template>
  <div>
    <div class="row">
      <div v-for="(e, i) in order" :key="i" class="col-12 col-md-6">
        <div class="mb-3">
          <div class="w-100 mb-3">
            <label
              id="no"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>No</span>
              <span
                :class="[
                  { 'custom-text-main': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >{{ e.no }}</span
              >
            </label>
          </div>
          <div class="w-100 mb-3">
            <label
              id="date"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Date</span>
              <span
                :class="[
                  { 'custom-text-main': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >{{ e.date }}</span
              >
            </label>
          </div>
          <div class="mb-3">
            <label
              id="switchConfig"
              :class="[
                { 'config-setter-header-light': this.mode === 'Light' },
                { 'config-setter-header-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Products</span>
              <span></span>
            </label>
            <div class="d-flex flex-wrap">
              <label
                v-for="(c, j) in e.cart.selectedProducts"
                :key="j"
                :class="[
                  { 'config-setter-body-light': this.mode === 'Light' },
                  { 'config-setter-body-dark': this.mode === 'Dark' },
                ]"
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >{{ c.name }}</span
                ><span
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >X{{ c.quantity }}</span
                ></label
              >
            </div>
          </div>
          <div
            v-if="e.cart.service.installation.enabled === true"
            class="w-100 mb-3"
          >
            <label
              id="installation"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Installation</span>
              <span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >${{ e.cart.service.installation.fee }}</span
              >
            </label>
          </div>
          <div
            v-if="e.cart.service.extendedWarranty.enabled === true"
            class="w-100 mb-3"
          >
            <label
              id="extendedWarranty"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Extended Warranty</span>
              <span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >${{ e.cart.service.extendedWarranty.fee }}</span
              >
            </label>
          </div>
          <div class="w-100 mb-3">
            <label
              id="total"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Overall Total</span>
              <span
                :class="[
                  { 'custom-text-dark': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >${{ e.cart.total }}</span
              >
            </label>
          </div>
          <div class="w-100 mb-3">
            <label
              id="shippment"
              :class="[
                { 'form-label-light': this.mode === 'Light' },
                { 'form-label-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Shippment</span>
              <span
                :class="[
                  { 'custom-text-main': this.mode === 'Light' },
                  { 'custom-text-white': this.mode === 'Dark' },
                ]"
                >{{ e.shipping.status }}</span
              >
            </label>
          </div>
          <button
            type="button"
            class="btn w-100 mb-3"
            :class="[
              { 'btn-main-light': this.mode === 'Light' },
              { 'btn-main-dark': this.mode === 'Dark' },
            ]"
            :disabled="e.shipping.status === 'Return'"
            @click.prevent="refund(i)"
          >
            Return and Refund
          </button>
          <button
            type="button"
            class="btn btn-danger w-100 mb-3"
            :disabled="e.shipping.status !== 'Shipped'"
            @click.prevent="deleteOrder(i)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPlaceOrder",
  props: {
    mode: {
      type: String,
    },
  },
  data() {
    return {
      auth: this.$store.state.auth,
      order: this.$store.state.order,
    };
  },
  methods: {
    checkAuth() {
      if (this.auth === false) {
        this.$router.push("/dashboard/smartHome");
      }
    },
    refund(i) {
      this.order[i].shipping.status = "Return";
      this.$store.commit("editOrder", this.order);
    },
    deleteOrder(i) {
      this.order.splice(i, 1);
      this.$store.commit("editOrder", this.order);
    },
  },
  crated() {
    this.checkAuth();
  },
};
</script>

<style></style>
