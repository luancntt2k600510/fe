import classNames from 'classnames/bind';
import styles from './Forgot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';

const cx = classNames.bind(styles);
function Forgot() {
  return (
    <>
      <div className={`${cx('col-lg-7')} p-4 bg-white`}>
        <h1 className={`text-center fw-bold text-primary`}>Forgot Your Password?</h1>
        <hr className={`my-3 ${cx('hr')}`} />
        <p className={`lead text-center text-secondary`}>
          To reset your password, enter the registered e-mail address and we
          will send you password reset instructions on your e-mail!
        </p>
        <form action='#' method='POST' className={`px-3`} id='forgot-form'>
          <div id='forgotAlert'></div>
          <div className={`input-group input-group-lg mb-3`}>
            <div className={`${cx('inputGroupPrepend')} d-flex`}>
              <span className={`${cx('inputGroupText')} input-group-text rounded-0`}>
                <FontAwesomeIcon icon={faEnvelope} className={`${cx('icon')}`}/>
              </span>
            </div>
            <input type='email' name='email' className={`form-control rounded-0`} placeholder='E-Mail' required />
          </div>
          <div className={`mb-3`}>
            <Button text submit>Reset Password</Button>
          </div>
        </form>
      </div>
      <div className={`${cx('myColor', 'col-lg-5')} d-flex flex-column justify-content-center myColor p-4`}>
        <h1 className={`text-center fw-bold text-white`}>Reset Password!</h1>
        <hr className={`${cx('myHr')} my-4`} />
        <Link className={`text-center`} to='/login'>
          <Button next>Back</Button>
        </Link>
      </div>
    </>
  );
}

export default Forgot;
