import React from "react";

// @fullcalendar/react @fullcalendar/interaction @fullcalendar/daygrid @fullcalendar/moment @fullcalendar/timegrid
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";

import moment from "moment";
import API from "../../utils/API";
import "./cal.scss";

export default class CalApp extends React.Component {
	calendarComponentRef = React.createRef();
	state = {
		error: null,
		isLoaded: true,
		calendarId: "",
		calendarUserId: "",
		calendarUserList: [],
		calendarScrollTime: moment()
			.subtract(2, "h")
			.format("HH:mm:ss"),
		calendarSelectable: true,
		calendarWeekends: true,
		calendarDefaultDate: new Date(),
		calendarEvents: [
			// initial event data
			{
				title: "Sample Event",
				start: new Date(),
				end: new Date(),
				editable: true,
				eventStartEditable: true,
				eventResizableFromStart: true
			}
		]
	};

	componentDidMount() {
		// Testing
		// sessionStorage.setItem("calId", "0A2J48V5UQ");
		// sessionStorage.setItem("userId", "bob@bob.com");
		// sessionStorage.setItem("userArr", ["bob", "betty"]);

		// Get ID's from session storage
		let calId = sessionStorage.getItem("calId");
		let userId = sessionStorage.getItem("userId");

		this.setState({
			calendarId: calId,
			calendarUserId: userId
		});
	}

	handleSelect = arg => {
		const payload = {
			calendarId: this.state.calendarId,
			userId: this.state.userId,
			start: arg.start,
			end: arg.end
		};

		this.setState({
			// add new event data
			calendarEvents: this.state.calendarEvents.concat({
				// creates a new array
				title: payload.userId,
				start: payload.start,
				end: payload.end,
				editable: true,
				eventStartEditable: true,
				eventResizableFromStart: true
			})
		});
	};

	handleResize = arg => {
		// new event
		const pEvent = arg.prevEvent;
		// old event
		const nEvent = arg.event;
		// find index of old event
		const index = this.state.calendarEvents.findIndex(
			calEvent => calEvent === pEvent
		);
		// replace events
		this.state.calendarEvents.splice(index, 1, nEvent);
	};

	initCalendar() {
		if (this.state.error) {
			return <div>Error: {this.state.error.message}</div>;
		} else if (!this.state.isLoaded) {
			return <div>Loading...</div>;
		} else {
			return this.loadCalendar();
		}
	}

	loadCalendar() {
		return (
			<div className='cal-app'>
				<div className='cal-app-top'>
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
						defaultDate={this.state.calendarDefaultDate}
						events={this.state.calendarEvents}
						eventColor='#4794B3'
						select={this.handleSelect}
						eventResize={this.handleResize}
						scrollTime={this.state.calendarScrollTime}
					/>
				</div>
			</div>
		);
	}

	render() {
		return this.initCalendar();
	}
}
