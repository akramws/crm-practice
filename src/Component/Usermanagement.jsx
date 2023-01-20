import React from 'react';
import './Style/Usermanagement.css';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { BiReset } from 'react-icons/bi'
import { TfiExport } from 'react-icons/tfi'
import { FaFilter } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md';
import { Switch } from 'antd';
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineRight } from 'react-icons/ai'

const UserManagement = () => {
    return (
        <div>
            <div className='userHeader'>
                Header
            </div>
            <div className='usermanagementmaindiv'>
                <div className='usermanagementmain'>
                    <header>
                        <div className='userManagementHead'>
                            <div>
                                <FiSearch className='userManagmentsearch' />
                                <input type="text" placeholder='Search Candidate' />
                                <button className='searchAnyBut'>Search Any <AiOutlineDown className='userManagementdown' style={{ fontSize: '13px' }} /></button>
                            </div>
                            <div className='userManagmentText'>
                                <p>User Management</p>
                            </div>
                            <div className='actinactbut'>
                                <button className='useractive'>Active <br />110</button>
                                <button className='userinactive'>InActive <br />20</button>
                            </div>
                            <div className='userheaderbut'>
                                <button className='userReset'><BiReset style={{ fontSize: '17px', color: 'white' }} /> Reset</button>
                                <button className='userExport'><TfiExport style={{ color: 'white' }} /> Export</button>
                                <button className='userAdd'>Add User</button>
                            </div>
                        </div>
                    </header>
                    <div>
                        <table className='userTable'>
                            <thead className='userThead'>
                                <tr className='usertheadtr'>
                                    <th className='userAllCheckbox1'><input className='userAllCheckbox' type="checkbox" /></th>
                                    <th>ID <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>User Name <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>Email ID <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>Contact Number <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>Role <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>Status <FaFilter style={{fontSize:'13px'}}/></th>
                                    <th>Actions</th>
                                    <th></th>
                                    <th className='userDelete1'><MdDelete className='userDelete' /><span className='userDelete'>Delete</span></th>
                                </tr>
                            </thead>
                            <tbody className='userTbody'>
                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610211</td>
                                    <td>Ranjit Sing Tanwar</td>
                                    <td>Ranjit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch className='switch1' defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' />
                                    </td>
                                    <td><BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610211</td>
                                    <td>Ranjit Sing Tanwar</td>
                                    <td>Ranjit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch className='switch1' defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' />
                                    </td>
                                    <td><BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610211</td>
                                    <td>Ranjit Sing Tanwar</td>
                                    <td>Ranjit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch className='switch1' defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' />
                                    </td>
                                    <td><BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className='userAllCheckbox1'><input type="checkbox" /></td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td><Switch className='switch1' style={{ color: 'black' }} defaultChecked={false} checkedChildren='Active' unCheckedChildren='Inactive' /></td>
                                    <td> <BsFillPersonCheckFill /> Edit</td>
                                    <td>Change Password</td>
                                </tr>
                            </tbody>
                        </table>
                        <footer className='userFooter'>
                            <div className='userFooterDiv'>
                                <AiOutlineDoubleLeft className='footerlefticon' /><AiOutlineDoubleRight className='footerRighticon' />
                            </div>
                            <div className='userFootersecounddiv'>
                                <div>
                                    <p>Showing 1 to 10 of 5545 entries</p>
                                </div>
                                <div className='usertextdiv'>
                                    <div className='userResultdiv'>
                                        <span>Result per page <button className='userResultbut'>10</button><button className='userResultbut1'><AiOutlineDown/></button> </span>
                                    </div>
                                    <div className='userFooterbutton'>
                                        <button id='userFooterbutton1'>1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                        <button>5</button>
                                        <button>6</button>
                                        <button>7</button>
                                        <button>8</button>
                                        <button>9</button>
                                        <button><AiOutlineRight/></button>
                                        <button><AiOutlineDoubleRight/></button>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManagement