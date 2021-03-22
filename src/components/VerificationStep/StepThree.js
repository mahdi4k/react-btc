import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
class StepThree extends Component {
    state = {
        accountNumber: '',
        cartNumber: '',
        shabaNumber: ''
    }
    handleUserAccountInput = e => {
        this.setState({accountNumber: e.target.value});
    };
    handleUserCartInput = e => {
        this.setState({cartNumber: e.target.value});
    };
    handleUsershabaNumberInput = e => {
        this.setState({shabaNumber: e.target.value});
    };

    render() {
        return (
            <>
                <div className='stepThree p-4 text-white text-right dir-rtl'>


                    <p className='my-3 '>آپلود مدارک</p>
                    <div className="input-group  flex-md-row mb-5">
                        <Form className='d-flex  flex-wrap w-100'>
                            <p>شماره حساب</p>
                            <div className="input-group mb-3">

                                <input onChange={this.accountNumber}   type="text" value={this.state.handleUserAccountInput}
                                       className="form-control text-right"
                                       aria-label="Username"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"  ><i className='fal fa-user-alt'></i></span>
                                </div>
                            </div>
                            <p>شماره کارت</p>
                            <div className="input-group mb-3">

                                <input onChange={this.cartNumber}   type="text" value={this.state.handleUserCartInput}
                                       className="form-control   text-right"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"  ><i className='fal fa-user-alt'></i></span>
                                </div>
                            </div>
                            <p>شماره شبا</p>
                            <div className="input-group mb-3">

                                <input onChange={this.shabaNumber}   type="text" value={this.state.handleUsershabaNumberInput}
                                       className="form-control   text-right"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"  ><i className='fal fa-user-alt'></i></span>
                                </div>
                            </div>
                        </Form>

                    </div>
                </div>
                <div className='d-flex mx-2 mx-md-0 justify-content-end mt-3'>
                    <p>
                        <button className='btn btn-secondary' onClick={this.props.nextStep}>مرحله بعد</button>
                    </p>
                    <p>
                        <button className='btn btn-secondary ml-3' onClick={this.props.previousStep}>مرحله قبل</button>
                    </p>
                </div>
            </>
        );
    }
}

export default StepThree;