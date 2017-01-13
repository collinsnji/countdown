
setInterval(() => {
    var date = new Date();
    var time = {
      hour   : date.getHours(),
      minute : date.getMinutes(),
      second : date.getSeconds()
    };
    var current_time;
    var offset = {
      offsetHour : 23,
      offsetMinute : 59
     };
    var clock_wrapper = document.getElementById('clock-wrapper');
    
	// calculate time offsets
    var x = offset.offsetHour - time.hour;
    var y = offset.offsetMinute - time.minute;
    var z = offset.offsetMinute - time.second;
    
    if (x < 10 ) x = "0"+x;
    if (y < 10 ) y = "0"+y;
    if (z < 10) z = "0"+z;
     current_time = x + ":" + y + ":" + z;
    clock_wrapper.innerHTML = current_time;
 }, 500);
