import React from 'react';
function Student(props) {
    return(
    <div>
        <h1>Student component</h1>
        <h3>Hello {props.name} </h3>
        <h3>Email {props.email}</h3>
        <h4>Address {props.other.addr}</h4>
        <h4>Contact {props.other.mobile}</h4>
        </div>
        );
}
export default Student;
 