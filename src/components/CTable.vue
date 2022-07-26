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
            scope="col"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Name
          </th>
          <th
            scope="col"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Texture
          </th>
          <th
            scope="col"
            :class="[
              { 'custom-text-dark': this.mode === 'Light' },
              { 'custom-text-white': this.mode === 'Dark' },
            ]"
          >
            Color
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(e, i) in table"
          :key="i"
          scope="row"
          :class="[
            { 'table-body-light': this.mode === 'Light' },
            { 'table-body-dark': this.mode === 'Dark' },
          ]"
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
                class="color-block ms-0"
                :class="n"
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
