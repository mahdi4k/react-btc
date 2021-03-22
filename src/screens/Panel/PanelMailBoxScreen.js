import React from 'react';
import {Container, Dropdown, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../panel.scss'
import ListGroup from "react-bootstrap/ListGroup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

const PanelMailBoxScreen = () => {
    return (
        <>
            <Container className='bg-secondary w3-animate-opacity mailBox dir-rtl my-4 py-3 '>

                <Row>
                    <Col className='d-flex flex-column justify-content-center' md={3}>
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
                    <Col className='mt-5 mt-md-0' md={9}>
                        <ButtonGroup className='d-table'>

                            <Button variant="light"><i className="fal fa-sign-out"> </i></Button>
                            <Button variant="light"><i className="fal fa-inbox"> </i></Button>
                            <Button variant="light"><i className='fal fa-compass'> </i></Button>
                            <DropdownButton as={ButtonGroup} title={<i className='fal fa-tag'> </i>}
                                            id="bg-nested-dropdown">
                                <Dropdown.Item className='btn-default' eventKey="1">مدیریت</Dropdown.Item>
                                <Dropdown.Item className='btn-default' eventKey="2">پشتیبانی</Dropdown.Item>
                                <Dropdown.Item className='btn-default' eventKey="3">معمولی</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                        <Table responsive variant="dark mailBoxList overflow-hidden header-top-currency-list-table">

                            <tbody>
                            <tr >
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-success rounded">پشتیبانی</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>

                            <tr className='active'>
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-success rounded">پشتیبانی</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-primary rounded">عادی</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>
                            <tr className='active'>
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-danger rounded">مدیریت</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>

                            <tr>
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-danger rounded">مدیریت</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>

                            <tr>
                                <td>
                                    <Form>
                                        <Form.Check custom aria-label="option 1"/>
                                    </Form>
                                </td>
                                <td><i className="fal fa-star"> </i></td>
                                <td className='no-space'>تیم پشتیبانی</td>
                                <td><a href="/mailbox-message"><span
                                    className="badge border ml-2 border-primary rounded">عادی</span>لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</a>
                                </td>
                                <td><p className="mb-0 tx-10 tx-gray-500">02-02-2019, 01:32AM</p></td>
                            </tr>

                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default PanelMailBoxScreen;