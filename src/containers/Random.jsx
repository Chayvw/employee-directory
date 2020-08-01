import React, { Component } from "react";
import axios from "axios"

class Random extends Component {
    state = {
        UserUrl:"",
    };
    componentDidMount() {
        axios
        .get("https://randomuser.me/api/")
        .then((response) =>{ 
            console.log(response.data);
            this.setState({
                UserUrl: response.data.message,
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
                        <img src={this.state.UserUrl} alt="lady" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Random;