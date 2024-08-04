//function pulls time data

function updateTime() {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // January is 0 not 1
    const currentYear = currentDate.getFullYear();
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    const currentMinute = currentDate.getMinutes();
    const currentHour = currentDate.getHours();
    const time = currentHour + ":" + currentMinute;
  
    console.log(time);
    console.log("Hello World " + dateString);
  
    document.getElementById("dateString").innerHTML = time;
  }
  
  setInterval(updateTime, 1000); // Update every second
  