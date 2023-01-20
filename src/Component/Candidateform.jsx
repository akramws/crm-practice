import { Switch } from 'antd';
import React from 'react';
import './Style/Form.css';
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";

import { Tooltip } from 'antd';
import { Select, Tag } from 'antd';


const CandidateForm = () => {
  const onSearch = (value = "") => {
    console.log('search:', value);
  };

  return (
    <div>
      <div className='main-form-div'>
        <div className='headerdiv'>
          <div>
            <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked color={"green"} className='on-off-btn'></Switch><br /><p className='scripton'>Script On</p></div>
          <div className='candidatesdetailslist-box'>
            CANDIDATE'S DETAIL LIST
          </div>
          <div className='logout-div'>
            <button className='logout-header-form-btn'>Log Out</button><br /><br />
            <p className='Dashboard-Go-to-Candidate-Listing-p'><span><BiLeftArrowAlt className='leftarro-icon' /><a className='underline-words' href='Dashboard'>Dashboard</a></span>
              <span><a id='go-to' className='underline-words' href='Dashboard'>Go to Candidate Listing</a><BiRightArrowAlt className='leftarro-icon' /></span></p>

          </div>
        </div>

      </div>
      <div className='content-questions-line-div'>
        Click on the fields to get the questions to be asked to the Candidate.
      </div>
      <div className='footer-form-div'>
        <div className='Select-JPC-Job-Title-div'>
          <label className='Select-JPC'>Select JPC/Job Title<BsQuestionCircleFill className='question-lable-icon' /></label><br />
          <Select
            className='select-option-form'
            defaultValue="Rohit"
            optionFilterProp="children"

            onSearch={onSearch}
            style={{ width: '160%'  }}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'tom',
                label: 'Tom',
              },
            ]}
          /></div>
        <div className='text-italic-pop'>

          <Tooltip  color={"#26AD5F 0% 0% no-repeat padding-box"} className='toooltips-box' placement="left" title="  Must have Skills"  >
            <div className='dase-dase-box'></div></Tooltip>
        </div>



      </div>


    </div>
  )
}

export default CandidateForm