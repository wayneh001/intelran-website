<template>
  <div class="d-flex justified-content-center align-item-between">
    <div class="col-6 col-md-3">
      <img v-for="(e, i) in this.products" :key="i" :src="getUrl(e, i)" />
    </div>
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
        if (products[i].label === this.label && products[i].seq === this.seq) {
          if (products[i].repeat === 2) {
            this.products.push(products[i]);
            this.products.push(products[i]);
          } else {
            this.products.push(products[i]);
          }
        }
      }
    },
    getUrl(e, i) {
      let url = "";
      if (e.repeat === 1) {
        url = e.iamge[0].url;
      } else {
        if (this.mode === "Light") {
          switch (i) {
            case 0:
              url = e.image[4].url;
              break;
            case 1:
              url = e.iamge[8].url;
              break;
            case 2:
              url = e.image[6].url;
              break;
            case 3:
              url = e.image[7].url;
              break;
          }
        } else {
          switch (i) {
            case 0:
              url = e.image[0].url;
              break;
            case 1:
              url = e.iamge[1].url;
              break;
            case 2:
              url = e.image[2].url;
              break;
            case 3:
              url = e.image[0].url;
              break;
          }
        }
      }
      return url;
    },
  },
  created() {
    this.filterProducts();
  },
};
</script>

<style></style>
