import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import './Style/AddMates.css';


const AddMates = () => {
  return (
    <div>
        <div className='add-mates-page'>
            <p className='icons-name-radio-add'><span><BsFillPersonFill/>rohit</span> <input type="radio" /></p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default AddMates