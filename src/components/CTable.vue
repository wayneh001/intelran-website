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
        <tr
          v-for="(e, i) in table"
          :key="i"
          scope="row"
          class="custom-table-body"
        >
          <td>{{ e.name }}</td>
          <td>{{ e.texture }}</td>
          <td>
            <div
              v-for="n in e.colorOption"
              :key="n"
              class="color-block me-2"
              :class="n"
            ></div>
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
    mode: {
      type: String,
      require: true,
    },
  },
};
</script>

<style></style>
