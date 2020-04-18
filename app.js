// List Variables
let timeButton = document.querySelectorAll('.timeButton');
let clearAlls = document.querySelectorAll('.clearall');
let timeStamps = document.querySelectorAll('.timestamp');
let container = document.querySelector('.container')
let cell = document.querySelector('.list')

gettime();
// warning();

class BoardUI {
  constructor(cell){
    this.cell = cell;
  }


  render(data){
    const html = `
      <li class="list-group-item">
        <div class="time">${data.room}-${data.type}-${data.time}</span>
      </li>
    `;
    this.cell.innerHTML += html;

    // let currentStamp = document.getElementById('')
    // run a foreach loop

}
  renderNewTimes(data) {
    for (const timeStamp of timeStamps) {
      if(timeStamp.id == data.roomtype){
        timeStamp.innerHTML = `${data.time}`
        console.log(data);
      }
  }
}

}
const stamp = new Stamp (1, 'pacu', '8:59:05');
const boardUI = new BoardUI (cell);

// boardUI.renderNewTimes();

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
      alltimeStamps.innerHTML = ''
      let allTimeButtons = timeButton[i];
      allTimeButtons.disabled=false;
      }

  }
});

document.addEventListener(onload, stamp.updateTimes(data =>{boardUI.renderNewTimes(data)}))

// // Alert
// function warning(){
// for (const timeStamp of timeStamps) {
// let timeOne = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[3].innerHTML} PST`);
// let timeTwo = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[6].innerHTML} PST`);
// let timeThree = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[9].innerHTML} PST`);
// let timeFour = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[12].innerHTML} PST`);
//   if(Math.abs(timeOne - timeTwo) > 5000 || Math.abs(timeThree - timeTwo) > 5000 ){
//
//     timeStamp.style = "color:red";
//   }
// else {
//   timeStamp.style = "color:black";
// }
//   }
//   setTimeout("warning()",600)
//   }
