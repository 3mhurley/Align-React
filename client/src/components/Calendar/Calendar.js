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
		calendarId: "",
		calendarUserId: "",
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
		this.loadCalendar();
	}

	//load calendar by id from DB
	loadCalendar = id => {
		API.getCalendar(id)
			.then(res =>
				this.setState({
					calendarId: res.calendarId,
					calendarDefaultDate: res.start
				})
			)
			.catch(err => console.log(err));
	};

	loadEvents = id => {
		API.getSchedule(id)
			.then(res =>
				this.setState({
					title: res.userId,
					start: res.start,
					end: res.end,
					editable: true,
					eventStartEditable: true,
					eventResizableFromStart: true
				})
			)
			.catch(err => console.log(err));
	};

	handleSelect = arg => {
		let newEvent = {
			calendarId: "",
			userId: "",
			start: arg.start,
			end: arg.end
		};

		API.saveSchedule({
			//calendarId: calendarId,
			userId: newEvent.userId,
			start: newEvent.start,
			end: newEvent.end
		});

		this.setState({
			// add new event data
			calendarEvents: this.state.calendarEvents.concat({
				// creates a new array
				title: newEvent.userId,
				start: newEvent.start,
				end: newEvent.end,
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
		// api it
		API.saveSchedule({
			//calendarId: calendarId,
			userId: arg.event.title,
			start: arg.event.start,
			end: arg.event.end
		});
	};

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
}
