import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import styles from "./Header.module.scss";
import Button from '~/Components/Button'
import images from '~/assets/img';
import Navbar from '../Navbar';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logonavbar')}>
                    <Link className={cx('left')}>
                        <img className={cx('logo')} src={images.logo} alt='Doan' />
                    </Link>
                    <Navbar />
                </div>
                <div className={cx('actions')}>
                    <Search />
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </Tippy>
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
    )
}

export default Header;