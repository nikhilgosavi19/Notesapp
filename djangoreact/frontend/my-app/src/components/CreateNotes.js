import React, { Component } from 'react';
import $ from 'jquery';
class Create extends Component{
    render(){

        return(
<div style={{marginLeft:"20px"}}>
         

<div class="form-group">
  <label for="comment"><strong>Create a new note</strong></label>
  <textarea class="form-control" rows="5" id="comment" style={{height:"200px",width:"400px"}}></textarea>
  <button type="submit" class="btn btn-primary" style={{marginTop:'20px',marginLeft:"10px"}}>Submit</button>
</div>

<h4>Created Notes should be rendered here</h4>
<h4>Created Notes should be rendered here</h4>
<h4>Created Notes should be rendered here</h4>
<h4>Created Notes should be rendered here</h4>
</div>


        );
    }
}

export default Create;