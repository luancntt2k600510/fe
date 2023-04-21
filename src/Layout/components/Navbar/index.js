import classNames from "classnames/bind";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx("navbar")}>
            <Link to="#home" className={cx("nav")}>
                Home
            </Link>

            <Link to="#summary" className={cx("nav")}>
                Summary
            </Link>

            <Link to="#share" className={cx("nav")}>
                Share
            </Link>

            <Link to="#hotnews" className={cx("nav")}>
                Hot News
            </Link>

            <Link to="#contact" className={cx("nav")}>
                Contact
            </Link>
        </div>
    );
}

export default Navbar;
