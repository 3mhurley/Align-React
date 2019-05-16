const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/aligncalendar"
);


const calendarSeed = [
    {
    //   _id: ObjectId("0A2J48V5UQ"),
      ownerEmail: "bob@bob.com",
      startDate: new Date(Date.now())
    },
    {
    //   _id: ObjectId("38CJ3HS62T"),
      ownerEmail: "betty@betty.com",
      startDate: new Date(Date.now())
    }
  ];


db.Calendar     
    .remove({})
    .then(() => db.Calendar.collection.insertMany(calendarSeed))
    .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
    });

