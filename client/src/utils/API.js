import axios from "axios";

export default {
    //CAL AXIOS
    
    //get all calendars
    getCalendars: function() {
        return axios.get("/api/calendar");
    },

    //gets the calendar with the given id
    getCalendar: function(id) {
        return axios.get("/api/calendar/" + id);
    },

    //deletes calendar with the given id
    deleteCalendar: function(id) {
        return axios.delete("/api/calendar/" + id);
    },

    //saves calendar to db
    saveCalendar: function(calData) {
        return axios.post("/api/calendar", calData);
    },

    //SCHEDULE AXIOS

    //get all schedules
    getSchedules: function() {
        return axios.get("/api/schedule");
    },

    //gets the schedule with given id
    getSchedule: function(id) {
        return axios.get("/api/calendar/" + id);
    },

    //deletes calendar with the given id
    deleteSchedule: function(id) {
        return axios.delete("/api/schedule/" + id);
    },

    //saves calendar to db
    saveSchedule: function(schedData) {
        return axios.post("api/schedule", schedData);
    }
};