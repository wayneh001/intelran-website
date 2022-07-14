<template>
  <div>
    <table class="table">
      <thead>
        <tr class="custom-table-head">
          <th scope="col">Name</th>
          <th scope="col">Texture</th>
          <th scope="col">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr class="custom-table-body">
          <th v-for="(e, i) in table" :key="i" scope="row">
            <td>{{ e.name }}</td>
            <td>{{ e.texture }}</td>
            <td>
                <div v-for="n in e.color" :key="n" class="color-block" :class="getColor(e, n)"></div>
            </td>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { color } from "@/content/products";

export default {
  name: "CTable",
  props: {
    table: {
      type: Array,
      require: true,
    },
    mode: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      colorArray: {
        dual: [],
        matteABS: [],
        aluminumAlloy: [],
      }
    };
  },
  methods: {
    getColor(e, n) {
      let colorName = "";
      switch (e.texture) {
        case "Matte ABS":
          switch (e.color) {
            case 1:
              if (e.name === "Dimmable Recessed") {
                colorName = "White"
              } else {
                colorName = "Space-Gray"
              }
              break;
            case 2:
              colorName = this.colorArray.dual[n];
              break
            case 10:
              colorName = this.colorArray.matteABS[n];
              break
          }
          break
        case "Aluminum Alloy":
          colorName =  this.colorArray.aluminumAlloy[n];
          break
        case "Glass":
          colorName = "Glass";
          break
      }
      return colorName
    },
    creatArray() {
      for (let i = 0; i <= color.length; i++) {
        switch (i) {
          case( i <= 1):
            this.colorArray.dual.push(color[i].name);
            break
          case( i > 2 && i <= 12 ):
            this.colorArray.matteABS.push(color[i].name);
            break
          case( i > 12 ):
            this.colorArray.aluminumAlloy.push(color[i].name);
        }
      }
    }
  },
  created() {
    this.creatArray();
  }
};
</script>

<style></style>
