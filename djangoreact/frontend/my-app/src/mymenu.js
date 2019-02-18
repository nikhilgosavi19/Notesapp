 import React, { Component } from 'react';


class MyMenu extends Component{
constructor(){

    super();


    this.state={

    };
}


    render(){
        
        
       let linksmarkup= this.props.links.map((link,index)=>{

        let linkMarkup=link.active?(
        <a className="nav-link active" href={link.link}>{link.label}</a>
        ):(
            
        <a className="nav-link" href={link.link}>{link.label}</a>
        );
            return(
                <li key={index} className="nav-item">
               {linkMarkup}
              </li>
              
            );
        });
        
        return(
        
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" style={{ color: 'lightgreen' }}>
              MyNotes
            </a>
            
           
            <ul className="navbar-nav">
              {linksmarkup}
            </ul>
          
          </nav>
        );
        }
    }
        
export default MyMenu;