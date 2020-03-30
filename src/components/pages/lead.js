import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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

    render() {
        return(
            <div>
                <h1>Lead Generation page</h1>
                <h2>Lead Generation Form</h2>
                <form>
                    <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.fname}
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lname}
                    />
                    <input
                    type="text"
                    placeholder="Phone Number"
                    value={this.state.phone}
                    />
                    <input
                    type="text"
                    placeholder="Email Address"
                    value={this.state.email}
                    />
                    <button type="submit">Get Started!</button>
                </form>
                
                <h2>Lead Generation Calendar</h2>
            </div>
        )
    }
    
}

ReactDOM.render(<Lead />, document.getElementById('root'));