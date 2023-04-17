import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f4f7bcd78623a63531be828d616f98be~c5_100x100.jpeg?x-expires=1681801200&x-signature=X4rSX194z5HW1hynDx%2F9bOrecwM%3D"
                alt="HaThuong"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ha Thuong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>_hthun02</span>
            </div>
        </div>
    );
}
