import React from 'react'
import CandidateForm from './CandidateForm'
import CandidateFormBody from './CandidateFormBody'
import './Style/Form.css';

const DetailForm = () => {
  return (
    <div className='detail-form'>
        <CandidateForm/>
        <CandidateFormBody/>
    </div>
  )
}

export default DetailForm