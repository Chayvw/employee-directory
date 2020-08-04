
import React from 'react';
// import Random from "../containers/Random"

const Tableheader = (props) => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                {/* <th scope="col" onClick={props.sortFunction}>Last Name</th> */}
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                
            </tr>
        </thead>
    )}

    export default Tableheader;

   