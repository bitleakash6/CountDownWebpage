const endDate = "25 August 2024 7:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0){
        return;
    }
    // console.log(diff);
    // console.log(Math.floor(diff/ 3600 / 24));

    inputs[0].value = Math.floor(diff/ 3600 / 24);         //convert into days

    // console.log(Math.floor (diff/ 3600) % 24);
    inputs[1].value = Math.floor((diff/ 3600) % 24)        //convert into hours
    
    // console.log(Math.floor(diff/60) % 60);
    inputs[2].value = (Math.floor(diff/60) % 60);

    // console.log(Math.floor(diff) % 60);
    inputs[3].value = (Math.floor(diff) % 60);
 }

 //initial call
 clock()

setInterval(
    () => {
        clock()
    }, 1000
);

 /**
  * 1 day = 24 hrs
  * 1 hr = 60 mins
  * 60 min = 3600 sec
  */