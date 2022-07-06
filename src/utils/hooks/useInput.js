import { useRef, useState, useEffect } from 'react';

const useInput = (validateValue) => {
  const enteredValue = useRef('');
  const [isTouched, setIsTouched] = useState(false);
  const [validate, setValidate] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(!validate && isTouched);
  }, [validate, isTouched]);

  const getEnteredValue = () => {
    return enteredValue.current;
  };

  const valueChangeHandler = (event) => {
    enteredValue.current = event.target.value;
    setValidate(validateValue(enteredValue.current));
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    enteredValue.current = '';
    setIsTouched(false);
  };

  return {
    value: enteredValue.current,
    isValid: validate,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    getEnteredValue,
  };
};

export default useInput;
