import React, {Component} from 'react';

class StepFour extends Component {

    render() {
        return (
            <>
                <div className='stepFour p-4 text-white text-right dir-rtl'>


                    <p className='my-3 '>با تشکر از شما</p>
                    <p className='my-3 '>بعد از بررسی اطلاعات شما از طریق سایت موارد بررسی به شما اطلاع رسانی خواهد
                        شد</p>

                </div>
                <div className='d-flex mx-2 mx-md-0 justify-content-end mt-3'>
                    <p>
                        <button disabled className='btn btn-secondary' onClick={this.props.nextStep}>مرحله بعد</button>
                    </p>
                    <p>
                        <button className='btn btn-secondary ml-3' onClick={this.props.previousStep}>مرحله قبل</button>
                    </p>
                </div>
            </>
        );
    }
}

export default StepFour;