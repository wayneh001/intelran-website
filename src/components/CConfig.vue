<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <img
          v-for="(e, i) in products"
          :key="i"
          :src="getUrl(e)"
          @click.prevent="selected"
        />
      </div>
      <div class="col-12 col-md-6">
        <div class="mb-5">
          <div class="mb-3 w-100">
            <label class="form-label">Product</label>
            <input
              type="text"
              class="form-control"
              v-model="product.name"
              disabled
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Color</label>
            <select name="color" id="color" v-model="product.color">
              <option v-for="(e, i) in color" :key="i" :value="e.name">
                {{ e.name }}
              </option>
            </select>
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Quantity</label>
            <input
              type="text"
              class="form-control"
              v-model="product.quantity"
            />
          </div>
          <div
            v-if="this.product.name === 'Universal Switch'"
            class="mb-3 w-100"
          >
            <label class="form-label">Config</label>
            <div class="col-6" v-for="i in 8" :key="i">
              <input
                type="text"
                class="form-control"
                :placeholder="presetConfig[i]"
                :v-model="product.config[i]"
              />
            </div>
          </div>
          <div v-if="this.product.name === 'Blinds Driver'" class="mb-3 w-100">
            <label class="form-label">Config</label>
            <input
              type="text"
              class="form-control"
              placeholder="Length for blinds' track ( inch )"
              v-model="product.config[0]"
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary w-100"
          @click.prevent="addToCart"
        >
          Add to Cart
        </button>
        <button
          type="button"
          class="btn btn-secondary w-100"
          @click.prevent="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/content/products";

export default {
  name: "CConfig",
  props: {
    label: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      products: [],
      color: [],
      presetConfig: [
        "Home",
        "Leaving",
        "Morning",
        "Night",
        "Chandelier",
        "Downlight",
        "Lamp",
        "Strip",
      ],
      product: {
        name: "",
        texture: "",
        color: "",
        quantity: 1,
        config: [],
        uid: "",
      },
    };
  },
  methods: {
    filterProducts() {
      for (let i in products) {
        if (products[i].label === this.label) {
          this.products.push(products[i]);
        }
      }
      this.getColor();
    },
    getUrl(e) {
      for (let i in products) {
        if (products[i].name === e.name && products[i].texture === e.texture) {
          for (let e in products[i].image) {
            if (products[i].image[e].name === this.value.product.color) {
              return products[i].image[e].url;
            }
          }
        }
      }
    },
    getColor() {
      for (let n in products) {
        if (
          products[n].name === this.product.name &&
          products[n].texture === this.product.texture
        ) {
          this.color = [...products[n].image];
        }
      }
    },
    fetchOne() {},
    selected() {
      console.log("selected");
      this.filterProducts();
    },
    addToCart() {
      if (this.product.uid === "") {
        this.insertOne();
      } else {
        this.updateOne();
      }
    },
    insertOne() {},
    updateOne() {},
    cancel() {
      console.log("cancel");
    },
  },
  created() {
    this.filterProducts();
    if (this.$store.state.productUid !== "") {
      this.fetchOne();
    }
  },
};
</script>

<style></style>
