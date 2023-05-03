import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    submit = false,
    next = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    warning = false,
    children,
    className,
    onClick, 
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    // Remove event listener when btn is disabled
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        submit,
        next,
        outline,
        warning,
        text,
        disabled, 
        rounded,
        small,
        large
    })

    return ( 
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;