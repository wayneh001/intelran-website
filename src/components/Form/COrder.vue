<template>
  <div>
    <div v-if="order.length === 0">
      <CEmpty :mode="mode" />
    </div>
    <div v-else>
      <div class="row">
        <div v-for="(e, i) in order" :key="i" class="col-12 col-md-6 mb-4 mb-md-5">
          <div class="mb-2 mb-md-3">
            <div class="w-100 mb-2 mb-md-3">
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
            <div class="w-100 mb-2 mb-md-3">
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
            <div class="mb-2 mb-md-3">
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
                      { 'custom-text-main': this.mode === 'Light' },
                      { 'custom-text-white': this.mode === 'Dark' },
                    ]"
                    >X{{ c.quantity }}</span
                  ></label
                >
              </div>
            </div>
            <div
              v-if="e.cart.service.installation.enabled === true"
              class="w-100 mb-2 mb-md-3"
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
                    { 'custom-text-main': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >${{ e.cart.service.installation.fee }}</span
                >
              </label>
            </div>
            <div
              v-if="e.cart.service.extendedWarranty.enabled === true"
              class="w-100 mb-2 mb-md-3"
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
                    { 'custom-text-main': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >${{ e.cart.service.extendedWarranty.fee }}</span
                >
              </label>
            </div>
            <div class="w-100 mb-2 mb-md-3">
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
                    { 'custom-text-main': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                  >${{ e.cart.total }}</span
                >
              </label>
            </div>
            <div class="w-100 mb-2 mb-md-3">
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
              class="btn w-100 mb-2 mb-md-3"
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
              class="btn btn-danger w-100 mb-2 mb-md-3"
              :disabled="e.shipping.status !== 'Shipped'"
              @click.prevent="toDeleteOrder(e)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <CDeleteAlert
        ref="deleteAlert"
        :item="orderToDelete"
        @confirm="deleteOrder"
      />
    </div>
  </div>
</template>

<script>
import CEmpty from "@/components/CEmpty";
import CDeleteAlert from "@/components/CDeleteAlert";
export default {
  name: "COrder",
  components: {
    CEmpty,
    CDeleteAlert,
  },
  props: {
    mode: {
      type: String,
    },
  },
  data() {
    return {
      auth: this.$store.state.auth,
      order: this.$store.state.order,
      orderToDelete: {},
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
      this.$emit("showToast", {
        title: "Refund request",
        content: "We have received your refund request.",
      });
    },
    toDeleteOrder(e) {
      this.orederToDelete = e;
      this.orederToDelete.title = `No: ${this.orederToDelete.no}`;
      this.$refs.deleteAlert.showModal();
    },
    deleteOrder(item) {
      this.order.splice(item, 1);
      this.$store.commit("editOrder", this.order);
      this.$emit("showToast", {
        title: "Delete order",
        content: "The selected order is deleted from your order list.",
      });
    },
  },
  created() {
    this.checkAuth();
    console.log(this.order);
  },
};
</script>

<style>
.config-setter-body-light:nth-last-child(1) {
  border-radius: 0 0 0.5rem 0.5rem;
}

.config-setter-body-light:nth-last-child(2) {
  border-radius: 0 0 0 0;
}

.config-setter-body-light input:-webkit-autofill,
input:focus:-webkit-autofill {
  -webkit-text-fill-color: #262627;
  box-shadow: 0 0 0 100px rgba(255, 255, 255) inset;
}

.config-setter-body-dark:nth-last-child(1) {
  border-radius: 0 0 0.5rem 0.5rem;
}

.config-setter-body-dark:nth-last-child(2) {
  border-radius: 0 0 0 0;
}

.config-setter-body-dark input:-webkit-autofill,
input:focus:-webkit-autofill {
  -webkit-text-fill-color: #fff;
  box-shadow: 0 0 0 100px rgba(38, 38, 39) inset;
}

@media (min-width: 768px) {
  .config-setter-body-light:nth-last-child(1) {
    border-radius: 0 0 0.5rem 0;
  }

  .config-setter-body-dark:nth-last-child(1) {
    border-radius: 0 0 0.5rem 0;
  }

  .config-setter-body-light:nth-last-child(2) {
    border-radius: 0 0 0 0.5rem;
  }
  .config-setter-body-dark:nth-last-child(2) {
    border-radius: 0 0 0 0.5rem;
  }
}
</style>
