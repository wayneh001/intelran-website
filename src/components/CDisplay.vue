<template>
  <div class="d-flex justify-content-center align-items-center">
    <img
      v-for="(e, i) in products"
      :style="{ height: e.height }"
      :key="i"
      :src="e.src"
      class="my-3 mx-5"
    />
  </div>
</template>

<script>
import { products } from "@/content/products";
export default {
  name: "CDisplay",
  props: {
    label: {
      type: String,
      require: true,
    },
    seq: {
      type: Number,
      require: true,
    },
    mode: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    filterProducts() {
      for (let i in products) {
        let n = 0;
        let m = 0;
        switch (products[i].texture) {
          case "Matte ABS":
            if (products[i].image.length === 10) {
              if (this.mode === "Light") {
                n = 4;
                m = 8;
              } else {
                n = 0;
                m = 1;
              }
            }
            break;
          case "Aluminum Alloy":
            if (this.mode === "Light") {
              n = 6;
              m = 7;
            } else {
              n = 2;
              m = 0;
            }
            break;
        }
        if (products[i].label === this.label && products[i].seq === this.seq) {
          let product1 = {
            name: products[i].name,
            label: products[i].label,
            height: products[i].height,
            src: require(`@/assets/img/products/${products[i].image[n].url}`),
          };
          let product2 = {
            name: products[i].name,
            label: products[i].label,
            height: products[i].height,
            src: require(`@/assets/img/products/${products[i].image[m].url}`),
          };
          if (products[i].repeat === 2) {
            this.products.push(product1);
            this.products.push(product2);
          } else {
            this.products.push(product1);
          }
        }
      }
    },
  },
  created() {
    this.filterProducts();
  },
};
</script>

<style></style>
