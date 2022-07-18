export const account = {
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
};

export const cart = {
  products: [
    {
      name: "",
      texture: "",
      color: "",
      quantity: 1,
      config: [],
      uid: ""
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
};

export const order = {
  no: "",
  date: "",
  products: [
    {
      name: "",
      texture: "",
      color: "",
      quantity: 1,
      config: [],
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
  uid: "",
};