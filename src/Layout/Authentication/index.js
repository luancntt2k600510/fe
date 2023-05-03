import classNames from "classnames/bind";
import styles from "./Authentication.module.scss";

const cx = classNames.bind(styles);
function Authentication({ children }) {
  return (
    <div className={`bg-info`}>
      <div className={`container`}>
        <div className={`row ${cx('wrapper')} justify-content-center`}>
          <div className={`my-auto ${cx('myShadow', 'col-lg-10')}`}>
            <div className={`row`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
