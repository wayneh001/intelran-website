<template>
  <div>
    <div v-if="selectedProducts.length === 0">
      <CEmpty :mode="mode" />
    </div>
    <div v-else>
      <div class="row">
        <div
          v-for="(e, i) in selectedProducts"
          :key="i"
          class="col-12 col-md-6 mb-4 mb-md-5 mb-4 mb-md-3"
        >
          <div class="mb-2 mb-md-3">
            <div
              class="d-flex justify-content-center align-items-center mb-2 mb-md-3"
            >
              <div style="height: 200px; line-height: 200px">
                <img
                  :src="e.src"
                  class="mx-auto"
                  style="width: 200px;"
                />
              </div>
            </div>
            <div class="w-100 mb-2 mb-md-3">
              <label
                id="product"
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
              >
                <span>{{ e.name }}</span>
                <span>${{ e.price }}</span>
              </label>
            </div>
            <div class="w-100 mb-2 mb-md-3">
              <label
                id="color"
                :class="[
                  { 'color-selector-header-light': this.mode === 'Light' },
                  { 'color-selector-header-dark': this.mode === 'Dark' },
                ]"
              >
                <span>Color</span>
                <span>{{ e.color }}</span>
              </label>
              <div
                class="px-4 px-md-4"
                :class="[
                  { 'color-selector-body-light': this.mode === 'Light' },
                  { 'color-selector-body-dark': this.mode === 'Dark' },
                ]"
              >
                <div class="row d-flex justify-content-start">
                  <div
                    v-for="n in filterColor(e, products)"
                    :key="n"
                    class="color-block color-block-click"
                    :class="[
                      n,
                      {
                        'color-block-selected-light':
                          this.mode === 'Light' && n === e.color,
                      },
                      {
                        'color-block-selected-dark':
                          this.mode === 'Dark' && n === e.color,
                      },
                    ]"
                    @click.prevent="selectColor(e, n, products)"
                  ></div>
                </div>
              </div>
            </div>
            <div class="w-100 mb-2 mb-md-3">
              <label
                id="quantity"
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
              >
                <span>Quantity</span>
                <div
                  class="col-4 d-flex justify-content-between align-items-center"
                >
                  <img
                    :src="minusIconSrc"
                    class="icon-18"
                    @click.prevent="minus(e)"
                  />
                  <span>{{ e.quantity }}</span>
                  <img
                    :src="addIconSrc"
                    class="icon-18"
                    @click.prevent="add(e)"
                  />
                </div>
              </label>
            </div>
            <div v-if="e.name === 'Universal Switch'" class="mb-2 mb-md-3">
              <label
                id="switchConfig"
                :class="[
                  { 'config-setter-header-light': this.mode === 'Light' },
                  { 'config-setter-header-dark': this.mode === 'Dark' },
                ]"
              >
                <span>Config</span>
                <span>Label on Switch</span>
              </label>
              <div class="d-flex flex-wrap">
                <label
                  v-for="(c, j) in getConfig(presetConfig)"
                  :key="j"
                  class="w-100 w-md-50"
                  :class="[
                    { 'config-setter-body-light': this.mode === 'Light' },
                    { 'config-setter-body-dark': this.mode === 'Dark' },
                  ]"
                  ><span
                    :class="[
                      { 'custom-text-dark': this.mode === 'Light' },
                      { 'custom-text-white': this.mode === 'Dark' },
                    ]"
                    ><img :src="c.src" class="icon-18" /></span
                  ><input
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    :placeholder="c.name"
                    :value="e.config[j]"
                /></label>
              </div>
            </div>
            <div v-if="e.name === 'Blinds Driver'" class="mb-2 mb-md-3">
              <label
                id="blindsConfig"
                :class="[
                  { 'config-setter-header-light': this.mode === 'Light' },
                  { 'config-setter-header-dark': this.mode === 'Dark' },
                ]"
              >
                <span>Config</span>
                <span>Length of Track</span>
              </label>
              <div class="d-flex flex-wrap">
                <label
                  :class="[
                    { 'config-setter-body-light': this.mode === 'Light' },
                    { 'config-setter-body-dark': this.mode === 'Dark' },
                  ]"
                  style="border-radius: 0 0 0.5rem 0.5rem"
                  ><span
                    :class="[
                      { 'custom-text-dark': this.mode === 'Light' },
                      { 'custom-text-white': this.mode === 'Dark' },
                    ]"
                    >Length (m)</span
                  ><input
                    type="text"
                    class="text-end"
                    :class="[
                      { 'input-light': this.mode === 'Light' },
                      { 'input-dark': this.mode === 'Dark' },
                    ]"
                    v-model="e.config[0]"
                /></label>
              </div>
            </div>
            <div class="w-100 mb-2 mb-md-3">
              <label
                id="sum"
                :class="[
                  { 'form-label-light': this.mode === 'Light' },
                  { 'form-label-dark': this.mode === 'Dark' },
                ]"
              >
                <span>Sum</span>
                <span>${{ e.sum }}</span>
              </label>
            </div>
            <button
              type="button"
              class="btn btn-danger w-100 mb-2 mb-md-3"
              @click.prevent="toDeleteProduct(e)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-5 mb-2 mb-md-3">
          <div class="w-100 mb-2 mb-md-3">
            <label
              id="installation"
              :class="[
                { 'service-setter-header-light': this.mode === 'Light' },
                { 'service-setter-header-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Installation</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  :class="[
                    { 'form-check-input-light': this.mode === 'Light' },
                    { 'form-check-input-dark': this.mode === 'Dark' },
                  ]"
                  type="checkbox"
                  role="switch"
                  v-model="service.installation.enabled"
                />
              </div>
            </label>
            <label
              id="installation"
              :class="[
                { 'service-setter-body-light': this.mode === 'Light' },
                { 'service-setter-body-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Fee</span>
              <span v-show="service.installation.enabled"
                >${{ service.installation.fee }}</span
              >
            </label>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-5 mb-2 mb-md-3">
          <div class="w-100 mb-2 mb-md-3">
            <label
              id="extendedWarranty"
              :class="[
                { 'service-setter-header-light': this.mode === 'Light' },
                { 'service-setter-header-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Extended Warranty</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  :class="[
                    { 'form-check-input-light': this.mode === 'Light' },
                    { 'form-check-input-dark': this.mode === 'Dark' },
                  ]"
                  type="checkbox"
                  role="switch"
                  v-model="service.extendedWarranty.enabled"
                />
              </div>
            </label>
            <label
              id="installation"
              :class="[
                { 'service-setter-body-light': this.mode === 'Light' },
                { 'service-setter-body-dark': this.mode === 'Dark' },
              ]"
            >
              <span>Fee</span>
              <span v-show="service.extendedWarranty.enabled"
                >${{ service.extendedWarranty.fee }}</span
              >
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-4 mb-md-5 w-100 mb-2 mb-md-3">
        <label
          id="total"
          :class="[
            { 'form-label-light': this.mode === 'Light' },
            { 'form-label-dark': this.mode === 'Dark' },
          ]"
        >
          <span>Overall Total</span>
          <span>${{ total }}</span>
        </label>
      </div>
      <button
        type="button"
        class="btn w-100 mb-2 mb-md-3"
        :class="[
          { 'btn-main-light': this.mode === 'Light' },
          { 'btn-main-dark': this.mode === 'Dark' },
        ]"
        @click.prevent="toPlaceOrder"
      >
        Place an Order
      </button>
      <CDeleteAlert
        ref="deleteAlert"
        :item="productToDelete"
        @confirm="deleteProduct"
      />
    </div>
  </div>
</template>

<script>
import CEmpty from "@/components/CEmpty";
import CDeleteAlert from "@/components/CDeleteAlert";
import { products } from "@/content/products";
import { funcIcons, presetConfig } from "@/content/icons";
export default {
  name: "CCart",
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
      screenSize: this.$store.state.screenSize,
      auth: this.$store.state.auth,
      products: products,
      minusIconSrc: "",
      addIconSrc: "",
      presetConfig: presetConfig,
      selectedProducts:
        this.$store.state.cart.selectedProducts === undefined
          ? []
          : this.$store.state.cart.selectedProducts,
      service: {
        installation: {
          enabled: true,
          fee: 0,
        },
        extendedWarranty: {
          enabled: true,
          fee: 0,
        },
      },
      total: 0,
      productToDelete: {},
    };
  },
  methods: {
    checkAuth() {
      if (this.auth === false) {
        this.$router.push("/dashboard/smartHome");
      }
    },
    filterColor(e, products) {
      let color = [];
      for (let i in products) {
        if (products[i].name === e.name && products[i].texture === e.texture) {
          for (let c in products[i].image) {
            color.push(products[i].image[c].name);
          }
        }
      }
      return color;
    },
    getQuantityIcons() {
      if (this.mode === "Light") {
        this.minusIconSrc = require(`@/assets/img/icons/func/${funcIcons[4].url.light}`);
        this.addIconSrc = require(`@/assets/img/icons/func/${funcIcons[5].url.light}`);
      } else {
        this.minusIconSrc = require(`@/assets/img/icons/func/${funcIcons[4].url.dark}`);
        this.addIconSrc = require(`@/assets/img/icons/func/${funcIcons[5].url.dark}`);
      }
    },
    selectColor(e, n, products) {
      e.color = n;
      for (let i in products) {
        if (products[i].name === e.name && products[i].texture === e.texture) {
          for (let c in products[i].image) {
            if (products[i].image[c].name === n) {
              e.src = require(`@/assets/img/products/${products[i].image[c].url}`);
            }
          }
        }
      }
    },
    minus(e) {
      if (e.quantity > 1) {
        e.quantity -= 1;
      }
      e.sum = parseInt(e.quantity * e.price);
      this.reCalculatedFee();
    },
    add(e) {
      e.quantity += 1;
      e.sum = parseInt(e.quantity * e.price);
      this.reCalculatedFee();
    },
    getConfig(array) {
      let src = `${this.mode}`;
      for (let i in array) {
        array[i].src = require(`@/assets/img/icons/indicator/${
          parseInt(i) + 1
        }@${src}.svg`);
      }
      return array;
    },
    init() {
      if (this.$store.state.cart.service !== undefined) {
        this.service = { ...this.$store.state.cart.service };
        this.reCalculatedFee();
      }
    },
    reCalculatedFee() {
      let sum = 0;
      for (let i in this.selectedProducts) {
        sum += parseInt(this.selectedProducts[i].sum);
      }
      this.service.installation.fee = Math.round(sum * 0.1);
      this.service.extendedWarranty.fee = Math.round(sum * 0.1);
      this.reCalculatedTotal(sum);
    },
    reCalculatedTotal(sum) {
      let installationFee = 0;
      let extendedWarrantyFee = 0;
      this.service.installation.enabled === true
        ? (installationFee = this.service.installation.fee)
        : (installationFee = 0);
      this.service.extendedWarranty.enabled === true
        ? (extendedWarrantyFee = this.service.extendedWarranty.fee)
        : (extendedWarrantyFee = 0);
      this.total = sum + installationFee + extendedWarrantyFee;
    },
    toDeleteProduct(e) {
      this.productToDelete = e;
      console.log(this.productToDelete);
      this.productToDelete.title = this.productToDelete.name;
      this.$refs.deleteAlert.showModal();
    },
    deleteProduct(item) {
      this.selectedProducts.splice(item, 1);
      this.reCalculatedFee();
      let cart = {
        selectedProducts: this.selectedProducts,
        service: this.service,
      };
      this.$store.commit("editCart", cart);
      this.$emit("showToast", {
        title: "Delete product",
        content: "The selected product is deleted from your cart.",
      });
    },
    toPlaceOrder() {
      let cart = {
        selectedProducts: this.selectedProducts,
        service: this.service,
        total: this.total,
      };
      this.$store.commit("editCart", cart);
      this.$emit("toPlaceOrder");
    },
  },
  created() {
    this.checkAuth();
    this.getQuantityIcons();
    this.init();
  },
  watch: {
    "service.installation.enabled": function () {
      this.reCalculatedFee();
    },
    "service.extendedWarranty.enabled": function () {
      this.reCalculatedFee();
    },
  },
};
</script>

<style>
.form-check-input:focus {
  box-shadow: none;
}

.form-check-input-light {
  background-color: #fff;
}

.form-check-input-dark {
  background-color: #aaafbc;
}

.form-check-input:checked {
  background-color: none;
  border-color: none;
}

.form-check-input-light:checked {
  background-color: #1a56a2;
  border-color: #1a56a2;
}

.form-check-input-dark:checked {
  background-color: #000;
  border-color: #000;
}

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
