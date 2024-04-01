document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
 
    const fullCalendarElement = document.querySelector('full-calendar');
 
    const calendar = new FullCalendar.Calendar(fullCalendarElement, {
       headerToolbar: {
          left: 'title',
          right: 'today,prev,next',
       },
       initialDate: todayStr,
       events: [
          {
             title: 'Checklist1',
             start: '2024-04-10',
             end: '2024-04-16',
             color: 'red'
          },
          {
             title: 'celebration',
             start: '2024-04-25',
             end: '2024-04-27',
             color: 'red'
          },
          {
             title: 'Holiday',
             start: '2024-04-25',
             end: '2024-04-27',
             color: 'green'
          },
          {
             title: 'Reading',
             start: '2024-04-28',
             end: '2024-04-30',
             color: 'purple'
          },
          {
             title: 'Event2-',
             start: '2024-04-05',
             end: '2024-04-07',
             color: 'blue' 
          }
       ],
       eventContent: function(arg) {
          return {
             html: `
                <div>
                   <span style="float:right;">
                      <i class="fas fa-edit edit-event" data-event-id="${arg.event.id}"></i>
                      <i class="fas fa-trash-alt delete-event" data-event-id="${arg.event.id}"></i>
                   </span>
                   ${arg.timeText}
                </div>
                <div>${arg.event.title}</div>
             `,
          };
       },
       eventClick: function(arg) {
          // Handle event click
          // We can implement edit or delete action here
          console.log('Event clicked:', arg.event.id);
       },
    });
 
    calendar.render();
 });
 