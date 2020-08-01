import React, { Component } from "react";
import axios from "axios"

class Random extends Component {
    state = {
        UserUrl:"",
        employeesArray: []
    };
    componentDidMount() {
        axios
        .get("https://randomuser.me/api/?results=20")
        .then((response) =>{ 
            console.log(response.data);
            this.setState({
                UserUrl: response.data.results[0].picture.large,
                employeesArray: response.data.results
            })

        })
        .catch((err) => {
            console.log(err);

        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-text-center">
                    {this.state.employeesArray.map(( emp, item) => (
                        <img key={item} src={emp.picture.large} alt="users"/>
          
        
          
                    ))}
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Random;