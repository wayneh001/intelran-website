<template>
  <div>
    <div class="row">
      <div v-for="(e, i) in data" :key="i" class="col-12 col-md-6">
        <div class="mb-5">
          <img :src="getUrl()" />
          <div class="mb-3 w-100">
            <label class="form-label">Product Name</label>
            <input
              type="text"
              class="form-control"
              v-model="value.product.name"
              disabled
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Quantity</label>
            <input type="text" class="form-control" v-model="value.quantity" />
          </div>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click.prevent="$emit('toConfig')"
          >
            Edit Config
          </button>
        </div>
        <div class="mb-5">
          <div class="mb-3 w-100">
            <label class="col-form-label me-2">Installation</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="true"
                checked
                v-model="value.service.installation.enabled"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="false"
                checked
                v-model="value.service.installation.enabled"
              />
              <label class="form-check-label">No</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.installation.fee
            }}</label>
          </div>
          <div class="mb-3 w-100">
            <label class="col-form-label me-2">Extended Warranty</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="true"
                checked
                v-model="value.service.extendedWarranty.enabled"
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="false"
                checked
                v-model="value.service.extendedWarranty.enabled"
              />
              <label class="form-check-label">No</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.extendedWarranty.fee
            }}</label>
          </div>
        </div>
        <div class="mb-5">
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
  </div>
</template>

<script>
import { products } from "@/content/products";

export default {
  name: "CCart",
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
    fetchList() {

    },
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
