import React from 'react'
import './Style/RightSidebar.css'
import Jobdesk from '../assets/images/jobdesk.png'
import { useState } from 'react'
import RightSideBox from './RightSideBox'


const RightSidebar = () => {

  const [openSide, setOpenSide] = useState(false)

  console.log(">>>>",openSide)
 
  return (
    <>
    <div className='right-sidebar'title='User Management Created By Neha and Sohil'>
        <img src={Jobdesk} alt="" onClick={() => setOpenSide(!openSide)} />
    </div>
    {openSide && <RightSideBox/>}
    </>
  )
}

export default RightSidebar