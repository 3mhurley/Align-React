import React from "react";

// @fullcalendar/react @fullcalendar/interaction @fullcalendar/daygrid @fullcalendar/moment @fullcalendar/timegrid
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import moment from "moment";

import "./cal.scss";

export default class CalApp extends React.Component {
	calendarComponentRef = React.createRef();
	state = {
		calendarScrollTime: moment()
			.subtract(2, "h")
			.format("HH:mm:ss"),
		calendarSelectable: true,
		calendarWeekends: true,
		calendarEvents: [
			// initial event data
			{
				title: "event 0",
				start: new Date(),
				end: new Date()
			},
			{
				title: "event 1",
				date: "2019-05-01"
			},
			{
				title: "event 2",
				date: "2019-05-02"
			}
		]
	};

	handleSelect = arg => {
		let mStart;
		let mEnd;

		let newEvent = {
			calendarId: "12XHW2H39VEH21",
			userId: "bob@gmail.com",
			start: arg.start,
			end: arg.end
		};

		this.setState({
			// add new event data
			calendarEvents: this.state.calendarEvents.concat({
				// creates a new array
				title: newEvent.userId,
				start: newEvent.start,
				end: newEvent.end,
				editable: true,
				eventResizableFromStart: true
			})
		});
		// console.log(arg);
		// console.log(this.state.calendarEvents);
	};

	handleResize

	render() {
		return (
			<div className='cal-app'>
				<div className='cal-app-top'>
					{/* <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp; */}
					{/* <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp; */}
					(click a date / time to add an event)
				</div>
				<div className='cal-app-calendar'>
					<FullCalendar
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							momentPlugin
						]}
						selectable={this.state.calendarSelectable}
						header={{
							left: "prev,next today",
							center: `What's your availability`,
							right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
						}}
						defaultView='timeGridWeek'
						ref={this.calendarComponentRef}
						weekends={this.state.calendarWeekends}
						events={this.state.calendarEvents}
						eventColor='#4794B3'
						select={this.handleSelect}
						scrollTime={this.state.calendarScrollTime}
					/>
				</div>
			</div>
		);
	}
}
