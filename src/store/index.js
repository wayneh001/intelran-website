import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    productUid: String,
  },
  actions: {
    login() {

    },
    logout() {

    },
    fetchList() {

    },
    fetchOne() {

    },
    insertOne() {

    },
    updateOne() {

    },
    deleteOne() {

    },
  },
  plugins: [createPersistedState()],
});
