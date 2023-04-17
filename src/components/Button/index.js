import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
    to,
    href,
    // Type button
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    // Size button
    small = false,
    large = false,
    // Disabled
    disabled = false,
    // Class
    className,
    // Icon
    leftIcon,
    rightIcon,

    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    // Event
    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listener when is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // Change: a || Link
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // className
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,

        small,
        large,

        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
