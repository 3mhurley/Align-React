# FullCalendar

`npm install --save @fullcalendar/core @fullcalendar/interaction @fullcalendar/daygrid @fullcalendar/moment @fullcalendar/react`

[https://fullcalendar.io/docs/react/](https://fullcalendar.io/docs/react/)

```js
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

document.addEventListener("DOMContentLoaded", function() {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin]
  });

  calendar.render();
});
```
