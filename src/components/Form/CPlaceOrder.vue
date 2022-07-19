<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-3 w-100">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" v-model="inputValue.name" />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Contact</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.contact"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="mb-3 w-100">
            <label class="form-label">Line1</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.address.line1"
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Line2</label>
            <input
              type="password"
              class="form-control"
              v-model="inputValue.address.line2"
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">zipCode</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.address.zipCode"
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">State</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.address.state"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-3 w-100">
            <label class="form-label">card</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.payment.card"
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Expire</label>
            <input
              type="password"
              class="form-control"
              v-model="inputValue.payment.expireDate"
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">CVC</label>
            <input
              type="text"
              class="form-control"
              v-model="inputValue.payment.cvc"
            />
          </div>
        </div>
        <button type="button" class="btn btn-success w-100">Apple Pay</button>
        <button type="button" class="btn btn-success w-100">Google Pay</button>
        <button type="button" class="btn btn-main w-100">Submit</button>
        <button type="button" class="btn btn-secondary w-100">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPlaceOrder",
  data() {
    return {
      inputValue: {
        name: "",
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
  methods: {
    fetchOne() {

    },
    insertOne() {

    },
  }
};
</script>

<style></style>
