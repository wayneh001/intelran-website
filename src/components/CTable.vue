<template>
  <div>
    <table class="table">
      <thead>
      <tr
          :class="[
            { 'table-header-light': this.mode === 'Light' },
            { 'table-header-dark': this.mode === 'Dark' },
          ]"
      >
        <th
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
            scope="col"
        >
          Name
        </th>
        <th
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
            scope="col"
        >
          Texture
        </th>
        <th
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
            scope="col"
        >
          Color
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(e, i) in table"
          :key="i"
          :class="[
            { 'table-body-light': this.mode === 'Light' },
            { 'table-body-dark': this.mode === 'Dark' },
          ]"
          scope="row"
      >
        <td
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
        >
          {{ e.name }}
        </td>
        <td
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
        >
          {{ e.texture }}
        </td>
        <td class="align-middle">
          <div class="d-flex flex-wrap align-items-center">
            <div
                v-for="n in e.colorOption"
                :key="n"
                :class="n"
                class="color-block ms-0"
            ></div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CTable",
  props: {
    table: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      mode: "",
    };
  },
  created() {
    this.mode = this.$store.state.mode;
  },
};
</script>

<style></style>
