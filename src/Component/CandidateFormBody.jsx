import React from 'react'
import './Style/CandidateFormBody.css'
import { IoIosArrowDown} from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { FaAsterisk } from 'react-icons/fa';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { Modal } from 'antd';
import { Tooltip } from 'antd';
import { useState } from 'react';
import { Select, Tag } from 'antd';


const CandidateFormBody = () => {

    const [perskill, setSkill] = useState(false);

    const skillModal = () => {
        setSkill(true);
    };

    const handleOpen = (e) => {
        console.log(e);
        setSkill(false);
    };

    const handleClose = (e) => {
        console.log(e);
        setSkill(false);
    };

    return (
        <div>
            <Modal
                className='popup-modal'
                open={perskill}
                onOk={handleOpen}
                onCancel={handleClose}
                okButtonProps={{
                    disabled: true,
                }}
                cancelButtonProps={{
                    disabled: true,
                }}
            >
                <div title='Confirm to Delete Created By Sohil'>
                    <div className='header-back'>
                        <header className='skill-head'>Skill Based Experience</header>
                        <button onClick={handleClose}><IoClose/></button>
                    </div>

                    <div className='main-popup-inputs'>
                        <div className='group-popup-inputs1'>
                            <div>
                                <div>
                                    <label htmlFor="popup-id1">Java</label><br />
                                    <input id='popup-id1' className='popup-inputs' type="text" />
                                </div><br />
                                <div>
                                    <label htmlFor="popup-id2">Javascript</label><br />
                                    <input id='popup-id2' className='popup-inputs' type="text" />
                                </div><br />
                                <div>
                                    <label htmlFor="popup-id3">Python</label><br />
                                    <input id='popup-id3' className='popup-inputs' type="text" />
                                </div><br />
                            </div><br />
                        </div>

                        <div className='group-popup-inputs2'>
                            <div>
                                <div>
                                    <label htmlFor="popup-id4">React</label><br />
                                    <input id='popup-id4' className='popup-inputs' type="text" />
                                </div><br />
                                <div>
                                    <label htmlFor="popup-id5">Unity</label><br />
                                    <input id='popup-id5' className='popup-inputs' type="text" />
                                </div><br />
                                <div>
                                    <label htmlFor="popup-id6">Node JS</label><br />
                                    <input id='popup-id6' className='popup-inputs' type="text" />
                                </div><br />
                            </div><br />
                        </div>

                    </div>

                </div>
            </Modal>
            <div title='Confirm to Delete Created By Sohil'>
                <div className='form-input-fields'>
                    <div className='form-inputs1'>
                        <div className='Candidate-Name'><br />

                            <label htmlFor="">Candidate Name</label><br /><br />
                            <input type="text" className='name-input' placeholder='Type Name here...' />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Required Professional Experience</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Comfortable with JD?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Current Location (State)</label><br /><br />
                            <input type="text" className='name-input' placeholder='eg. California' />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Current Visa</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Master's Degree</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Initial OPT Year</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Living with?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Currently on a Project?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Reason for Changing the Job?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Anything in Pipeline?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="" className='about-skills'>Are there any new skills that <br />you are planning to learn in future? <br /></label><br />
                            <input type="text" />

                        </div>
                    </div>
                    <div className='form-inputs2'>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Profile Source</label><br /><br />
                            <input type="text" className='name-input' placeholder='eg. Monster' />

                        </div>
                        <div className='Candidate-Name1'><br /><br />

                            <label htmlFor="" className='experience'>Number of Years of Experience</label><br /><br />
                            <input type="text" />
                            <button className='skill-but' onClick={skillModal}>Per Skill</button>
                        </div>

                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Self Rating</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">First USA Arrival</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">First H1B Year?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Other Education</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Stem OPT Year</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Ready to Relocate?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Current Project Timeline</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Applied for the same position & client?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Past Experience with the same client?</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Are there any specific projects and <br /> clients you would like to work for?<br /></label><br />
                            <input type="text" />

                        </div>
                    </div>
                    <div className='form-inputs3'>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Available in Job Market</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Email Check</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Current Location (City)</label><br /><br />
                            <input type="text" className='name-input' placeholder='eg. California City' />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Arrival Visa</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Bachelor's Degree</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">CPT Year</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Visa Validity</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Preferred Location</label><br /><br />
                            <input type="text" />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Roles & Responsibilities</label><br /><br />
                            <textarea type="text" className='big-input'></textarea>

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Interview Availability</label><br /><br />
                            <input type="text" className='name-input' placeholder='Type date and time here' />

                        </div>
                        <div className='Candidate-Name'><br /><br />

                            <label htmlFor="">Which is the one skill or talent you are best <br />at or can guarantee top performance?<br /></label><br />
                            <input type="text" />

                        </div>
                    </div>

                </div>

                <div className='inp-area'><br />

                    <div className='note-inp'>
                        <label htmlFor="" className='label1'>5 years down the line, where do you see<br /> yourself?</label><br /><br />
                        <input type="text" className='noted' />
                    </div>

                    <div className='textare'><br />
                        <label htmlFor="textarea" className='textarea-label' >Notes</label><br /><br />
                        <textarea name="" id="textarea" className='textarea'></textarea>
                    </div>

                </div>

                <div className='foot-input'>
                    <div className='tool-submit-field'>
                        <label htmlFor="" className='selecter-label'>ADDITIONAL NOTIFICATIONS <Tooltip id='qsn-icon-tool'  color={"#1B90FF 0% 0% no-repeat padding-box"} placement="top" title="Notify them via email before submission"><BsQuestionCircleFill className='qsn-icon' />
                        </Tooltip></label><br /><br />
                      <div className='select-option-form-input1'>  <Select
                className="select-option-form-underbar"
                defaultValue="Rohit"
                optionFilterProp="children"
                style={{ width: '70%' }}
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
           ]}
              /></div>
                    </div>

                    <span className='dash-div'>
                        <div className='dash-para-div'>
                            <p className='dash-para'><FaAsterisk /> For Internal Use</p>
                        </div>
                        <div className='dash-checkbox'>
                            <input type="checkbox" />

                            <p>Did you ask the candidate to connect and follow WiseSkull's <br /> Social media?</p>
                        </div>
                    </span>
                </div>
                <button className='sub-but'>Submit</button>
                <Sidebar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default CandidateFormBody