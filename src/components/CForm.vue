<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div v-if="label === 'Account'">
          <CAccount :data="data" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div v-if="label === 'Cart'">
          <CCart
            v-if="!orderPlaced"
            :data="data"
            @toConfig="toConfig"
            @toPlaceOrder="toPlaceOrder"
          />
          <CPlaceOrder v-if="orderPlaced" />
        </div>
        <div v-if="label === 'Order'">
          <COrder :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CAccount from "@/components/Form/CAccount";
import CCart from "@/components/Form/CCart";
import CPlaceOrder from "@/components/Form/CPlaceOrder";
import COrder from "@/components/Form/COrder";

export default {
  name: "CForm",
  components: [{ CAccount }, { CCart }, { CPlaceOrder }, { COrder }],
  props: {
    label: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      data: [],
      orderPlaced: false,
    };
  },
  methods: {
    fetchData() {
      console.log("fetchData");
    },
    toConfig() {
      this.$emit("toConfig");
    },
    toPlaceOrder() {
      this.orderPlaced = true;
    },
  },
  created() {
    this.getForm();
  },
};
</script>

<style></style>
