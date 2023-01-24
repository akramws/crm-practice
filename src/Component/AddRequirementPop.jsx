import { Select } from 'antd'
import React from 'react'

const AddRequirementPop = () => {
  return (
    <div className='AddReq-Pop-Main' title='User Management Created By Faizan'>
      <div className='AddReq-Pop-Main1'>
        <div className='AddReq-Pop-Secound'>
          <div>
            <div className='AddReq-but'>
              <span>
                <button className='AddReq-but1'>Save</button>
              </span>
              <span><button className='AddReq-but2'>+</button><p>Add</p></span>
            </div>
            <div className='AddReq-Pop-Secound-Contan'>
              <div>
                <input className='AddReq-Pop-Secound-Contan-input' type="text" placeholder='Type Requirements here' /><br />
              </div>
              <div className='AddReq-Pop-Secound-Contan-secound'>
                <a href=""><p className='AddReq-UplodeJd'>Uplode JD</p></a>
                <p className='AddReq-MustHave'>Must Have Skills</p><br />
                <p className='AddReq-Busic'>Busic of Java,redux,React,bla,bla,</p><br />
              </div>
            </div>
            <div className='AddReq-Pop-Secound-Contan'>
              <div>
                <input type="text" placeholder='Type Requirements here' /><br />
              </div>
              <div className='AddReq-Pop-Secound-Contan-secound'>
                <a href=""><p className='AddReq-UplodeJd'>Uplode JD</p></a><br />
                <p className='AddReq-MustHave'>Must Have Skills</p><br />
                <p className='AddReq-Busic'>Busic of Java,redux,React,bla,bla,</p><br />
              </div>
            </div>

            <div className='AddReq-Pop-Secound-Contan'>
              <div>
                <input type="text" placeholder='Type Requirements here' /><br />
              </div>
              <div className='AddReq-Pop-Secound-Contan-secound'>
                <a href=""><p className='AddReq-UplodeJd'>Uplode JD</p></a><br />
                <p className='AddReq-MustHave'>Must Have Skills</p><br />
                <p className='AddReq-Busic'>Busic of Java,redux,React,bla,bla,</p><br />
              </div>
            </div>

            <div className='AddReq-Pop-Secound-Contan'>
              <div>
                <input type="text" placeholder='Type Requirements here' /><br />
              </div>
              <div className='AddReq-Pop-Secound-Contan-secound'>
                <a href=""><p className='AddReq-UplodeJd'>Uplode JD</p></a><br />
                <p className='AddReq-MustHave'>Must Have Skills</p><br />
                <p className='AddReq-Busic'>Busic of Java,redux,React,bla,bla,</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className='AddReq-Pop-Three'>

          <Select className='RequirementsSelector'
            defaultValue={{ value: 'Select And Remove Requirements here' }}
            style={{ width: 300 }}
            options={[
              {
                value: 'javadevloper',
                label: 'Javadevloper',
              },
              {
                value: 'reactdeveloper',
                label: 'Reactdeveloper',
              },
              {
                value: 'reactdeveloper',
                label: 'Reactdeveloper',
              },
              {
                value: 'reactdeveloper',
                label: 'Reactdeveloper',
              },
            ]}
          />
          <span>
            <button>-</button>
            <p>Remove</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AddRequirementPop