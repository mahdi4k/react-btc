import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../panel.scss'
import ListGroup from "react-bootstrap/ListGroup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

const PanelMailBoxComposeScreen = () => {
    const [editorState , setEditorState] = useState('')
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
                            <ListGroup.Item  ><span className='ml-2'>عادی</span><i
                                className='fas text-primary fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item  ><span className='ml-2'>مدیریت</span><i
                                className='fas text-danger fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item  ><span className='ml-2'>پشتیبانی</span><i
                                className='fas text-info fa-dot-circle'> </i>
                            </ListGroup.Item>
                            <ListGroup.Item  ><span className='ml-2'>حذف شده</span><i
                                className='fas text-warning fa-dot-circle'> </i>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col col-md={9}>
                        <form>
                            <div className="form-group">
                                <input id="text" name="text" placeholder="به" type="text" className="form-control"/>
                            </div>
                            <div className='d-flex'>
                                <div className="form-group col-6 pr-0 ">
                                    <input id="text1" name="text1" placeholder="Cc" type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-6 pl-0 ">
                                    <input id="text2" name="text2" placeholder="Bcc" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input id="text3" name="text3" placeholder="موضوع" type="text" className="form-control"/>
                            </div>

                        </form>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                        />;
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default PanelMailBoxComposeScreen;