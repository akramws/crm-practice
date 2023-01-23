import { Switch } from 'antd';
import React, { useState } from 'react';
import './Style/Form.css';
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";

import { Tooltip } from 'antd';
import { Select, Tag } from 'antd';
import { useNavigate } from 'react-router';
import { Modal } from 'antd';



const CandidateForm = () => {
  const [isInstructionShow, setIsInstructionShow] = useState(true);
  const [on, setOn] = useState(false);

  const Navigate = useNavigate();

  const show = (e) => setIsInstructionShow(e)

  return (
    <>
      <Modal
        open={on}
        onOk={() => setOn(false)}
        onCancel={() => setOn(false)}
      >
        <div className='pop-up'>
          <h1>Confirm  Log Out?</h1>
          <div className='popup-btn'>
            <button onClick={() => setOn(false)}>Cancel</button>
            <button onClick={() => { Navigate("/login") }} >Log Out</button>
          </div>
        </div>
      </Modal>
      <div className="all-body-parent-div">
        <div >
          <div className='main-form-div'>
            <div className='headerdiv'>
              <div>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked color={"green"} className='on-off-btn' onClick={show} ></Switch><br /><p className='scripton'><span id='script-blue'>Script </span><span id='on-green'>On</span> </p></div>
              <div className='candidatesdetailslist-box'>
                CANDIDATE'S DETAIL LIST
              </div>
              <div className='logout-div'>

                <button className='logout-header-form-btn' onClick={() => setOn(true)}>Log Out</button><br /><br />
                <p className='Dashboard-Go-to-Candidate-Listing-p'><span><BiLeftArrowAlt className='leftarro-icon' />
                  <button className='underline-words' onClick={() => { Navigate("/dashboard") }}>Dashboard</button></span>
                  <div className='slashe-div'></div> <span><button id='go-to' className='underline-words' onClick={() => { Navigate("/candidate-listing") }}>Go to Candidate Listing</button><BiRightArrowAlt className='leftarro-icon' /></span></p>

              </div>
            </div>

          </div>
          {
            isInstructionShow &&
            <div className='content-questions-line-div'>
              Click on the fields to get the questions to be asked to the Candidate.
            </div>
          }
          <div className='footer-form-div'>
            <div className='Select-JPC-Job-Title-div'>
              <label className='Select-JPC'>Select JPC/Job Title<Tooltip  color={"#1B90FF"} style={{ width: "800px" }} className='toooltips-box' id="tooltips-1-quetion-div" placement="top" title="Choose a requirement from the dopdown"  >
              <BsQuestionCircleFill className='question-lable-icon' /></Tooltip></label><br />
              <Select
                className='select-option-form-inp01'
                defaultValue="Rohit"
                optionFilterProp="children"
                style={{ width: '160%' }}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Faizan',
                    label: 'Faizan',
                  },
                  {
                    value: 'Sohel',
                    label: 'Sohel',
                  },
                  {
                    value: 'Rohit',
                    label: 'Rohit',
                  },
                  {
                    value: 'Naushad',
                    label: 'Naushad',
                  },
                  {
                    value: 'Neha',
                    label: 'Neha',
                  },
                  {
                    value: 'Vikas',
                    label: 'Vikas',
                  },
                  {
                    value: 'Sharif',
                    label: 'Sharif',
                  },
                  {
                    value: 'Akram',
                    label: 'Akram',
                  },
                  {
                    value: 'Mehmud',
                    label: 'Mehmud',
                  },
                  {
                    value: 'Raju',
                    label: 'Raju',
                  },

                ]}
              /></div>
            <div className='text-italic-pop'>

              <Tooltip color={"#26AD5F 0% 0% no-repeat padding-box"}  className='toooltips-box' placement="left" title="Must have Skills"  >
                <div className='dase-dase-box'></div></Tooltip>
            </div>



          </div>


        </div>
      </div>
    </>

  )
}

export default CandidateForm
