import React, { useState, useEffect, useRef } from "react";
import "./Style/UserManagmentExport.css";
import "./Style/UserManagement.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { TfiExport } from "react-icons/tfi";
import { FaFilter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal, Switch, Select } from "antd";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineRight, } from "react-icons/ai";
import AddUser from "./AddUser";
import SearchbarPopup from "./SearchbarPopup";
import Export from "./Export";
import UserManagmentArray from "./UserManagmentArray";
import UserTbody from "./UserTbodyArray";
import EditUser from "./EditUser";



const UserManagement = () => {
    const userReff = useRef();
    const edituserReff = useRef();
    const [deletebut, setDeleteBut] = useState("0");
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [editUserData, seteditUserData] = useState("")
    // const [searchBarInput, setSearchBarInput] = useState(false);
    const showModal1 = () => {
        setOpen1(true);
    };
    // tEST
    const [openUser, setOpenUser] = useState(false);
    const [openEdit, setopenEdit] = useState(false);
    console.log("openEdit>>", openEdit)

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
    }, [userReff]);

    const editUserFunc = (item) => {
        seteditUserData(item);
    }
    console.log("data>>,", editUserData)

    const checkBoxFun = (e) => {
        if (e.target.checked == true) {
            setDeleteBut("1");
        } else {
            setDeleteBut("0");
        }
    };

    console.log("openUser >>", openUser);

    return (
        <>
            {/* <Modal className="SearchbarPopupModel" open={searchBarInput} onCancel={() => setSearchBarInput(false)}>
                <SearchbarPopup />
            </Modal> */}

            <Modal open={open1}>

                <div className="pop-up">
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
                <Export setOpen={setOpen} />
            </Modal>
            <div>
                <div className="usermanagementmaindiv">
                    <div className="usermanagementmain">
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
                                {/* <div className="advanceSearch" >
                                    <p onClick={() => setSearchBarInput(true)} >Advanced Search</p>
                                </div> */}
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
                                    <button className="userReset" >
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
                                    <tr className="usertheadtr" >
                                        {UserManagmentArray.map((e) => {
                                            if (e.accessor === "input") {
                                                return (
                                                    <th className="userAllCheckbox1">
                                                        <input type="checkbox" />
                                                    </th>)
                                            } else {
                                                return (
                                                    <th>
                                                        {e.Header}
                                                    </th>
                                                )
                                            }
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="userTbody">
                                    {UserTbody.map((e) =>
                                        <tr>
                                            {
                                                UserManagmentArray?.map((ele) => {
                                                    if (ele.accessor === "input"){
                                                        return (
                                                            <td>
                                                                <input type="checkbox" />
                                                            </td>
                                                        )
                                                    }
                                                    if (ele.accessor === "status"){
                                                        return (
                                                            <td>
                                                                <Switch
                                                                    className="switch1"
                                                                    style={{ color: "black" }}
                                                                    defaultChecked={e[ele.accessor]}
                                                                    checkedChildren="Active"
                                                                    unCheckedChildren="Inactive"
                                                                />
                                                            </td>
                                                        )
                                                    }
                                                    if (ele.accessor === "action") {
                                                        return (
                                                            <td onClick={() => { editUserFunc(e); setopenEdit(true) }}>
                                                                <BsFillPersonCheckFill /> Edit
                                                            </td>
                                                        )
                                                    }
                                                    else {
                                                        return (

                                                            <td>{e[ele.accessor]}</td>

                                                        )
                                                    }
                                                })
                                            }
                                        </tr>
                                    )}
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
            </div>
            {openUser && <AddUser userReff={userReff} />}
            {openEdit && <EditUser EdituserReff={edituserReff} editUserData={editUserData} setopenEdit={setopenEdit} />}
        </>
    );
};

export default UserManagement;
