import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import {DropdownButton, Dropdown, Button} from "react-bootstrap";

function SideNavbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <i onClick={showSidebar} className="fal fa-bars"> </i>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li onClick={showSidebar} className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <i className="fal fa-times"> </i>
                        </Link>
                    </li>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/'>
                            <Button className="menu-item text-right" variant="link">خانه</Button>
                        </LinkContainer>
                    </li>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/login'>
                            <Button className="menu-item text-right" variant="link">ورود/ثبت نام</Button>
                        </LinkContainer>

                    </li>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/orderOpen'>

                            <Button className="menu-item text-right" variant="link">سفارش های باز</Button>

                        </LinkContainer>
                    </li>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/tradeHistory'>

                            <Button className="menu-item text-right" variant="link">تاریخچه تجارت</Button>


                        </LinkContainer>
                    </li>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/orderList'>

                            <Button className="menu-item text-right" variant="link">لیست سفارشات</Button>

                        </LinkContainer>
                    </li>
                    <p>پنل</p>
                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel'>

                            <Button className="menu-item text-right" variant="link">خانه</Button>

                        </LinkContainer>
                    </li>


                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/faq'>

                            <Button className="menu-item text-right" variant="link">سوالات متداول</Button>

                        </LinkContainer>
                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/reffrals'>

                            <Button className="menu-item text-right" variant="link">reffrals</Button>

                        </LinkContainer>
                    </li>


                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/market'>

                            <Button className="menu-item text-right" variant="link">مارکت</Button>

                        </LinkContainer>
                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/wallet'>

                            <Button className="menu-item text-right" variant="link">wallet</Button>

                        </LinkContainer>
                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/wallet'>

                            <Button className="menu-item text-right" variant="link">کیف پول</Button>

                        </LinkContainer>
                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/TransActionHistory'>

                            <Button className="menu-item text-right" variant="link">Trans Action History</Button>

                        </LinkContainer>
                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/withdrawallist'>

                            <Button className="menu-item text-right" variant="link">withdrawallist</Button>

                        </LinkContainer>
                    </li>


                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/payment'>

                            <Button className="menu-item text-right" variant="link">payment</Button>

                        </LinkContainer>

                    </li>

                    <li onClick={showSidebar}>
                        <LinkContainer to='/panel/depositlist'>

                            <Button className="menu-item text-right" variant="link">deposit list</Button>

                        </LinkContainer>
                    </li>

                    <li>
                        <DropdownButton  variant="link" drop={'down'} id="dropdown-basic-button" title="mailbox">
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/mailbox-compose'>

                                    <Button className="menu-item text-right" variant="link">mailbox-compose</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/mailbox-message'>

                                    <Button className="menu-item text-right" variant="link">mailbox-message</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/mailbox'>

                                    <Button className="menu-item text-right" variant="link">mailbox</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>


                    <li>
                        <DropdownButton   variant="link" drop={'down'} id="dropdown-basic-button"
                                        title="پروفایل کاربری">

                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/verification'>

                                    <Button className="menu-item text-right" variant="link">verification</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/Authentication'>

                                    <Button className="menu-item text-right" variant="link">احراز هویت</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/profile'>

                                    <Button className="menu-item text-right" variant="link">پروفایل</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/Notification'>

                                    <Button className="menu-item text-right" variant="link">اعلانات</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/systemactivity'>

                                    <Button className="menu-item text-right" variant="link">system activity</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <LinkContainer onClick={showSidebar} to='/panel/invoice'>

                                    <Button className="menu-item text-right" variant="link">فاکتور</Button>

                                </LinkContainer>
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>

                </ul>
            </nav>
        </>
    );
}


export default SideNavbar;