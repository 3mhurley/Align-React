const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/aligncalendar"
);

// const calendarSeed = [
// 	{
// 		calendarId: "0A2J48V5UQ",
// 		userId: "bob@bob.com",
// 		start: "05/27/2019"
// 	},
// 	{
// 		calendarId: "38CJ3HS62T",
// 		userId: "betty@betty.com",
// 		start: "05/27/2019"
// 	}
// ];

// const scheduleSeed = [
// 	{
// 		title: "bob@bob.com",
// 		calendarID: "0A2J48V5UQ",
// 		userId: "bob@bob.com",
// 		start: "2019-05-28T18:00:00",
// 		end: "2019-05-28T19:00:00"
// 	},
// 	{
// 		title: "bob@bob.com",
// 		calendarID: "0A2J48V5UQ",
// 		userId: "bob@bob.com",
// 		start: "2019-05-29T16:00:00",
// 		end: "2019-05-29T19:00:00"
// 	},
// 	{
// 		title: "betty@betty.com",
// 		calendarID: "0A2J48V5UQ",
// 		userId: "betty@betty.com",
// 		start: "2019-05-29T18:00:00",
// 		end: "2019-05-29T20:00:00"
// 	},
// 	{
// 		title: "betty@betty.com",
// 		calendarID: "0A2J48V5UQ",
// 		userId: "betty@betty.com",
// 		start: "2019-05-29T21:00:00",
// 		end: "2019-05-29T22:00:00"
// 	}
// ];

// db.Calendar.remove({})
// 	.then(() => db.Calendar.collection.insertMany(calendarSeed))
// 	.then(data => {
// 		console.log(data.result.n + " records inserted!");
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		process.exit(1);
// 	});

// db.Schedule.remove({})
// 	.then(() => db.Schedule.collection.insertMany(scheduleSeed))
// 	.then(data => {
// 		console.log(data.result.n + " records inserted!");
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		process.exit(1);
// 	});
