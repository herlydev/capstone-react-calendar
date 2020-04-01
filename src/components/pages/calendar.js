import React from 'react';
import moment from 'moment';

import "../style/calendar.css"




export default class Calendar extends React.Component {
    state= {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false

    }
    
    constructor(props) {
        super(props);
        
        this.width = props.width || "350px"
        this.style = props.style || {}
        // this.style.width = this.width
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

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).set("month", monthNo)
        this.setState({
            dateContext: dateContext
        });
    }

    onSelectChange = (e, data) => {
        this.setMonth(data)
    }

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            )
        })
        return (
            <div className="month-popup">
                {popup}
            </div>
        )
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    }
    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e) => {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                <this.SelectList data={this.months} />
                }
            </span>
        )
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
                <td key={i * 25} className="emptySlot">{""}</td>
            );
        }
        console.log("blanks: ", blanks);
        // To calculate and populate the days of the month to be place after the empty slots
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day": "day");
            daysInMonth.push(
                <td key={d} className={className}>
                    <span>{d}</span>
                </td>
            );
        }
        console.log("days: ", daysInMonth);

        // days for each row
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

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
                rows.push(insertRow);
            }
        });




        let trElements = rows.map((d, i ) => {
            return (
                <tr key={i*15}>
                    {d}
                </tr>
            );
        })

        return (
            <div className="calendar-container" style={this.style}>
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                               <this.MonthNav /> 
                            </td>
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

