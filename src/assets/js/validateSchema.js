export default {
  validate(value) {
    if (!value) {
      return "Required";
    }
    return true;
  },
  validateEmail(value) {
    if (!value) {
      return "Required";
    }
    if (!/\S+@\S+.\S+/.test(value)) {
      return "Format error";
    }
    return true;
  },
  validateContact(value) {
    if (!value) {
      return "Required";
    }
    if (!/^[0-9]*$/g.test(value)) {
      return "Format error";
    }
    return true;
  },

  validateZipCode(value) {
    if (!value) {
      return "Required";
    }
    if (!/^[0-9]{5}$/g.test(value)) {
      return "Format error";
    }
    return true;
  },
  validateCard(value) {
    if (!value) {
      return "Required";
    }
    let array = value.split("-");
    if (array.length !== 4) {
      return "Format error";
    }
    for (let i in array) {
      if (!/^[0-9]{4}$/g.test(array[i])) {
        return "Format error";
      }
    }
    
    return true;
  },

  validateExpiry(value) {
    if (!value) {
      return "Required";
    }
    let array = value.split("/");
    if (!/^[0-9]{2}$/g.test(array[0])) {
      return "Format error";
    }
    if (parseInt(array[0]) > 12 || parseInt(array[0] < 1)) {
      return "Format error";
    }
    if (!/^[0-9]{4}$/g.test(array[1])) {
      return "Format error";
    }
    if (parseInt(array[1]) < 2022) {
      return "Format error";
    }
    return true;
  },

  validateCvc(value) {
    if (!value) {
      return "Required";
    }
    if (!/^[0-9]{3}$/g.test(value)) {
      return "Format error";
    }
    return true;
  },
};
