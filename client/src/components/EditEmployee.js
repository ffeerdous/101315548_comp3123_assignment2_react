import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [first_name, setfName] = useState("");
    const [last_name, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const getEmployeesByID = async() => {
        const response = await axios.get(`http://localhost:3001/api/emp/employees/${id}`);
        setfName(response.data.first_name);
        setlName(response.data.last_name);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setSalary(response.data.salary);
    }
    useEffect(()=>{
        getEmployeesByID();
    }, []);

    const updateEmp = async(e) => {
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3001/api/emp/employees/${id}`, {
                first_name,
                last_name,
                email,
                gender,
                salary
            });
            navigate("/api/emp/employees")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='columns'>
        <div className='column is-half'>
            <form onSubmit={updateEmp}>
            <div className='field'>
                <label className='label'>First Name</label>
                <div className='control'>
                    <input type="text" className='input' value={first_name} onChange={(e)=> setfName(e.target.value)} placeholder='First Name'/>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Last Name</label>
                <div className='control'>
                    <input type="text" className='input' value={last_name} onChange={(e)=> setlName(e.target.value)} placeholder='Last Name'/>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input type="text" className='input' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gender</label>
                <div className='control'>
                    <div className='select is-fullwidth'>
                        <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Male">Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Salary</label>
                <div className='control'>
                    <input type="text" className='input' value={salary} onChange={(e)=> setSalary(e.target.value)} placeholder='Salary'/>
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type="submit" className='button is-success'>Update Employee</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditEmployee