import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import './Style/AddMates.css';


const AddMates = ({userReff,setOpenUser}) => {
    return (
        <div className='main-add-mates' ref={userReff} >
            <div className='main-add-mates-div'>
                <div className='add-mates-div'>Add Mates</div>
                <span className='cancel-add-mates' onClick={()=>setOpenUser(false)}><RxCross2 /></span>
            </div>
            <div className='add-mates-page'>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>
                <p className='icons-name-radio-add'><span className='spase-icone-name'><BsFillPersonFill className='icons-in-add-mates'/>Rohit</span> <input className='add-mates-type-inpradio' name='one' type="checkbox" /></p>

            </div>
            
        </div>
    )
}

export default AddMates