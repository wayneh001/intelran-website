export const users = [
  {
    name: "",
    password: "",
    email: "",
    contact: "",
    address: [
      {
        line1: "",
        line2: "",
        zipCode: "",
        state: "",
      },
    ],
    payment: [
      {
        card: "",
        expireDate: "",
        cvc: "",
      },
    ],
    cart: {
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
    },
    favorite: [
      {
        productName: "",
        texture: "",
        color: "",
        quantity: 1,
        configuration: [],
      },
    ],
    orders: {
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
      total: 0,
      shipping: "",
      status: "",
    }
  },

];
