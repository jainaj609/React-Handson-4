import React from 'react'
import './CSS/StudentUpdate.css'
const StudentAdd = () => {
  return (
    <>
    <div className='input-container'>
        <div className='input-box'>
            <input />
            <label>Name</label>
        </div>

        <div className='input-box'>
            <input />
            <label>Age</label>
        </div>

        <div className='input-box'>
            <input />
            <label>Course</label>
        </div>

        <div className='input-box'>
            <input />
            <label>Batch</label>
        </div>

    </div>
    <div className='button-container'>
        <button className='cancel-button'>Cancel</button>
        <button className='Submit-button'>Submit</button>
    </div>
    </>
  )
}

export default StudentAdd
