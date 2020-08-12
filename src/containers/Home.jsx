import React, { Component } from "react";
import axios from "axios"
import Tableheader from "../component.jsx/tableheader"

class Home extends Component {
    state = {
        UserUrl: "",
        employeesArray: [],
        sort: [],
        filterEmployees: [],
        search: ""
    };
    componentDidMount() {
        axios
            .get("https://randomuser.me/api/?results=50&nat=us")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    UserUrl: response.data.results[0].picture.large,
                    filterEmployees: response.data.results,
                    employeesArray: response.data.results
                })

            })
            .catch((err) => {
                console.log(err);

            });
    }

    sortAge = () => {

        const employees = this.state.employeesArray;
        console.log(employees)
        const filterEmployees = employees.sort((a, b) => {
            console.log(a.dob.age, b.dob.age);
            return a.dob.age - b.dob.age
        });


        console.log(filterEmployees)
        console.log("in the last name func")
        this.setState({
            filterEmployees
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.employeeFilter();
    }
    employeeFilter = () => {
        const searchTerm = this.state.search.toLowerCase();
        this.setState({
           filterEmployees: this.state.filterEmployees.filter((employeesArray) =>
                employeesArray.employees.name.toLowerCase().includes(searchTerm)
            ),
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-8">
                                <div className="form-group">

                                    <input type="text" className="form-control" placeholder="Search by name" name="search" value={this.state.search} onChange={this.handleInputChange} />



                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div className="col-text-center">
                            {/* <button onClick={this.props.sortFunction} className="btn btn-primary">Sort by last name</button> */}
                            <button onClick={this.sortAge} className="btn btn-primary">Sort by Age</button>
                            <table className="table">
                                <Tableheader
                                    sortFunction={this.sortAge}
                                />

                                <tbody>
                                    {this.state.filterEmployees.map((emp, item) => (
                                        <tr key={item}>
                                            <th scope="row">{item}</th>
                                            <td><img key={item} src={emp.picture.large} alt="users" /></td>
                                            <td> {emp.name.first}</td>
                                            <td> {emp.name.last}</td>
                                            <td> {emp.email}</td>
                                            <td> {emp.dob.age}</td>

                                        </tr>

                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                    </div>
                    </div >
                            
                );
            
                                    }
        }

export default Home;