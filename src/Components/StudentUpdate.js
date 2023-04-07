import React from 'react'
import './CSS/StudentUpdate.css'
const StudentUpdate = () => {
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
            <button className='update-button'>Update</button>
        </div>
        </>
    )
}

export default StudentUpdate
