import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
import Row from "react-bootstrap/Row";

class StepFour extends Component {
    state = {
        phoneNumber: '',
        cartNumber: '',
    }
    handleUserphoneNumberInput = e => {
        this.setState({phoneNumber: e.target.value});
    };

    render() {
        return (
            <>
                <div className='stepFour p-3 text-white text-right dir-rtl'>


                    <p className='my-3 '>تلفن و آدرس خود را به طور کامل وارد کنید</p>
                    <div className="input-group  flex-md-row mb-5">
                        <Form className='d-flex  flex-nowrap w-100'>
                            <Row className='w-100'>
                                <div className="input-group col-12 mb-3">
                                    <input placeholder='تلفن ثابت همراه با پیش شماره' onChange={this.phoneNumber}
                                           type="text" value={this.state.handleUserphoneNumberInput}
                                           className="form-control text-right"
                                           aria-label="Username"/>

                                </div>
                                <div className="input-group col-12 mb-3">

                                    <Form.Group className="input-group h-50 p-0 col-12">
                                        <Form.Control className='textaria' placeholder='آدرس کامل محل اقامت'
                                                      as="textarea"/>
                                    </Form.Group>
                                </div>
                            </Row>
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

export default StepFour;