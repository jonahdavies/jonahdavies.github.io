// List Variables
let clears = document.querySelectorAll('.clear');
let clearAlls = document.querySelectorAll('.clearall');
let timeMarks = document.querySelectorAll('.timeButton');
let timeStamps = document.querySelectorAll('.timestamp');

gettime();
warning();

//Continuously update Time
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

//Current Time
for (const timeMark of timeMarks) {
    timeMark.addEventListener('click', function(f) {
      this.parentNode.nextSibling.innerHTML=currentTime;
    })
};



// clear current
for (const clear of clears) {
  clear.addEventListener('click', function(e) {
    // this.node.nextElementSibling.innerHTML = ` `
    this.parentNode.nextSibling.innerHTML=` `;
  });
}

//Clear All
for (const clearAll of clearAlls) {
  clearAll.addEventListener('click', function(g) {
     let timeOne = this.parentNode.parentNode.childNodes[3];
     let timeTwo = this.parentNode.parentNode.childNodes[6];
     let timeThree = this.parentNode.parentNode.childNodes[9] ;
     timeOne.innerHTML=` `
     timeOne.style="color:black"
     timeTwo.innerHTML=` `
     timeTwo.style="color:black"
     timeThree.innerHTML=` `
     timeThree.style="color:black"
  });
}

//Alert
function warning(){
for (const timeStamp of timeStamps) {
let timeOne = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[3].innerHTML} PST`);
let timeTwo = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[6].innerHTML} PST`);
let timeThree = Date.parse(`01 Jan 1970 ${timeStamp.parentNode.childNodes[9].innerHTML} PST`);

  if(Math.abs(timeOne - timeTwo) > 5000 || Math.abs(timeThree - timeTwo) > 5000 ){


    timeStamp.style = "color:red";
  }
else {
  timeStamp.style = "color:black";
}
  }
  setTimeout("warning()",600)
  }
