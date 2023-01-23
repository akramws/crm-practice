import React from 'react';
import { Select, Tag } from 'antd';
import './Style/ManageTeam.css';


const UnderbarPopup = () => {
  return (
    <div className='underbar-div'>
        <div>
            <label>Team Name</label><br />
            <input className='team-hulk-inp' type="text" value={"Team Hulk"} />
        </div>
        <div>
            <label className='popup-lable-inp'  htmlFor="">Asighn Lead</label><br />
        <Select
                className='select-option-form'
                defaultValue="Rohit"
                optionFilterProp="children"
                style={{ width: '300px' }}
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
              /> <br />
              <label className='popup-lable-inp' htmlFor="">Add Team Members</label><br />
              <Select
                className='select-option-form'
                defaultValue="Rohit"
                optionFilterProp="children"
                style={{ width: '300px' }}
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
              />
              <div>
              <button className='underbar-popup-btn'>Creat</button>
              </div>
        </div>
    </div>
  )
}

export default UnderbarPopup