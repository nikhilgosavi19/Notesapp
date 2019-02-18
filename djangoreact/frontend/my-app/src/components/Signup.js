import React, { Component } from 'react';
import './Designs.css';
import {
    Form
  } from 'antd';
  import axios from "axios"; 

const FormItem=Form.Item;
class Signup extends React.Component{


handleFormSubmit=(event,requestType)=>{

event.preventDefault();

const username=event.target.elements.username.value;
const password=event.target.elements.password.value;
const name=event.target.elements.name.value;
const email=event.target.elements.email.value;
const contact=event.target.elements.contact.value;


switch(requestType){
    case 'post':
    axios.post('http://127.0.0.1:8000/api/',{
            username: username,
            password:password,
            name:name,
            email:email,
            contact:contact
    })
    .then(res=>console.log(res))
    {/*.catch(err=>console.err(error));*/}
    
    case 'put':

    axios.put('http://127.0.0.1:8000/api/',{
        username: username,
        password:password,
        name:name,
        email:email,
        contact:contact,
       
})
.then(res=>console.log(res))
 {/*.catch(err=>console.err(error));*/}
}
}



    render(){

        return(

<form onSubmit={(event)=> this.handleFormSubmit(event,this.prop.requestType)}>
<div className="col-sm" id="signup">
<h4  style={{color:'green', marginLeft:'150px'}}>Registration Form</h4>
          <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input type="Text" className="form-control" id="username" name="username" />
        </div>

<div className="form-group">
<label htmlFor="pwd">Password:</label>
<input type="password" className="form-control" id="pwd" name="password" />
</div>

<div className="form-group">
<label htmlFor="name">Name:</label>
<input type="text" className="form-control" id="name" name="name" />
</div>


<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email" className="form-control" id="email" name="email" />
</div>

<div className="form-group">
<label htmlFor="contact">Contact No.:</label>
<input type="number" className="form-control" id="contact" name="contact" />

<button type="submit" className="btn btn-primary" style={{marginTop:'30px'}}>Submit</button>
<button type="button" className="btn btn-danger" style={{marginTop:'30px',marginLeft:'10px'}}>Cancle</button>
</div>
</div>

</form>

        );
    }
}

export default Signup;