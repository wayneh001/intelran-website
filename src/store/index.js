import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { account, cart, order } from "@/content/user";

export default createStore({
  state: {
    mode: "Light",
    auth: false,
    account: {},
    cart: {},
    order: [],
  },
  getters: {
    mode: String,
    account: Object,
    cart: Object,
    order: Array,
  },
  mutations: {
    auth(state, auth) {
      state.auth = auth;
    },
    changeMode(state, mode) {
      state.mode = mode;
    },
    fetchAccount(state) {
      state.account = account;
    },
    editAccount(state, account) {
      state.account = account;
    },
    fetchCart(state) {
      state.cart = cart;
    },
    addToCart(state, product) {
      state.cart.selectedProducts.push(product);
    },
    editCart(state, cart) {
      state.cart = cart;
    },
    placeAnOrder(state, order) {
      state.order.unshift(order);
      state.cart.selectedProducts = [];
      state.cart.service = {
        installation: {
          enabled: false,
          fee: 0,
        },
        extendedWarranty: {
          enabled: false,
          fee: 0
        },
      }
      state.cart.total = 0;
    },
    fetchOrder(state) {
      state.order = order;
    },
    editOrder(state, order) {
      state.order = order;
    },
  },
  actions: {
    login() {
      this.commit("auth", true);
      this.commit("fetchAccount");
      this.commit("fetchCart");
      this.commit("fetchOrder");
    },
    logout(vuex) {
      this.commit("auth", false);
      vuex.state.account = {};
    },
  },
  plugins: [createPersistedState()],
});
