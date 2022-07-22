<template>
  <div>
    <div class="row">
      <div v-for="(e, i) in data" :key="i" class="col-12 col-md-6">
        <div class="mb-3">
          <img :src="getUrl()" />
          <div class="mb-3 w-100">
            <label id="product" class="form-label-light">
              <span>{{ e.name }}</span>
              <span></span>
            </label>
          </div>
          <div class="mb-3 w-100">
            <label id="quantity" class="form-label-light">
              <span>Quantity</span>
              <img :src="minusIconSrc" class="icon-18" @click="minus" />
              <span>{{ value.quantity }}</span>
              <img :src="AddsIconSrc" class="icon-18" @click="add" />
            </label>
          </div>
          <button
            type="button"
            class="btn btn-white w-100"
            @click.prevent="$emit('toConfig')"
          >
            Edit Config
          </button>
        </div>
        <div class="mb-3">
          <div class="mb-3 w-100">
            <label id="quantity" class="form-label-light">
              <span>Installation</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  v-model="value.service.installation.enabled"
                />
              </div>
            </label>
          </div>
          <div class="mb-3 w-100">
            <label id="quantity" class="form-label-light">
              <span>Extended Warranty</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  v-model="value.service.extendedWarranty.enabled"
                />
              </div>
            </label>
          </div>
        </div>
        <div class="mb-3">
          <div class="d-flex justify-content-center align-items-between w-100">
            <span>Total</span><span>{{ value.total }}</span>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-danger w-100"
          @click.prevent="placeAnOrder"
        >
          Place an Order
        </button>
      </div>
    </div>
    <CConfig ref="config" :headerLabel="content.headerLabel" />
  </div>
</template>

<script>
import CConfig from "@/components/CConfig";
import { products } from "@/content/products";

export default {
  name: "CCart",
  components: {
    CConfig,
  },
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      value: {
        product: {
          name: "",
          texture: "",
          color: "",
          quantity: 1,
          config: [],
          uid: "",
        },
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
      },
    };
  },
  methods: {
    getUrl() {
      for (let i in products) {
        if (
          products[i].name === this.value.product.name &&
          products[i].texture === this.value.product.texture
        ) {
          for (let e in products[i].image) {
            if (products[i].image[e].name === this.value.product.color) {
              return products[i].image[e].url;
            }
          }
        }
      }
    },
    fetchList() {},
    editConfig() {
      console.log("editConfig");
    },
    placeAnOrder() {
      console.log("placeAnOrder");
    },
  },
};
</script>

<style></style>
