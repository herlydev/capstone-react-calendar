import React from 'react';
import moment from 'moment';


export default class Calendar extends React.Component {
    state= {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false

    }
    
    constructor(props) {
        super(props);
        
        this.width = props.width || "350px";
        this.style = props.style || {};

    }


    

    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of de week 0...1.....6
        return firstDay;
    }

    

    render() {
        // Map the weekdays Sun, Tue, ... as <td>

        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        })

        // To calculate the empty slot days at the beginning of the month

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                <td className="emptySlot">{""}</td>
            );
        }
        console.log("blanks: ", blanks);

        let trElements = []

        return (
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           {weekdays} 
                        </tr>
                        {trElements}
                    </tbody>
                </table>
            </div>
        );
    }
}

