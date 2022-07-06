import './Login.css';
import useInput from '../../hooks/use-input';
import Storage from '../Storage/Storage';

const Login = ({ setIsLogin, setUserInfo }) => {
  // emailValidate: 계정@도메인.최상위도메인
  const emailValidate = (value) =>
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value);

  // passwordValidate: 최소 8자, 하나 이상의 대문자, 하나의 숫자 및 하나의 특수 문자
  const passwordValidate = (value) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidate);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidate);

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) {
      return;
    }

    const USER_KEY = 'user';
    Storage.setItem(USER_KEY, enteredEmail);
    setIsLogin(true);
    setUserInfo(Storage.getItem(USER_KEY));

    resetPasswordInput();
    resetEmailInput();
  };

  const passwordInputClasses = passwordInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <div className="allDiv">
      <div className="topmidDiv">
        <div className="topDiv">
          <div aria-disabled="false" role="button">
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </div>
        </div>
        <div className="midDiv">
          <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClasses}>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailInputHasError && (
                <p className="error-text">이메일 형식이 틀렸습니다.</p>
              )}
            </div>
            <div className={passwordInputClasses}>
              <label htmlFor="password">비밀번호</label>
              <input
                type="text"
                id="password"
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              {passwordInputHasError && (
                <p className="error-text">
                  잘못된 비밀번호입니다. ( * 최소 8자, 하나 이상의 대문자,
                  하나의 숫자 및 하나의 특수 문자)
                </p>
              )}
            </div>

            <div className="form-submit">
              <button className="login_button" disabled={!formIsValid}>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
