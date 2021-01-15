function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var second = document.getElementById('seconds');
    var timeForm = document.getElementById('format');

    var timeHour = leadZero(new Date().getHours());

    hours.innerHTML = format(timeHour);
    minutes.innerHTML = leadZero(new Date().getMinutes());
    second.innerHTML = leadZero(new Date().getSeconds());
    timeForm.innerHTML = period(timeHour);


}

// set am/pm format 
function period(time) {
    if(time > 11)
        return 'PM';
    return 'AM';
}

// set 12 hour format
function format(time) {
    if(time > 11)
        return time = time % 12;    
}
var interval = setInterval(clock, 100);
// make a lead number in case of less than 10 
function leadZero(time) {
    if(time <= 9)
        time = '0' + time;
    
    return time;
}