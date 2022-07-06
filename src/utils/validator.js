// emailValidate: 계정@도메인.최상위도메인
export const emailValidate = (value) => {
  return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    value
  );
};

// passwordValidate: 최소 8자, 하나 이상의 대문자, 하나의 숫자 및 하나의 특수 문자
export const passwordValidate = (value) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    value
  );
};

export const whitespaceValidate = (value) => {
  return value.trim() !== '' ? true : false;
};
