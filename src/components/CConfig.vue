<template>
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div
          class="modal-header"
          :class="[
            { 'modal-primary-light': this.mode === 'Light' },
            { 'modal-primary-dark': this.mode === 'Dark' },
          ]"
        >
          Configuring the product
          <!-- <button
            type="button"
            class="btn-close btn-close-color"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->
        </div>
        <div
          class="modal-body"
          :class="[
            { 'modal-primary-light': this.mode === 'Light' },
            { 'modal-primary-dark': this.mode === 'Dark' },
          ]"
        >
          <div class="row">
            <div
              class="col-12 col-md-6 overflow-auto"
              style="max-height: 37.5rem"
            >
              <div
                v-for="(e, i) in products"
                :key="i"
                :class="[
                  { 'product-img-light': this.mode === 'Light' },
                  { 'product-img-dark': this.mode === 'Dark' },
                ]"
                @click.prevent="selectProduct(e)"
              >
                <img style="width: 300px" :src="e.src" class="my-5 mx-5" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-3">
                <div class="mb-3 w-100">
                  <label
                    id="product"
                    :class="[
                      { 'form-label-light': this.mode === 'Light' },
                      { 'form-label-dark': this.mode === 'Dark' },
                    ]"
                  >
                    <span>{{ product.name }}</span>
                    <span>{{ product.price }}</span>
                  </label>
                </div>
                <div class="mb-3 w-100">
                  <label
                    id="color"
                    :class="[
                      { 'color-selector-header-light': this.mode === 'Light' },
                      { 'color-selector-header-dark': this.mode === 'Dark' },
                    ]"
                  >
                    <span>Color</span>
                    <span>{{ product.color }}</span>
                  </label>
                  <div
                    :class="[
                      { 'color-selector-body-light': this.mode === 'Light' },
                      { 'color-selector-body-dark': this.mode === 'Dark' },
                    ]"
                  >
                    <div class="row d-flex justify-content-center">
                      <div
                        v-for="n in color"
                        :key="n"
                        class="color-block color-block-click"
                        :class="[
                          n,
                          {
                            'color-block-selected-light':
                              this.mode === 'Light' && n === this.product.color,
                          },
                          {
                            'color-block-selected-dark':
                              this.mode === 'Dark' && n === this.product.color,
                          },
                        ]"
                        @click.prevent="selectColor(n)"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="mb-3 w-100">
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
                        @click.prevent="minus"
                      />
                      <span>{{ product.quantity }}</span>
                      <img
                        :src="addIconSrc"
                        class="icon-18"
                        @click.prevent="add"
                      />
                    </div>
                  </label>
                </div>
                <div
                  v-if="this.product.name === 'Universal Switch'"
                  class="mb-3"
                >
                  <label
                    id="switchConfig"
                    :class="[
                      { 'config-setter-header-light': this.mode === 'Light' },
                      { 'config-setter-header-dark': this.mode === 'Dark' },
                    ]"
                  >
                    <span>Config</span>
                    <span></span>
                  </label>
                  <div class="d-flex flex-wrap">
                    <input
                      v-for="i in 8"
                      :key="i"
                      type="text"
                      :class="[
                        { 'config-setter-body-light': this.mode === 'Light' },
                        { 'config-setter-body-dark': this.mode === 'Dark' },
                      ]"
                      :placeholder="presetConfig[i]"
                      :v-model="product.config[i]"
                    />
                  </div>
                </div>
                <div v-if="this.product.name === 'Blinds Driver'" class="mb-3">
                  <label
                    id="blindsConfig"
                    :class="[
                      { 'config-setter-header-light': this.mode === 'Light' },
                      { 'config-setter-header-dark': this.mode === 'Dark' },
                    ]"
                  >
                    <span>Config</span>
                    <span></span>
                  </label>
                  <div class="d-flex flex-wrap">
                    <input
                      :key="i"
                      type="text"
                      :class="[
                        { 'config-setter-body-light': this.mode === 'Light' },
                        { 'config-setter-body-dark': this.mode === 'Dark' },
                      ]"
                      style="width: 100%; border-radius: 0 0 0.5rem 0.5rem"
                      placeholder="Length or track (m)"
                      :v-model="product.config[i]"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn w-100 mb-3"
                :class="[
                  { 'btn-main-light': this.mode === 'Light' },
                  { 'btn-main-dark': this.mode === 'Dark' },
                ]"
                @click.prevent="addToCart"
              >
                Add to Cart
              </button>
              <button
                type="button"
                class="btn btn-light w-100 mb-3"
                :class="[
                  { 'btn-outline-main-light': this.mode === 'Light' },
                  { 'btn-outline-main-dark': this.mode === 'Dark' },
                ]"
                @click.prevent="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div
          class="modal-footer"
          :class="[
            { 'modal-primary-light': this.mode === 'Light' },
            { 'modal-primary-dark': this.mode === 'Dark' },
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Modal from "bootstrap/js/dist/modal";
import { products } from "@/content/products";
import { funcIcons } from "@/content/icons";

export default {
  name: "CConfig",
  props: {
    headerLabel: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      mode: "",
      products: [],
      color: [],
      presetConfig: [
        "",
        "Home",
        "Leaving",
        "Morning",
        "Night",
        "Chandelier",
        "Downlight",
        "Lamp",
        "Strip",
      ],
      product: {},
      minusIconSrc: "",
      addIconSrc: "",
    };
  },
  methods: {
    filterProducts() {
      this.products = [];
      for (let i in products) {
        if (products[i].headerLabel === this.headerLabel) {
          let product = _.omit(products[i], ["seq", "repeat"]);
          product.colorOption = products[i].image.length;
          product.src = require(`@/assets/img/products/${products[i].image[0].url}`);
          this.products.push(product);
        }
      }
    },
    setProduct(product) {
      this.product = _.omit(product, [
        "label",
        "height",
        "colorOption",
        "src",
        "image",
      ]);
      this.product.color = product.image[0].name;
      this.product.quantity = 1;
      this.product.config = [];
      this.product.uid = "";
      this.filterColor();
    },
    filterColor() {
      this.color = [];
      for (let i in products) {
        if (
          products[i].name === this.product.name &&
          products[i].texture === this.product.texture
        ) {
          for (let e in products[i].image) {
            this.color.push(products[i].image[e].name);
          }
        }
      }
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
    selectProduct(e) {
      this.filterProducts();
      this.setProduct(e);
    },
    selectColor(n) {
      for (let i in this.products) {
        if (
          this.products[i].name === this.product.name &&
          this.products[i].texture === this.product.texture
        ) {
          for (let e in products) {
            if (
              products[e].name === this.products[i].name &&
              products[e].texture === this.products[i].texture
            ) {
              for (let c in products[e].image) {
                if (products[e].image[c].name === n) {
                  this.products[
                    i
                  ].src = require(`@/assets/img/products/${products[e].image[c].url}`);
                }
              }
            }
          }
        }
      }
      console.log(this.products);
      this.product.color = n;
    },
    minus() {
      if (this.product.quantity > 1) {
        this.product.quantity -= 1;
      }
    },
    add() {
      this.product.quantity += 1;
    },
    addToCart() {
      if (this.product.uid === "") {
        this.insertOne();
      } else {
        this.updateOne();
      }
    },
    fetchOne() {},
    insertOne() {},
    updateOne() {},
    cancel() {
      this.hideModal();
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  created() {
    this.mode = this.$store.state.mode;
    this.filterProducts();
    this.setProduct(this.products[0]);
    this.getQuantityIcons();
    if (this.$store.state.productUid !== "") {
      this.fetchOne();
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
