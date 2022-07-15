<template>
  <div>
    <div class="row">
      <div v-for="(e, i) in data" :key="i" class="col-12 col-md-6">
        <div class="mb-5">
          <div class="mb-3 w-100">
            <label class="form-label">No.</label>
            <input
              type="text"
              class="form-control"
              v-model="value.no"
              disabled
            />
          </div>
          <div class="mb-3 w-100">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-control"
              v-model="value.date"
              disabled
            />
          </div>
        </div>
        <div class="mb-5">
          <div
            v-for="(e, i) in value.products"
            :key="i"
            class="d-flex justify-content-center align-items-between w-100"
          >
            <span>{{ e.name }}</span
            ><span>X {{ e.quantity }}</span>
          </div>
        </div>
        <div class="mb-5">
          <div class="mb-3 w-100">
            <label class="col-form-label me-2">Installation</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="true"
                checked
                v-model="value.service.installation.enabled"
                disabled
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="false"
                checked
                v-model="value.service.installation.enabled"
                disabled
              />
              <label class="form-check-label">No</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.installation.fee
            }}</label>
          </div>
          <div class="mb-3 w-100">
            <label class="col-form-label me-2">Extended Warranty</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="true"
                checked
                v-model="value.service.extendedWarranty.enabled"
                disabled
              />
              <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="false"
                checked
                v-model="value.service.extendedWarranty.enabled"
                disabled
              />
              <label class="form-check-label">No</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.extendedWarranty.fee
            }}</label>
          </div>
        </div>
        <div class="mb-5">
          <div class="d-flex justify-content-center align-items-between w-100">
            <span>Total</span><span>{{ value.total }}</span>
          </div>
        </div>
        <div class="mb-5">
          <div class="d-flex justify-content-center align-items-between w-100">
            <span>Shipping</span><a href="#"><span>{{ value.shipping }}</span></a>
          </div>
        </div>
        <button type="button" class="btn btn-primary w-100">Return and Refund</button>
        <button v-if="value.status === 'finished'" type="button" class="btn btn-danger w-100">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPlaceOrder",
  props: {
    data: {
      type: Array,
    }
  },
  data() {
    return {
      value: {
        no: "",
        date: "",
        products: [
          {
            name: "",
            texture: "",
            color: "",
            quantity: 1,
            Config: [],
          },
        ],
        service: {
          installation: {
            enabled: true,
            fee: 0,
          },
          extendedWarranty: {
            enabled: true,
            fee: 0,
          },
        },
        payment: {
          card: "",
          expireDate: "",
          cvc: "",
        },
        receiver: {
          name: "",
          contact: "",
          address: {
            line1: "",
            line2: "",
            zipCode: "",
            state: "",
          },
        },
        total: 0,
        shipping: "",
        status: "",
      },
    };
  },
  methods: {
    fetchList() {

    },
    updateOne() {

    },
    deleteOne() {
      
    }
  }
};
</script>

<style></style>
