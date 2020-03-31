import React from 'react';
import moment from 'moment';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


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
        // To calculate and populate the days of the month to be place after the empty slots
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let populateDays = (d == this.currentDay() ? "day current-day": "day");
            daysInMonth.push(
                <td key={d} populateDays={populateDays}>
                    <span>{d}</span>
                </td>
            );
        }
        console.log("days: ", daysInMonth);

        // days for each row
        var totalSlots = [...blanks, ...daysInMonths];
        let row = [];
        let cell = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }

            if (i == totalSlots.length - 1) {
                let insertRow = cells.slice();
                row.push(insertRow);
            }
        });




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

