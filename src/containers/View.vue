<template>
  <div></div>
</template>

<script>
import CNav from "@/components/CNav";
import CHeader from "@/components/CHeader";
import CDisplay from "@/components/CDisplay";
import CTable from "@/components/CTable";
import CFooter from "@/components/CFooter";
import CAlert from "@/components/CAlert";
export default {
  name: "view",
  components: [
    { CNav },
    { CHeader },
    { CDisplay },
    { CTable },
    { CFooter },
    { CAlert },
  ],
  props: {
    content: {
      type: String,
      require: true,
    },
  },
  data() {},
  methods: {},
};
</script>

<style></style>