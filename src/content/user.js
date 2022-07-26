export const account = {
  info: {
    name: "Wayne Huang",
    password: "wayne123",
    email: "wayne@intelran.com",
    contact: "6105661111",
  },
  address: {
    line1: "829 N Providence Rd",
    line2: "Media",
    zipCode: "19063",
    state: "Pennsylvania",
  },
  payment: {
    card: "4475-9840-5720-4268",
    expire: "08/2025",
    cvc: "720",
  },
};

export const cart = {
  selectedProducts: [
    {
      name: "Universal Switch",
      texture: "Matte ABS",
      headerLabel: "Light",
      price: 89,
      height: "200px",
      color: "Ferrari-Red",
      src: "/img/UniversalSwitch@Ferrari-Red.a63cd90b.png",
      quantity: 1,
      sum: 89,
      config: [
        "Home",
        "Leaving",
        "Morning",
        "Night",
        "Chandelier",
        "Downlight",
        "Lamp",
        "Strip",
      ],
      uid: "30475abe-0a30-11ed-861d-0242ac120002",
    },
    {
      name: "Blinds Driver",
      texture: "Matte ABS",
      headerLabel: "Blinds",
      price: 179,
      height: "150px",
      color: "Snow-White",
      src: "/img/BlindsDriver@Snow-White.ac096894.png",
      quantity: 1,
      sum: 179,
      config: ["3.5"],
      uid: "a0bb2f82-0a30-11ed-861d-0242ac120002",
    },
    {
      name: "Temp. & Humidity Sensor",
      texture: "Matte ABS",
      headerLabel: "Environment",
      price: 29,
      height: "150px",
      color: "Snow-White",
      src: "/img/Temp.&HumiditySensor@Snow-White.891634fd.png",
      quantity: 1,
      sum: 29,
      config: [],
      uid: "8db892c2-0a34-11ed-861d-0242ac120002",
    },
  ],
  service: {
    installation: {
      enabled: true,
      fee: 29,
    },
    extendedWarranty: {
      enabled: false,
      fee: 29,
    },
  },
  total: 326,
};

export const order = [
  {
    uid: "e2748313-000d-4974-8b4e-364e3bd43ed9",
    no: "12835202",
    date: "2022-07-23 09:52:00",
    cart: {
      selectedProducts: [
        {
          name: "Universal Switch",
          texture: "Matte ABS",
          headerLabel: "Light",
          price: 89,
          height: "200px",
          color: "Hawaiian-Blue",
          src: "/img/UniversalSwitch@Ferrari-Red.a63cd90b.png",
          quantity: 1,
          sum: 89,
          config: [
            "Home",
            "Leaving",
            "Morning",
            "Night",
            "Chandelier",
            "Downlight",
            "Lamp",
            "Strip",
          ],
          uid: "30475abe-0a30-11ed-861d-0242ac120002",
        },
        {
          name: "Blinds Driver",
          texture: "Matte ABS",
          headerLabel: "Blinds",
          price: 179,
          height: "150px",
          color: "Snow-White",
          src: "/img/BlindsDriver@Snow-White.ac096894.png",
          quantity: 1,
          sum: 179,
          config: ["3.5"],
          uid: "a0bb2f82-0a30-11ed-861d-0242ac120002",
        },
        {
          name: "Temp. & Humidity Sensor",
          texture: "Matte ABS",
          headerLabel: "Environment",
          price: 29,
          height: "150px",
          color: "Snow-White",
          src: "/img/Temp.&HumiditySensor@Snow-White.891634fd.png",
          quantity: 1,
          sum: 29,
          config: [],
          uid: "8db892c2-0a34-11ed-861d-0242ac120002",
        },
      ],
      service: {
        installation: {
          enabled: true,
          fee: 29,
        },
        extendedWarranty: {
          enabled: false,
          fee: 29,
        },
      },
      total: 326,
    },
    receiver: {
      info: {
        name: "Wayne Huang",
        contact: "6105661111",
      },
      address: {
        line1: "829 N Providence Rd",
        line2: "Media",
        zipCode: "19063",
        state: "Pennsylvania",
      },
    },
    payment: {
      card: "4475-9840-5720-4268",
      expire: "08/2025",
      cvc: "720",
    },
    shipping: {
      status: "Shipping",
      no: "67332128",
    },
  },
  {
    uid: "f6d74f5f-558e-41e6-9579-b5182ec53c29",
    no: "56236296",
    date: "2022-07-10 19:26:00",
    cart: {
      selectedProducts: [
        {
          name: "Camera",
          texture: "Matte ABS",
          headerLabel: "Environment",
          price: 129,
          height: "300px",
          color: "Snow-White",
          src: "/img/Camera@Snow-White.8ce36b01.png",
          quantity: 1,
          sum: 129,
          config: [],
          uid: "b77b48d6-0a82-11ed-861d-0242ac120002",
        },
      ],
      service: {
        installation: {
          enabled: false,
          fee: 13,
        },
        extendedWarranty: {
          enabled: false,
          fee: 13,
        },
      },
      total: 129,
    },
    receiver: {
      info: {
        name: "Wayne Huang",
        contact: "6105661111",
      },
      address: {
        line1: "829 N Providence Rd",
        line2: "Media",
        zipCode: "19063",
        state: "Pennsylvania",
      },
    },
    payment: {
      card: "4475-9840-5720-4268",
      expire: "08/2025",
      cvc: "720",
    },
    shipping: {
      status: "Shipped",
      no: "30665382",
    },
  },
];
