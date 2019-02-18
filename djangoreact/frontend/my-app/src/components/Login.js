import React, { Component } from 'react';


import './Designs.css';
class Login extends Component{
    render(){

        return(
<form>
<div className="col-sm" id="login">
<h4  style={{color:'green', marginLeft:'190px'}}>Login Form</h4>
          <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>

<div className="form-group">
<label htmlFor="pwd">Password:</label>
<input type="password" className="form-control" id="pwd" />
<button type="submit" className="btn btn-primary" style={{marginTop:'30px'}}>Submit</button>
<button type="button" className="btn btn-danger" style={{marginTop:'30px',marginLeft:'10px'}}>Cancle</button>
</div>
</div>

</form>


        );
    }
}

export default Login;