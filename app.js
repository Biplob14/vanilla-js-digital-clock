function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var second = document.getElementById('seconds');

    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    second.innerHTML = new Date().getSeconds();
}

var interval = setInterval(clock, 100);