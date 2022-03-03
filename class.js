// class Person {
//     constructor (firsName, persenAge, personHeight){
//         this.fName=firsName;
//         this.age=persenAge;
//         this.height=personHeight;
//         console.log(
//             'hello I am $ {this.}'
//         );

//     }
// }
let MyCloclkDisplay = document.getElementById("MyCloclkDisplay");

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let menutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session ="AM";

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12){
        hours = hours - 12;
        session = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    menutes = menutes < 10 ? "0" + menutes : menutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + menutes + ":" + seconds + " " + session;
    MyCloclkDisplay.innerHTML = time;
    MyCloclkDisplay.textContent = time;
    setTimeout(showTime, 1000);
    console.log(hours);
}

showTime();