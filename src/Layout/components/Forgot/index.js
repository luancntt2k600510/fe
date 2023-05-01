import classNames from "classnames/bind";
import styles from "./Forgot.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Forgot() {
  return (
    <>
      <div className={cx("background")}>
        <h1 className={cx("title")}>Forgot Your Password?</h1>
        <hr className={cx("hr")} />
        <p className={cx("lead")}>
          To reset your password, enter the registered e-mail address and we
          will send you password reset instructions on your e-mail!
        </p>
        <form action="#" method="POST" className={cx("forgotForm")}>
          <div className={cx("inputGroup")}>
            <div className={cx("inputGroupPrepend")}>
              <span className={cx("inputGroupText")}>
                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')}/>
              </span>
            </div>
            <input
              type="email"
              name="email"
              className={cx("email")}
              placeholder="E-Mail"
              required
            />
          </div>
          <div className={cx("formGroup")}>
            <input
              type="submit"
              className={cx("myBtn")}
              value="Reset Password"
            />
          </div>
        </form>
      </div>
      <div className={cx("myColor")}>
        <h1 className={cx("text-reset")}>Reset Password!</h1>
        <hr className={cx("myHr")} />
        <Link className={cx("text-center")} path="/login">
          <button className={cx("btn")}>Back</button>
        </Link>
      </div>
    </>
  );
}

export default Forgot;
