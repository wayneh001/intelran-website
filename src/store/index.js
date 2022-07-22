import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    productUid: String,
    mode: "Light",
  },
  getters: {
    mode: String,
  },
  mutations: {
    changeMode(state, mode) {
      state.mode = mode;
    },
  },
  actions: {
    login() {},
    logout() {},
    fetchList() {},
    fetchOne() {},
    insertOne() {},
    updateOne() {},
    deleteOne() {},
  },
  plugins: [createPersistedState()],
});
