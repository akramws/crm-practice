import React, { useEffect, useRef, useState } from "react";
import "./Style/UserManagmentExport.css";
import "./Style/UserManagement.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { TfiExport } from "react-icons/tfi";
import { FaFilter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal, Switch, Select, } from "antd";
import { BsFillPersonCheckFill } from "react-icons/bs";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineRight,
} from "react-icons/ai";
import AddUser from "./AddUser";
import Export from "./Export";

const UserManagement = () => {
    const userReff = useRef()
    const [deletebut, setDeleteBut] = useState("0");
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const showModal1 = () => {
        setOpen1(true);
    };
    // tEST
    const [openUser, setOpenUser] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (userReff.current && !userReff.current.contains(e.target)) {

                if (e.target.className === "userAdd") {
                } else {
                    setOpenUser(false)
                }
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [userReff])

    const checkBoxFun = (e) => {
        if (e.target.checked === true) {
            setDeleteBut("1");
        } else {
            setDeleteBut("0");
        }
    };

    console.log("openUser >>", openUser);

    return (
        <>
            <Modal open={open1}>
                <div className="pop-up" title='Confirm to Delete Created By Sharif'>
                    <h1>Confirm to Delete ?</h1>
                    <div className='popup-btn'>
                        <button onClick={() => setOpen1(false)}>Cancel</button>
                        <button onClick={() => setOpen1(false)}>Delete</button>
                    </div>
                </div>
            </Modal>
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                className="ModanExport"
            >
                <Export open={open} setOpen={setOpen} />

            </Modal>
            <div className="usermanagementmaindiv" title='User Management Created By Faizan'>
                <div className="usermanagementmain" title='User Management Created By Faizan'>
                    <header>
                        <div className="userManagementHead">
                            <div>
                                <FiSearch className="userManagmentsearch" />
                                <input
                                    className="userManagmentinpbut"
                                    type="text"
                                    placeholder="Search Candidate"
                                />
                                <button className="searchAnyBut">
                                    Search Any{" "}
                                    <AiOutlineDown
                                        className="userManagementdown"
                                        style={{ fontSize: "13px" }}
                                    />
                                </button>
                            </div>
                            <div className="userManagmentText">
                                <p>User Management</p>
                            </div>
                            <div className="actinactbut">
                                <button className="useractive">
                                    Active <br />
                                    110
                                </button>
                                <button className="userinactive">
                                    InActive <br />
                                    20
                                </button>
                            </div>
                            <div className="userheaderbut">
                                <button className="userReset">
                                    <BiReset style={{ fontSize: "17px", color: "white" }} />{" "}
                                    Reset
                                </button>
                                <button className="userExport" onClick={() => setOpen(true)}>
                                    <TfiExport style={{ color: "white" }} /> Export
                                </button>
                                <button className="userAdd" onClick={() => setOpenUser(!openUser)}>Add User</button>
                            </div>
                        </div>
                    </header>
                    <div>
                        <table className="userTable">
                            <thead className="userThead">
                                <tr className="usertheadtr">
                                    <th className="userAllCheckbox1">
                                        <input
                                            className="userAllCheckbox"
                                            onClick={checkBoxFun}
                                            type="checkbox"
                                        />
                                    </th>

                                    <th>
                                        ID <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>
                                        User Name <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>
                                        Email ID <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>
                                        Contact Number <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>
                                        Role <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>
                                        Status <FaFilter style={{ fontSize: "13px" }} />
                                    </th>
                                    <th>Actions</th>
                                    <th></th>
                                    <th className="userDelete1 userDelete" onClick={showModal1} style={{ opacity: deletebut }}>
                                        <span>
                                            <MdDelete
                                                className="userDelete"
                                                style={{ fontSize: "18px" }}
                                            />
                                        </span>
                                        <span className="userDelete" style={{ fontSize: "15px" }}>
                                            Delete
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="userTbody">
                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input className="userInputcheckbox" type="checkbox" />
                                    </td>
                                    <td>610211</td>
                                    <td>Rohit Sindhi</td>
                                    <td>Rohit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610211</td>
                                    <td>Ranjit Sing Tanwar</td>
                                    <td>Ranjit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610211</td>
                                    <td>Ranjit Sing Tanwar</td>
                                    <td>Ranjit@wiseskulls.com</td>
                                    <td>+91 9658714121</td>
                                    <td>Team Lead</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610200</td>
                                    <td>Faisal kachrajiwala</td>
                                    <td>Faisal@wiseskulls.com</td>
                                    <td>+91 9658714241</td>
                                    <td>Director Of Operations</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>

                                <tr>
                                    <td className="userAllCheckbox1">
                                        <input type="checkbox" />
                                    </td>
                                    <td>610201</td>
                                    <td>Mukaddish Ali</td>
                                    <td>mukaddish@wiseskulls.com</td>
                                    <td>+91 9658721121</td>
                                    <td>Head of Delivery</td>
                                    <td>
                                        <Switch
                                            className="switch1"
                                            style={{ color: "black" }}
                                            defaultChecked={false}
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <BsFillPersonCheckFill /> Edit
                                    </td>
                                    <td>Change Password</td>
                                </tr>
                            </tbody>
                        </table>
                        <footer className="userFooter">
                            <div className="userFooterDiv">
                                <AiOutlineDoubleLeft className="footerlefticon" />
                                <AiOutlineDoubleRight className="footerRighticon" />
                            </div>
                            <div className="userFootersecounddiv">
                                <div>
                                    <p>Showing 1 to 10 of 5545 entries</p>
                                </div>
                                <div className="usertextdiv">
                                    <div className="userResultdiv">
                                        <span>Result per page</span>

                                        <span>
                                            <Select
                                                className="select-option-form"
                                                optionFilterProp="children"
                                                style={{ width: "150%" }}
                                                defaultValue="10"
                                                filterOption={(input, option) =>
                                                    (option?.label ?? "")
                                                        .toLowerCase()
                                                        .includes(input.toLowerCase())
                                                }
                                                options={[
                                                    {
                                                        value: "50",
                                                        label: "50",
                                                    },
                                                    {
                                                        value: "100",
                                                        label: "100",
                                                    },
                                                    {
                                                        value: "10",
                                                        label: "10",
                                                    },
                                                ]}
                                            />
                                        </span>
                                    </div>
                                    <div className="userFooterbutton">
                                        <button id="userFooterbutton1">1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                        <button>5</button>
                                        <button>6</button>
                                        <button>7</button>
                                        <button>8</button>
                                        <button>9</button>
                                        <button>
                                            <AiOutlineRight />
                                        </button>
                                        <button>
                                            <AiOutlineDoubleRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            {openUser && <AddUser userReff={userReff}/>}
        </>
    );
};

export default UserManagement;
