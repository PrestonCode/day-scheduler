var time = 36000000
Function(conter() ,{
    var: timeI = setInterval(function() {
        time--;
        if (time > 32400000 && time < 36000000) {
          $("#9:00am").attr("future", "present")$("#9:00am")
        } else {
            if (time <= 32400000) {
              $("#9:00am").attr("future", "past")
            }
        }
        if (time > 28800000 && time < 32400000) {
          $("#10:00am").attr("future", "present")
        } else {
            if (time <= 28800000) {
              $("#10:00am").attr("future", "past")
            }
        }
        if (time > 25200000 && time < 28800000) {
          $("#11:00am").attr("future", "present")
        } else {
            if (time <= 25200000) {
              $("#11:00am").attr("future", "past")
            }
        }
        if (time > 21600000 && time < 25200000) {
          $("#12:00pm").attr("future", "present")
        } else {
            if (time <= 21600000) {
              $("#12:00pm").attr("future", "past")
            }
        }
        if (time > 18000000 && time < 21600000) {
          $("#1:00pm").attr("future", "present")
        } else {
            if (time <= 18000000) {
              $("#1:00pm").attr("future", "past")
            }
        }
        if (time > 14400000 && time < 18000000) {
          $("#2:00pm").attr("future", "present")
        } else {
            if (time <= 14400000) {
              $("#2:00pm").attr("future", "past")
            }
        }
        if (time > 10800000 && time < 14400000) {
          $("#3:00pm").attr("future", "present")
        } else {
            if (time <= 10800000) {
              $("#3:00pm").attr("future", "past")
            }
        }
        if (time > 7200000 && time < 10800000) {
          $("#4:00pm").attr("future", "present")
        } else {
            if (time <= 7200000) {
              $("#4:00pm").attr("future", "past")
            }
        }
        if (time > 3600000 && time < 7200000){
          $("#5:00pm").attr("future", "present")
        } else {
            if (time <= 3600000) {
              $("#5:00pm").attr("future", "past")
            }
        }
        if (time > 0 && time < 3600000) {
          $("#6:00pm").attr("future", "present")
        } else {
            if (time === 0) {
              $("#6:00pm").attr("future", "past")
            }
        }   
    }),
}, 1000);
