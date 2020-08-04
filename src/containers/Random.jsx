import React, { Component } from "react";
import axios from "axios"
import Tableheader from "../component.jsx/tableheader"

class Random extends Component {
    state = {
        UserUrl: "",
        employeesArray: [],
        sort: [],
        filterEmployees: []
    };
    componentDidMount() {
        axios
            .get("https://randomuser.me/api/?results=50")
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
             return a.dob.age - b.dob.age });
            
            // if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //     return a.name.last.toLowerCase - b.name.last.toLowerCase

                // return a.name.last - b.name.last });
                console.log(filterEmployees)
                console.log("in the last name func")
                this.setState({
                    filterEmployees


                

            // });
        
    
    })
}





            //     console.log(filterEmployees)
            //             console.log("in the last name func")
            //             this.setState({
            //                 filterEmployees


            // })





            // const filterEmployees = employees.sort(function (a, b) {
            //     if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //         console.log(filterEmployees)
            //         console.log("in the last name func")
            //         this.setState({
            //             filterEmployees
            //         })
            //         return 1;
            //     }
            //     // return -1;
            //     return 0;

            // const filterEmployees = employee(a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //     return 1;
            //   }
            //   return -1;
            // const filterEmployees = employees.sort(function (a, b) {
            //     if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //         return a.name.last.toLowerCase - b.name.last.toLowerCase };

            // console.log(a.name.last, b.name.last);
            // return a.name.last - b.name.last });
            // console.log(filterEmployees)
            // console.log("in the last name func")
            // this.setState({
            //     filterEmployees
            // })











            // const filterEmployees = employees.sort(function (a, b) {
            //     if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //         console.log(filterEmployees)
            //         console.log("in the last name func")
            //         this.setState({
            //             filterEmployees
            //         })
            //         return 1;
            //     }
            //     // return -1;
            //     return 0;

            // const filterEmployees = employee(a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //     return 1;
            //   }
            //   return -1;
            // const filterEmployees = employees.sort(function (a, b) {
            //     if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            //         return a.name.last.toLowerCase - b.name.last.toLowerCase };

            // console.log(a.name.last, b.name.last);
            // return a.name.last - b.name.last });
            //     console.log(filterEmployees)
            //     console.log("in the last name func")
            //     this.setState({
            //         filterEmployees
            //     })
            // })

            render() {
                return (
                    <div className="container" >
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
                                            <tr>
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

                    </div >
                );
            }
        }

export default Random;