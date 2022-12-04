import React, { Component } from 'react'
import axios from "axios";

export default class employeeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }

    getEmployees = () => {
        const EMP_URL = "https://fullstackassignment1-production.up.railway.app/api/emp/employees";
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
    
  render() {
    return (
        <div className='columns'>
        <div className='column is-half'>
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
                                <button className='button is-info is-small'>Edit</button>
                                <button className='button is-danger is-small'>Danger</button>
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
