<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.name"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="password"
              class="form-control shadow"
              v-model="inputValue.password"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="email"
              class="form-control shadow"
              v-model="inputValue.email"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.contact"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.address.line1"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="password"
              class="form-control shadow"
              v-model="inputValue.address.line2"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.address.zipCode"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.address.state"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.payment.card"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="password"
              class="form-control shadow"
              v-model="inputValue.payment.expireDate"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              v-model="inputValue.payment.cvc"
            />
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-main-light w-100">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAccount",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      inputValue: {
        name: "",
        password: "",
        email: "",
        contact: "",
        address: {
          line1: "",
          line2: "",
          zipCode: "",
          state: "",
        },
        payment: {
          card: "",
          expireDate: "",
          cvc: "",
        },
      },
    };
  },
};
</script>

<style></style>
