import React, {useState} from 'react';
import {Container, Table} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import '../../panel.scss'
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelReffralsScreen = () => {
    const [inviteFriend, setInviteFriend] = useState('https://www.example.com')



    return (
        <>
            <Container className='bg-secondary w3-animate-opacity reffrals my-4 py-3 '>

                <h4 className='text-right my-4 text-white'>زیر مجموعه گیری</h4>

                <Row>

                    <Col md={6}>


                        <div className='d-flex justify-content-between align-items-center bg-header px-3 py-3'>

                            <div className='header-top-currency-list'>
                                <i onClick={removeSection} className='fal fa-times'></i>
                                <i onClick={makeFullWith} className='fal fa-expand'></i>
                                <i className='fal fa-redo'></i>
                                <i onClick={slideEffect} className='fal fa-angle-down'></i>
                            </div>

                            <p>آمار کاربران معرفی شده توسط شما</p>
                        </div>


                        <div  className=' card-body'>
                            <p className='invite-text'>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)
                                به متنی آزمایشی و
                                بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن
                                به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح</p>

                            <div className="input-group my-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">کپی</span>
                                </div>
                                <input onChange={e => setInviteFriend(e.target.value)} style={{height: ' 40px'}} type="text"
                                       value={inviteFriend}
                                       className="form-control   text-right"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>ساخت کد دعوت</Card.Header>
                            <Card.Body>
                                <Card.Title className='d-flex  justify-content-end '><span
                                    className='mr-2'>% 30 </span><p>: نرخ کارمزد اهدایی به شما </p></Card.Title>
                                <Card.Title><p>نرخ کارمزد اهدایی به خود و دوستانتان را تنظیم کنید</p></Card.Title>

                                <div
                                    className='w-75 mx-auto d-flex align-items-center justify-content-center h2  eye-bg'>
                                    <i className='fal fa-eye'></i>
                                </div>
                                <div className='w-75 d-flex mx-auto'>
                                    <div
                                        className='col-6 sub-border-left d-flex align-items-center justify-content-center flex-column py-3'>
                                        <p>% 0 </p>
                                        <h6 className='mt-0'>سهم دوستان</h6>
                                    </div>
                                    <div
                                        className='col-6 sub-border-right  d-flex align-items-center justify-content-center flex-column py-3'>
                                        <p>% 30</p>
                                        <h6 className='mt-0'>سهم شما</h6>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end mt-2 '>
                                    <button className='btn'>30 %</button>
                                    <button className='btn'>25 %</button>
                                    <button className='btn'>15 %</button>
                                    <button className='btn'>10 %</button>
                                    <button className='btn'>5 %</button>
                                    <button className='btn'>0 %</button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>آمار کاربران معرفی شده توسط شما</p>
                    </div>
                    <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                        <thead>
                        <tr>
                            <th>مجموع کارمزد دریافتی شما</th>
                            <th>تعداد معاملات دوستان شما</th>
                            <th>تعداد دوستان شما</th>
                            <th>#</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                            <td>0 تومان</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                        <tr>

                            <td>0 تومان</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>آمار کاربران معرفی شده توسط شما</p>
                    </div>
                    <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                        <thead>
                        <tr>
                            <th>مجموع کارمزد دریافتی شما</th>
                            <th>تعداد معاملات دوستان شما</th>
                            <th>تعداد دوستان شما</th>
                            <th>#</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                            <td>0 تومان</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                        <tr>

                            <td>0 تومان</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                        </tbody>
                    </Table>
                </div>


            </Container>
        </>
    );
};

export default PanelReffralsScreen;