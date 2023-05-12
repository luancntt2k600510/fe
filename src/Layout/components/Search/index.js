import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless'
import { useRef, useState } from "react";

import styles from "./Search.module.scss"

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    // const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef()

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
    return ( 
            <HeadlessTippy
                interactive
                visible={showResult}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input 
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search..."
                        aria-label="Search"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                </div>
            </HeadlessTippy>
    );
}

export default Search;