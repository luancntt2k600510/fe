import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Button from "../../../Components/Button";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Login() {
  return (
    <>
      <div className={`${cx("col-lg-7")} bg-white p-4`}>
        <h1 className={`text-center fw-bold text-primary`}>Sign in to Account</h1>
        <hr className={`my-3 ${cx('hr')}`} />
        <form className={`px-3`} action="#" method="POST" id="login-form">
          <div className={`input-group input-group-lg mb-3`}>
            <div className={`${cx("inputGroupPrepend")} d-flex`}>
              <span className={`input-group-text rounded-0 ${cx('inputGroupText')}`}>
                <FontAwesomeIcon icon={faEnvelope} className={`${cx("icon")} text-center fw-normal`} />
              </span>
            </div>
            <input type="email" name="email" id="email" className={`form-control rounded-0`} placeholder="E-Mail" required />
          </div>
          <div className={`input-group input-group-lg mb-3`}>
            <div className={`${cx("inputGroupPrepend")} d-flex`}>
              <span className={`${cx("inputGroupText")} input-group-text rounded-0 `}>
                <FontAwesomeIcon icon={faKey} className={`${cx("icon")} text-center fw-normal`} />
              </span>
            </div>
            <input type="password" name="password" id="password" className={`form-control rounded-0`} placeholder="Password" autoComplete="off" minLength="8" required />
          </div>
          <div className={`mb-3 clearfix`}>
            {/* <div className={`custom-control custom-checkbox float-left`}>
              <input type="checkbox" className={cx("customControlInput")} id="customCheck" name="rem" />
              <label className={cx("customControlLabel")} htmlFor="customCheck"> Remember me </label>
            </div> */}
            <Form.Group className={`${cx("custom-control-label")} float-left ${cx('custom-control')}`} controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className={`${cx("forgot")} float-end`}>
              <Link to="/forgot" className={cx("forgot-link")}> Forgot Password? </Link>
            </div>
          </div>
          <div className={`mb-3`}>
            <Button text submit> Sign In </Button>
          </div>
        </form>
      </div>
      <div className={`${cx("myColor", "col-lg-5")} d-flex flex-column justify-content-center p-4`}>
        <h1 className={`text-center fw-bold text-white`}>Hello Friends!</h1>
        <hr className={`${cx("myHr")} my-3`} />
        <p className={`text-center fw-bolder text-light lead`}> Enter your personal details and start your journey with us! </p>
        <Link className={"text-center"} to="/register">
          <Button next className={`${cx("myLinkBtn")} mt-4`}> Register </Button>
        </Link>
      </div>
    </>
  );
}

export default Login;
