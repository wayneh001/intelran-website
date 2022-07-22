<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="Name"
              v-model="inputValue.name"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="Contact"
              v-model="inputValue.contact"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="Address Line1"
              v-model="inputValue.address.line1"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="password"
              class="form-control shadow"
              placeholder="Address Line2"
              v-model="inputValue.address.line2"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="Zip Code"
              v-model="inputValue.address.zipCode"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="State"
              v-model="inputValue.address.state"
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
              placeholder="Card XXXX-XXXX-XXXX-XXXX"
              v-model="inputValue.payment.card"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="password"
              class="form-control shadow"
              placeholder="Expire MM/YYYY"
              v-model="inputValue.payment.expireDate"
            />
          </div>
          <div class="mb-3 w-100">
            <input
              type="text"
              class="form-control shadow"
              placeholder="CVC XXX"
              v-model="inputValue.payment.cvc"
            />
          </div>
        </div>
        <button type="button" class="btn btn-success w-100">Apple Pay</button>
        <button type="button" class="btn btn-success w-100">Google Pay</button>
        <button type="button" class="btn btn-main-light w-100">Submit</button>
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
    fetchOne() {},
    insertOne() {},
  },
};
</script>

<style></style>
