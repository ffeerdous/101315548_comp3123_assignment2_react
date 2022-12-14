import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default class employeeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }

    getEmployees = () => {
        const EMP_URL = "http://localhost:3001/api/emp/employees";
        axios.get(EMP_URL)
        .then(res => {
            this.setState({
                ...this.state,
                employees: res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount = () => {
        this.getEmployees()
    }

    deleteEmployee = async(id) =>{
        try{
            await axios.delete(`http://localhost:3001/api/emp/employees?eid=${id}`);
            this.getEmployees()
        }catch (error){
            console.log(error);
        }
    }
    
  render() {
    return (
        <div className='columns'>
        <div className='column is-half'>
            <Link to="add" className='button is-success'>Add New Employee</Link>
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => (
                        <tr key={employee._id}>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <Link to={`/api/emp/employees/${employee._id}`} className='button is-info is-small'>Edit</Link>
                                <button onClick={() => this.deleteEmployee(employee._id)} className='button is-danger is-small'>Danger</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}
