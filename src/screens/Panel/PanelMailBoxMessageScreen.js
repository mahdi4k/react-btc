import React , {useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Dropdown} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import {Editor} from "react-draft-wysiwyg";
const PanelMailBoxMessageScreen = () => {
    const [editorState , setEditorState] = useState('')

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity mailBox dir-rtl my-4 py-3 '>

                <Row>
                    <Col className='d-flex flex-column  ' md={3}>
                        <button className='btn mailBox-btn'><i className='fal fa-pencil'> </i>ارسال تیکت</button>
                        <ListGroup variant="flush mt-3">
                            <ListGroup.Item className='listActive'><i
                                className='fal fa-envelope'> </i><span>تیکت ها</span> <span className='mr-1'>105</span>
                            </ListGroup.Item>
                            <ListGroup.Item><i className="fal fa-inbox"> </i><span>تیکت های مدیریت</span> <span
                                className='mr-1'>12</span> </ListGroup.Item>
                            <ListGroup.Item><i className="fal fa-compass"> </i><span>تیکت های پشتیبانی</span> <span
                                className='mr-1'>7</span> </ListGroup.Item>
                            <ListGroup.Item><i className="fal fa-trash"> </i><span>تیکت های حذف شده</span> <span
                                className='mr-1'>7</span> </ListGroup.Item>
                        </ListGroup>


                        <ListGroup variant="flush mt-3">
                            <ListGroup.Item><span className='ml-2'>عادی</span><i
                                className='fas text-primary fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item><span className='ml-2'>مدیریت</span><i
                                className='fas text-danger fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item><span className='ml-2'>پشتیبانی</span><i
                                className='fas text-info fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item><span className='ml-2'>حذف شده</span><i
                                className='fas text-warning fa-dot-circle'> </i>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col col-md={9}>
                        <div className='mailBoxMessage'>
                            <ButtonGroup className='d-table'>
                                <DropdownButton as={ButtonGroup} title={<i className='fal fa-tag'> </i>}
                                                id="bg-nested-dropdown">
                                    <Dropdown.Item className='btn-default' eventKey="1">مدیریت</Dropdown.Item>
                                    <Dropdown.Item className='btn-default' eventKey="2">پشتیبانی</Dropdown.Item>
                                    <Dropdown.Item className='btn-default' eventKey="3">معمولی</Dropdown.Item>
                                </DropdownButton>
                                <Button variant="light"><i className="fal fa-sign-out"> </i></Button>
                                <Button variant="light"><i className="fal fa-inbox"> </i></Button>
                                <Button variant="light"><i className='fal fa-compass'> </i></Button>
                            </ButtonGroup>

                            <div className="d-flex flex-wrap leftSide py-3">
                                <div className="col-md-6 toolbar-left">

                                    <div className="d-flex  align-items-center">
                                       <span className="mr-3">
                                       <img src="http://via.placeholder.com/150"
                                            className="img-fluid wd-40 rounded-circle" alt=""/>
                                       </span>
                                        <div className="text-left">
                                            <div className="tx-bold text-white mr-3">تیم پشتیبانی</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-white text-right hidden-xs">

                                    <div>
                                        <p className="mg-0"><small>12 آذرماه 1399</small></p>
                                        <LinkContainer to="/#">
                                            <div>
                                                <i className="fa fa-link"> </i>
                                                <strong>Your-files.zip</strong>
                                            </div>
                                        </LinkContainer>
                                    </div>
                                </div>
                                <div className="text-right toolbar-text col-12 text-white">
                                    <div className='border-top border-gray mt-4 w-95 mx-auto pt-4'>
                                        با سلام و وقت بخیر
                                        <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان
                                            گرافیک است.</p>
                                        <p><em>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است.</em></p>
                                        <blockquote className="blockquote tx-15">
                                            <p className="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                چاپ و
                                                با استفاده از طراحان گرافیک است.</p>
                                            <p>با احترام</p>
                                            <p className='font-weight-bold'>تیم پشتیبانی</p>

                                        </blockquote>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="text-right attach">
                                        <p className="my-4 border-top pt-4 border-gray">
                                            <i className="fa fa-paperclip text-white"> </i>
                                            <span className='text-white'>ضمائم  تیکت </span>
                                            <span className='text-white'>(5+) - </span>
                                            <a className='text-white' href="/#">دانلود همه</a> | <a
                                            className='text-white' href="/#">مشاهده همه</a>
                                        </p>
                                        <ul className="list-unstyled list-inline ">
                                            <li className="list-inline-item">
                                                <a href="" className="d-block ">
                                                    <div className="mail-file-img">
                                                        <img src="http://via.placeholder.com/150x100"
                                                             className="img-fluid wd-100" alt=""/>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="text-main">Nature.jpg</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="" className="d-block">
                                                    <div className="mail-file-img">
                                                        <img src="http://via.placeholder.com/150x100"
                                                             className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="text-main">Forest.png</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="" className="d-block">
                                                    <div className="mail-file-img">
                                                        <img src="http://via.placeholder.com/150x100"
                                                             className="img-fluid wd-100"/>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="text-main">Forest.png</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-inline-item mr-3">
                                                <a href="#" className="d-block  ">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center rounded card-icon-primary">
                                                        <i className="fal h1 fa-file-word"> </i>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="text-main mg-0">Reports.doc</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-inline-item mr-3">
                                                <a href="#" className="d-block">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center rounded card-icon-primary">
                                                        <i className="fal h1 fa-file-word"> </i>
                                                    </div>
                                                    <div className="caption">
                                                        <p className="text-main mg-0">Project.zip</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className='mt-5 text-right text-white mb-4'>پاسخ به پیام</p>
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={setEditorState}
                                    />;
                                </div>
                            </div>

                        </div>

                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default PanelMailBoxMessageScreen;