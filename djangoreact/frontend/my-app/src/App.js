import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";



import './App.css';
import MyMenu from './mymenu';
import Create from './components/CreateNotes';
import Share from './components/SharedNotes';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';





class App extends Component{

    state = {
        articles: []
    }

        async componentDidMount() {
            try {
              const res = await fetch('http://127.0.0.1:8000/api/');
              const articles = await res.json();
              this.setState({
                articles
              });
            } catch (e) {
              console.log(e);
            }
        }
        



    render(){

let links=[

    {label:"Home",link:"Home",active:true},
    {label:"CreateNotes",link:"CreateNotes"},
    {label:"SharedNotes",link:"SharedNotes"},
    {label:"Login",link:"Login"},
    {label:"Signup",link:"Signup"},

];




        return(
            <div>
<MyMenu links={links} />


<BrowserRouter>
<div>
<Route path="/Home" component={Home} exact />
<Route path="/CreateNotes" component={Create} />
<Route path="/SharedNotes" component={Share} />
<Route path="/Login" component={Login} />
<Route path="/Signup" component={Signup} />


</div>
</BrowserRouter>

{this.state.articles.map(item => (
          <div key={item.id}>
          <div>
            <h1>{item.title}</h1>
            </div>
            <div>
            <span>{item.description}</span></div>
          </div>
        ))}
    

</div>
        );
    }
}



export default App;