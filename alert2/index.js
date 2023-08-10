import { Calendar } from '@fullcalendar/core';

// function checkSelectedDate(event) {
//     var selectedDate = event.target.value;
//     var blockedDate = "2023-06-22"; // 막고 싶은 특정 날짜 설정
//         if (selectedDate === blockedDate) {
//             event.target.value = "";
//             alert("해당 날짜는 선택할 수 없습니다.");
//         }
//     }

    const calendarEl = document.getElementById('myCalendar');
    const calendar = new Calendar(calendarEl, {
        // 캘린더 설정
        events: [],
        dateClick: function (info) {
            const clickedDate = info.date;
            const blockedDate = new Date(2023, 4, 1); // 막고 싶은 특정 날짜 설정

            if (clickedDate.getTime() === blockedDate.getTime()) {
                alert('해당 날짜는 선택할 수 없습니다.');
            }
        },
    });
    calendar.render();
