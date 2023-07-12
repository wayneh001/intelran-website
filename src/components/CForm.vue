<template>
  <div>
    <div v-if="!auth">
      <CLogin :mode="mode" @reload="reload"/>
    </div>
    <div v-else>
      <div>
        <div v-if="headerLabel === 'Account'" :mode="mode">
          <CAccount :mode="mode" @showToast="showToast"/>
        </div>
      </div>
      <div>
        <div v-if="headerLabel === 'Cart'">
          <CCart
              v-if="!orderPlaced"
              :mode="mode"
              @showToast="showToast"
              @toPlaceOrder="toPlaceOrder"
          />
          <CPlaceOrder
              v-if="orderPlaced"
              :mode="mode"
              @cancelPlaceOrder="cancelPlaceOrder"
              @finishedPlaceOrder="finishedPlaceOrder"
              @showToast="showToast"
          />
        </div>
      </div>
      <div v-if="headerLabel === 'Order'">
        <COrder :mode="mode" @showToast="showToast"/>
      </div>
    </div>
  </div>
</template>

<script>
import CLogin from "@/components/CLogin";
import CAccount from "@/components/Form/CAccount";
import CCart from "@/components/Form/CCart";
import CPlaceOrder from "@/components/Form/CPlaceOrder";
import COrder from "@/components/Form/COrder";

export default {
  name: "CForm",
  components: {CLogin, CAccount, CCart, CPlaceOrder, COrder},
  props: {
    headerLabel: {
      type: String,
      require: true,
    },
  },
  computed: {},
  data() {
    return {
      mode: "",
      auth: this.$store.state.auth,
      orderPlaced: false,
    };
  },
  methods: {
    toConfig() {
      this.$emit("toConfig");
    },
    toPlaceOrder() {
      this.orderPlaced = true;
    },
    finishedPlaceOrder() {
      this.orderPlaced = false;
    },
    cancelPlaceOrder() {
      this.orderPlaced = false;
    },
    reload() {
      this.$emit("reload");
    },
    showToast(msg) {
      this.$emit("showToast", msg);
    }
  },
  created() {
    this.mode = this.$store.state.mode;
  },
};
</script>

<style></style>
