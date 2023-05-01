import classNames from "classnames/bind";
import styles from "./Authentication.module.scss";
import Forgot from "../components/Forgot";

const cx = classNames.bind(styles);
function Authentication({ children }) {
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("wrapper", "row")}>
          <div className={cx("myShadow")}>
            <div className={cx("row")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
