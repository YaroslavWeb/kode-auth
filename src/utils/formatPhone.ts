// Input variants:
// +7 (999) 999-99-99
// +7 999 999 99 99
// 8 999 999 99 99
// 8999999999

// Output: +7 (950) 999-99-99

const regExpNumber = /\d/;

export const getFormatedServerPhone = (phone: string): string => {
  let formatedPhone = "";

  Array.from(phone).forEach((char) => {
    if (regExpNumber.test(char)) {
      formatedPhone += char;
    }
  });

  return formatedPhone;
};

export const getFormatedClientPhone = (phone: string): string => {
  let formatedPhone = "+7 (";
  const numbers = getFormatedServerPhone(phone);

  Array.from(numbers).forEach((digit, idx) => {
    switch (idx) {
      case 1:
        formatedPhone += digit;
        break;
      case 2:
        formatedPhone += digit;
        break;
      case 3:
        formatedPhone += digit + ") ";
        break;
      case 4:
        formatedPhone += digit;
        break;
      case 5:
        formatedPhone += digit;
        break;
      case 6:
        formatedPhone += digit + "-";
        break;
      case 7:
        formatedPhone += digit;
        break;
      case 8:
        formatedPhone += digit + "-";
        break;
      case 9:
        formatedPhone += digit;
        break;
      case 10:
        formatedPhone += digit;
        break;
    }
  });

  return formatedPhone;
};
