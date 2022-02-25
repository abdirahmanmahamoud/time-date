let time = document.querySelector('#time');
let date = document.querySelector('#date');

const monthNames = ['Jan','Feb','Mar','Apr','May', 'June','Jul','Aug','Sep','Oct','Nov','Dec'];
const dayNames = ['Sat','Sun','Mon','Tues','Wed','Thur','Fri'];

setInterval( () =>{
    dateTime()
},1000)

function dateTime(){  
let dateTime = new Date();
let nowDayNub = dateTime.getDay();
let NowDate = dateTime.getDate();
let NowMonthNub = dateTime.getMonth();
let NowYear = dateTime.getFullYear();

let nowDay = dayNames[nowDayNub + 1];
let NowMonth = monthNames[NowMonthNub];
let weekDate = `${nowDay}, ${NowMonth} ${NowDate} ${NowYear}`;
date.innerHTML = weekDate;

let hour = hours(dateTime);
time.innerHTML = hour;
}
function hours(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12
    let hoursNow = '';
    if(hours > 9){
        hoursNow = hours;
    }else{
        hoursNow = `0${hours}`
    }

    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hoursNow + ' : ' + minutes + ' ' + ampm;
    return strTime;
}