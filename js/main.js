
setInterval(() => {
    var date = new Date();
    var time = {
      hour   : date.getHours(),
      minute : date.getMinutes(),
      second : date.getSeconds()
    };
    var current_time;
    var offset = {
      offsethHour : 24,
      offsetMinute : 60
     };
    var clock_wrapper = document.getElementById('clock-wrapper');

    if (time.hour < 10) time.hour = "0"+time.hour;
    if (time.minute < 10) time.minute = "0"+time.minute;
    if (time.second < 10) time.second = "0"+time.second;
     current_time = (offset.offsetHour - time.hour) + ":" 
                  + (offset.offsetMinute - time.minute) + ":" 
                  + (offset.offsetMinute - time.second);

    clock_wrapper.innerHTML = current_time;
 }, 500);
