import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPlus,
    faBell as solidBell,
    faComments as solidComments,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBell as regularBell,
    faComments as regularComments,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";

import styles from "./Header.module.scss";
import Button from "~/Components/Button";
import images from "~/assets/img";
import Navbar from "../Navbar";
import Search from "../Search";
import Image from "~/Components/Images";

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;
    const [isSolidBell, setIsSolidBell] = useState(false);
    const [isSolidComments, setIsSolidComments] = useState(false);

    const iconBell = isSolidBell ? solidBell : regularBell;
    const iconComments = isSolidComments ? solidComments : regularComments;

    const handleClickBell = () => {
        setIsSolidBell(!isSolidBell);
    };

    const handleClickComments = () => {
        setIsSolidComments(!isSolidComments);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logonavbar")}>
                    <Link className={cx("left")}>
                        <img
                            className={cx("logo")}
                            src={images.logo}
                            alt="Doan"
                        />
                    </Link>
                    <Navbar />
                </div>
                <div className={cx("actions")}>
                    <Search />
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon
                                        icon={iconComments}
                                        onClick={handleClickComments}
                                    />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Notification"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon
                                        icon={iconBell}
                                        onClick={handleClickBell}
                                    />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aee057941301af2efecea5e2f7906c34~c5_300x300.webp?x-expires=1681228800&x-signature=C87GXOyHTC1dWGXZIJwLD2nymX4%3D"
                                className={cx("user-avatar")}
                                alt="Nguyen Van A"
                            />
                        </>
                    ) : (
                        <>
                            <Button text>Sign In</Button>
                            <Button warning>Log In</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
