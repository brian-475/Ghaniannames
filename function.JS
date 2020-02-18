function AkanNames() {
    var month = document.getElementById("month").value;
    var MM = parseInt(month);// This get's the actual month value without strings
    var day = document.getElementById("day").value;
    var  DD = parseInt(day);// This get's the actual month value without strings
    var year = document.getElementById("year").value;
    var YY = parseInt(year);// This get's the actual month value without strings
    var  CC = parseInt(YY - 1) / 100 + 1;//This is the century digits
    var dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];//male names
    var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaw", "Afua", "Ama"];//female names
    //checking for gender
    if (document.getElementById("gender").checked) {
        var gender = 'male';
    }
    else {
        var gender = 'female';
    }
    //checking for month
    if (MM < 1 || MM > 12) {
        alert("Invalid month");
    }
    //checking for day
    else if (DD < 1 || DD > 31) {
        alert("Invalid date");
    }
    //validating the month of february
    else if (MM === 2 && DD > 29) {
        alert("Invalid user date");
    }

    //checking for year
    else if (YY < 1000 || YY > 2020) {
        alert("Invalid year");
    } else {

        //The math.ceil() function,rounds numbers to the nearest whole numbers.
        //first day.
        if (Math.ceil(dayOfTheWeek)==1){
            if (gender === 'male') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + maleNames[1] + "You were born on Monday.";
            }
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + femaleNames [1] + "Your were born on Monday.";
            }
        }
        // }
        //second day()
        else if (Math.ceil(dayOfTheWeek) == 2) {
            if (gender === 'male') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + maleNames [2] + "You were born on Tuesday.";
            }

            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + femaleNames [2] + "You were born on Tuesday";
            }
        }
            //Third day.
            else if (Math.ceil(dayOfTheWeek) == 3 ) {
                if (gender === 'male') {
                    document.getElementById("results").innerHTML =
                        "Your day name is" + maleNames [3] + "You were born on Wednesday.";
                }
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + femaleNames [3] + "You were born on Wednesday.";
            }
        }
            //fourth day
            else if (Math.ceil(dayOfTheWeek) == 4 ) {
                if (gender === 'male') {
                    document.getElementById("results").innerHTML =
                        "Your day name is" + maleName [4] + "You were born on Thursday.";
                }
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + femaleNames [4] + "You were born on Thursday.";
            }
        }

            //fifth day.
            else if (Math.ceil(dayOfTheWeek) == 5 ) {
                if (gender === 'male') {
                    document.getElementById("results").innerHTML =
                        "Your day name is" + maleNames[5] + "You were born on Friday.";
                }
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "your day name is" + femaleNames [5] + "You were born on Friday.";
            }
        }
            //sixth day
            else if (Math.ceil(dayOfTheWeek) == 6){
                if (gender === 'male') {
                    document.getElementById("results").innerHTML =
                        "Your day name is" + maleNames[6] + "You were born on Saturday.";
                }
            
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is" + femaleNames[6] + "You were born on Saturday.";
            }
        }
            //seventh day
            else if (Math.ceil(dayOfTheWeek) == 0 ) {
                if (gender === 'male') {
                    document.getElementById("results").innerHTML =
                        "Your day name is" + maleName[6] + "You were born on Sunday.";
                }
            
            else if (gender === 'female') {
                document.getElementById("results").innerHTML =
                    "Your day name is " + femaleName[0] + "You were born on Sunday.";
            }
        }
    }
}
