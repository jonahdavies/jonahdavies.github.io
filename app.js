// List Variables
let timeButtons = document.querySelectorAll('.timeButton');
let clearAlls = document.querySelectorAll('.clearall');
let timeStamps = document.querySelectorAll('.timestamp');
let container = document.querySelector('.container')
let desk = document.getElementById('desk');
let pacu = document.getElementById('pacu');
let tspt = document.getElementById('tspt');
console.log(desk.className);

gettime();
warning();
setTimeout(disabled,1000);
window.addEventListener("load",roomTimes);

//Initiate Stamp
const stamp = new Stamp (1, 'pacu', '8:59:05');

// Continuously update Time
function gettime() {
  var date= new Date();
  var hr = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if(m < 10)
  {
      m = "0" + m
  }
  if(s < 10)
  {
      s = "0" + s
  }
  currentTime = hr + ":" + m + ":" + s;
  setTimeout("gettime()",100)
}

//Button click functions
container.addEventListener('click', function(e) {
  if(e.target.className === 'timeButton btn btn-primary btn-sm'){

    let id = e.target.id;
    let timeStamp = (timeStamps[`${id}`-10]);

    stamp.addCall(timeStamp.id,currentTime)
      .then(() => e.target.disabled = true)
      .catch(err => console.log(err));

  }
  if(e.target.className === 'clear btn btn-secondary btn-sm'){
    let id = e.target.id;
    let timeStamp = (timeStamps[`${id}`-110]);

    stamp.addCall(timeStamp.id,' ')
      .then(() => e.target.previousSibling.disabled = false)
      .catch(err => console.log(err));


  }
  if(e.target.className === 'clearall btn btn-secondary btn-sm'){
    let id = e.target.id;
    for (let i = `${id}`-200; i <`${id}`-196; i++) {
      let alltimeStamps = timeStamps[i];
      let allTimeButtons = timeButtons[i];
      stamp.addCall(alltimeStamps.id,' ')
        .then(() => allTimeButtons.disabled=false)
        .catch(err => console.log(err));
      }

  }
});

//Button disabled
function disabled(){

for (const timeButton of timeButtons) {
  if(timeButton.parentNode.nextSibling.innerText === ''){

    timeButton.disabled=false;
  }
else {
  timeButton.disabled=true;
}
  }
  }

// Alert
function warning(){
for (const timeStamp of timeStamps) {
let timeOne = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[3].innerHTML} PST`);
let timeTwo = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[6].innerHTML} PST`);
let timeThree = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[9].innerHTML} PST`);
let timeFour = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[12].innerHTML} PST`);

  if(Math.abs(timeOne - timeTwo) > 60000 || Math.abs(timeThree - timeTwo) > 60000 || Math.abs(timeFour - timeThree) > 60000  ){

    timeStamp.style = "color:red; font-weight:700;";
  }
else {
  timeStamp.style = "color:black";
}
  }
  setTimeout(warning,600)
  }

// Loation Selection
desk.addEventListener('click', function(e){
  desk.className = "location btn btn-success btn-lg btn-block"
  pacu.className = "location btn btn-primary btn-lg btn-block"
  tspt.className = "location btn btn-primary btn-lg btn-block"

});
pacu.addEventListener('click', function(e){
  desk.className = "location btn btn-primary btn-lg btn-block"
  pacu.className = "location btn btn-success btn-lg btn-block"
  tspt.className = "location btn btn-primary btn-lg btn-block"
});
tspt.addEventListener('click', function(e){
  desk.className = "location btn btn-primary btn-lg btn-block"
  pacu.className = "location btn btn-primary btn-lg btn-block"
  tspt.className = "location btn btn-success btn-lg btn-block"
});
// for (let i = `${id}`-200; i <`${id}`-196; i++) {
//   let alltimeStamps = timeStamps[i];
//   let allTimeButtons = timeButtons[i];
