import React, {Component} from 'react';
import {Link} from "react-router-dom";

class StepOne extends Component {
    state = {
        phoneNumber: ''
    }
    handleUserPhoneInput = e => {
        this.setState({ phoneNumber: e.target.value });
    };
    render() {
        return (
            <>
                <div className='StepOne p-4 text-white text-right dir-rtl'>
                    <p>
                        سطح حساب کاربری شما درحال حاضر صفر است. لطفا مراحل احراز هویت را تا تکمیل سطح یک کاربری ادامه
                        دهید.
                    </p>
                     <Link className='d-table' to='#'>
                         <p className='text-danger mt-3 h6'>قوانین سطوح کاربری</p>
                     </Link>
                    <p className='my-3   '>شماره همراه</p>
                    <div className="input-group mb-5">
                        <input placeholder='شماره همراه خود را وارد کنید' onChange={this.handleUserPhoneInput}   type="text" value={this.state.phoneNumber}
                               className="form-control   col-12 col-md-4 text-right"
                               aria-label="Username" aria-describedby="phoneSubmit"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="phoneSubmit">ارسال کد</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex mx-2 mx-md-0 justify-content-end mt-3'>
                    <p>
                        <button className='btn btn-secondary'  onClick={this.props.nextStep}>مرحله بعد</button>
                    </p>
                    <p>
                        <button disabled className='btn btn-secondary ml-3' onClick={this.props.previousStep}>مرحله قبل</button>
                    </p>
                </div>
            </>
        );
    }
}

export default StepOne;