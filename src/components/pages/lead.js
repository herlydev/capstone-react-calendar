import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Icons from "../../../src/helpers/icons"
import Calendar from "../pages/calendar"
import "./lead.scss"



export default class Lead extends React.Component {
    constructor() {
        super()

        Icons();

        this.state = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            leads: []
        }

    }

   

    componentDidMount() {
        fetch("https://hs-lead-generation-react-flask.herokuapp.com/leads")
        .then(response => response.json())
        .then(data => {
            this.setState({
                leads: data
            })
        })
    }


    addLead = (event) => {
        event.preventDefault()
        axios({
            method: "post",
            url: 'https://hs-lead-generation-react-flask.herokuapp.com/lead',
            headers: { "content-tpe": "application/json"},
            data: {
                fname: this.state.fname,
                lname: this.state.lname,
                phone: this.state.phone,
                email: this.state.email
            }   
        }).then(response => {
            console.log(response)
            this.setState({
                leads: [...this.state.leads, response.data]
            })
        })
        .catch((error) => {
            console.log("error adding lead: ", error)
        })
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name] : event.target.value  
        })
    }

    

    render() {
        return(
            
            <div className="leadPageContainer">
            <div className="leadPageTitle">
                <h1>Let's Get Started!</h1>
            </div>

            <div className="leadPageBody">

            <div className="leadPageFormBlock">
            <h2>Please fill out your information and click "Get Started" </h2>
            <h3>Tax-EZ New Customer Form</h3>
            
                <div className="leadPageForm">
                <form className="formBlock" onSubmit={this.addLead}>
                    <input 
                        type="text"
                        placeholder="First Name"
                        value={this.state.fname}
                        onChange={this.handleChange}
                        name="fname"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lname}
                        onChange={this.handleChange}
                        name="lname"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name="phone"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                    />
                <button className="formButton" type="submit">Get Started!</button>
                </form>
                </div>
            
            </div>

            <div className="leadPageCalendar">
                
                <h2>Tax-EZ Calendar </h2>
                <h4>Please select the best day to reach you!</h4>
                <Calendar />
                
            </div>

            </div>
        </div>
        )
    }
    
}

ReactDOM.render(<Lead />, document.getElementById('root'));