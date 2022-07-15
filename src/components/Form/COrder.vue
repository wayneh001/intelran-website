<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-5">
          <div class="mb-3 w-100">
            <label class="form-label">No</label>
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
              <label class="form-check-label">Yes</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.installation.fee
            }}</label>
          </div>
          <button type="button" class="btn btn-primary w-100">Save</button>
          <button type="button" class="btn btn-secondary w-100">Cancel</button>
        </div>
        <div class="mb-5">
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
              <label class="form-check-label">Yes</label>
            </div>
            <label class="col-form-label me-2">{{
              value.service.extendedWarranty.fee
            }}</label>
          </div>
          <button type="button" class="btn btn-primary w-100">Save</button>
          <button type="button" class="btn btn-secondary w-100">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPlaceOrder",
  data() {
    return {
      value: {
        no: "",
        date: "",
        products: [
          {
            productName: "",
            texture: "",
            color: "",
            quantity: 1,
            configuration: [],
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
};
</script>

<style></style>
