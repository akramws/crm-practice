import { Popover } from 'antd';
import React from 'react';
import { FaFilter } from 'react-icons/fa';
import AddRequirementPop from './AddRequirementPop';
import UserManagmentAllFilter from './UserManagmentAllFilter';

const UserManagmentArray = [
        {
            Header:"",
            accessor:"input"
        },
        {
            Header:["ID",
                <Popover placement='bottom' trigger="click" content={<UserManagmentAllFilter/>}>
                        <FaFilter/>
                </Popover>
            ],
            accessor:"id"
        },
        {
            Header:["Name",<FaFilter/>],
            accessor:"userName"
        },
        {
            Header:["Email",<FaFilter/>],
            accessor:"email"
        },
        {
            Header:["Number",<FaFilter/>],
            accessor:"contactNumber"
        },
        {
            Header:["Role",<FaFilter/>],
            accessor:'role'
        },
        {
            Header:["Status",<FaFilter/>],
            accessor:"status"
        },
        {
            Header:["Action",<FaFilter/>],
            accessor:"action"
        },
        {
            Header:"",
            accessor:"changePassword"
        }
    ]

export default UserManagmentArray