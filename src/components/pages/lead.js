import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Calendar from './calendar';


export default class Lead extends React.Component {
    constructor() {
        super()

        this.state = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            leads: []
        }

    }

   

    componentDidMount() {
        fetch("http://localhost:5000/leads")
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
            url: 'http://localhost:5000/lead',
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
            <div>
                <h1>Lead Generation page</h1>
                <h2>Lead Generation Form</h2>
                <form onSubmit={this.addLead}>
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
                    <button type="submit">Get Started!</button>
                </form>
                
                <h2>Lead Generation Calendar</h2>
                <Calendar />
            </div>
        )
    }
    
}

ReactDOM.render(<Lead />, document.getElementById('root'));