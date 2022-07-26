<template>
  <div
    class="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center"
  >
    <img
      v-for="(e, i) in products"
      :key="i"
      :src="e.src"
      class="mx-3 mx-md-5 my-3 my-md-3 "
      :style="{ height: getImgHeight(e.height) }"
    />
  </div>
</template>

<script>
import { products } from "@/content/products";
export default {
  name: "CDisplay",
  props: {
    headerLabel: {
      type: String,
      require: true,
    },
    seq: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      screenSize: this.$store.state.screenSize,
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
        if (
          products[i].headerLabel === this.headerLabel &&
          products[i].seq === this.seq
        ) {
          let product1 = {
            name: products[i].name,
            headerLabel: products[i].headerLabel,
            height: products[i].height,
            src: require(`@/assets/img/products/${products[i].image[n].url}`),
          };
          let product2 = {
            name: products[i].name,
            headerLabel: products[i].headerLabel,
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
    getImgHeight(height) {
      let adjust = 0;
      if (this.screenSize > 768) {
        adjust = parseInt(height.replace("px", ""));
      } else {
        adjust = parseInt(height.replace("px", "")) / 2;
      }
      return `${adjust}px`;
    },
  },
  created() {
    this.mode = this.$store.state.mode;
    this.filterProducts();
  },
};
</script>

<style>
.img-width-150 {
  width: 150px;
  height: auto;
}

.img-width-450 {
  width: 450px;
  height: auto;
}
</style>
