import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
class StepTwo extends Component {

    render() {
        return (
            <>
                <div className='stepTwo p-4 text-white text-right dir-rtl'>


                    <p className='my-3 '>آپلود مدارک</p>
                    <div className="input-group mb-5">
                        <Form>
                            <Form.File
                                id="custom-file"
                                label="آپلود مدارک"
                                placeholder="آپلود مدارک"
                                text='adf'
                                custom
                            />
                        </Form>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="fileUpload"><i className='fal fa-file-upload'> </i></span>
                        </div>
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

export default StepTwo;