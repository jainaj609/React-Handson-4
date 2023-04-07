import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './CSS/Students.css'
const Students = () => {
    const navigate= useNavigate();
    return (
        <div className='Student'>
            <div className='Heading'>
                <h1>Students Details</h1>
                <button className='Add-button' onClick={()=>navigate('/students-desc/add')}>Add new student</button>
            </div>
            <div className=''>
                <table className='content-table' cellPadding={19}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Course</td>
                            <td>Batch</td>
                            <td>Change</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>24</td>
                            <td>MERN</td>
                            <td>October</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                        <tr>
                            <td>Doe</td>
                            <td>25</td>
                            <td>MERN</td>
                            <td>November</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                        <tr>
                            <td>Biden</td>
                            <td>26</td>
                            <td>MERN</td>
                            <td>October</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                        <tr>
                            <td>Barar</td>
                            <td>22</td>
                            <td>MERN</td>
                            <td>September</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                        <tr>
                            <td>Chirst</td>
                            <td>23</td>
                            <td>MERN</td>
                            <td>October</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                        <tr>
                            <td>Elent</td>
                            <td>24</td>
                            <td>MERN</td>
                            <td>November</td>
                            <td><Link to={'/students-desc/update'}>Edit</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students
