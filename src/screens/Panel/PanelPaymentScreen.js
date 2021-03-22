import React, {useState} from 'react';
import {Container, Image} from "react-bootstrap";
import '../../panel.scss'
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PanelPaymentScreen = () => {
    const [CartHandleShow, setCartHandleShow] = useState(false);
    const [AccountHandleShow, setAccountCartHandleShow] = useState(false);
    const [cartBank, setCartBank] = useState('')
    const CartHandleClose = () => setCartHandleShow(false);
    const handleShowCart = () => setCartHandleShow(true);

    const AccountHandleClose = () => setAccountCartHandleShow(false);
    const AccountHandleShowCart = () => setAccountCartHandleShow(true);
    return (
        <>
            <Container className='bg-secondary w3-animate-opacity  userPayment my-4 py-3 '>

                <h4 className='text-right my-4 text-white'>ایجاد حساب بانکی</h4>
                <div className='userPaymentBg p-4'>
                    <h6 className='text-right my-4 text-white'>تعریف حساب بانکی و تایید آن</h6>


                    <p className='w-100 text-right mr-3 dir-rtl'>
                        دقت شود شماره کارت و شماره شبا وارده حتما باید متعلق به شما و متصل به یک حساب بانکی یکسان
                        باشد.
                        شماره کارت وشماره شبا را بدون فاصله و خط تیره وارد کنید.
                    </p>

                    <div className='d-flex w-100 mt-4 flex-wrap justify-content-end '>
                        <div className='p-4 payment-box mr-md-4 mb-3 mb-md-0'>
                            <div className='d-flex align-items-center justify-content-end'>
                                <h2 className='mb-0'>بانک ملی ایران</h2>
                                <i className='fal fa-briefcase'></i>

                            </div>
                            <h6 className='mt-0 text-right'>سعید جعفری</h6>
                            <ProgressBar variant="danger" now={63}/>
                            <p className='text-right dir-rtl mt-2'>63% تایید</p>

                        </div>
                        <div className='p-4 payment-box'>
                            <div className='d-flex align-items-center justify-content-end'>
                                <h2 className='mb-0'>بانک ملی ایران</h2>
                                <i className='fal fa-briefcase'></i>

                            </div>
                            <h6 className='mt-0 text-right'>سعید جعفری</h6>
                            <ProgressBar now={100}/>
                            <p className='text-right dir-rtl mt-2'>100% تایید</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-end mt-5'>

                        <Button variant="success" onClick={AccountHandleShowCart}>
                            افزودن حساب جدید
                        </Button>

                        <Button className='ml-3' variant="primary" onClick={handleShowCart}>
                            افزودن کارت جدید
                        </Button>


                    </div>
                </div>

            </Container>

            <Modal show={CartHandleShow} onHide={CartHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ثبت اطلاعات کارت بانکی</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="form-group">
                        <label className='float-right' htmlFor="cartBank">شماره کارت</label>
                        <input onChange={(e) => setCartBank(e.target.value)} value={cartBank} type="text"
                               className="form-control" id="cartBank"
                        />
                    </div>
                    <Image fluid src="/images/routing.png"/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CartHandleClose}>
                        لغو
                    </Button>
                    <Button variant="primary" onClick={CartHandleClose}>
                        ثبت اطلاعات کارت بانکی
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={AccountHandleShow} onHide={AccountHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ثبت اطلاعات کارت بانکی</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='paymentForm'>
                        <div className="form-group">
                            <label htmlFor="text">نام و نام خانوادگی</label>
                            <input id="text" name="text" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text1">شماره کارت</label>
                            <input id="text1" name="text1" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text2">شماره حساب</label>
                            <input id="text2" name="text2" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text3">شماره شبا</label>
                            <input id="text3" name="text3" type="text" className="form-control"/>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={AccountHandleClose}>
                        لغو
                    </Button>
                    <Button variant="primary" onClick={AccountHandleClose}>
                        ثبت اطلاعات بانکی
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PanelPaymentScreen;