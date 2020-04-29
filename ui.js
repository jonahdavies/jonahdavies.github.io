let loggedInUI = document.querySelectorAll('.loggedInUI');
let loggedOutUI = document.querySelectorAll('.loggedOutUI');


setTimeout(disabled,1000);
warning();


// Shouw
const showUI = (user) => {
    if (user) {
      // toggle user UI elements
      loggedInUI.forEach(item => item.style.display = 'block');
      loggedOutUI.forEach(item => item.style.display = 'none');
      if (user.uid !== 'Hp7WvYymekMl5fenq6v7VRwXYlH3'){
        console.log(user);
      }
      else{
        let resetTime = document.querySelectorAll('.resetTime');
        timeButtons.forEach(item => item.classList += ' invisible');
        clearButtons.forEach(item => item.classList += ' invisible');
        clearAlls.forEach(item => item.style.display = 'none');
        locationButtons.forEach(item => item.style.display = 'none');
        resetTime.forEach(item => item.style.display = 'none');
      }

    }
    else {
      // toggle user UI elements off
      loggedInUI.forEach(item => item.style.display = 'none');
      loggedOutUI.forEach(item => item.style.display = 'block');
    }
  };



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

    if(Math.abs(timeOne - timeTwo) > 120000 || Math.abs(timeThree - timeTwo) > 900000 || Math.abs(timeFour - timeThree) > 900000  ){

      timeStamp.style = "color:red; font-weight:700;";
    }
  else {
    timeStamp.style = "color:black";
  }
    }
    setTimeout(warning,600)
    }

// Location Selection
  desk.addEventListener('click', function(e){
    if(pacu.className === 'location btn btn-success btn-lg btn-block'){
      invisiblePacu();
      invisibleRoom();
      invisibleDesk();

    }
    else if (tspt.className === 'location btn btn-success btn-lg btn-block') {
      invisibleTspt();
      invisibleRoom();
      invisibleDesk();
    }
    else{
    invisiblePacu();
    invisibleTspt();
  }
  desk.className = "location btn btn-success btn-lg btn-block"
  pacu.className = "location btn btn-primary btn-lg btn-block"
  tspt.className = "location btn btn-primary btn-lg btn-block"
  desk.disabled=true;tspt.disabled=false;pacu.disabled=false;
  visibleClearAll();
  });

  pacu.addEventListener('click', function(e){
    if(desk.className === 'location btn btn-success btn-lg btn-block'){
      invisiblePacu();
      invisibleRoom();
      invisibleDesk();

    }
    else if (tspt.className === 'location btn btn-success btn-lg btn-block') {
      invisibleTspt();
      invisiblePacu();
    }
    else{
    invisibleRoom();
    invisibleDesk();
    invisibleTspt();
  }
  desk.className = "location btn btn-primary btn-lg btn-block"
  pacu.className = "location btn btn-success btn-lg btn-block"
  tspt.className = "location btn btn-primary btn-lg btn-block"
  pacu.disabled=true;desk.disabled=false;tspt.disabled=false;
  invisibleClearAll();
  });

  tspt.addEventListener('click', function(e){
    if(desk.className === 'location btn btn-success btn-lg btn-block'){
      invisibleTspt();
      invisibleRoom();
      invisibleDesk();

    }
    else if (pacu.className === 'location btn btn-success btn-lg btn-block') {
      invisibleTspt();
      invisiblePacu();
    }
    else{
    invisibleRoom();
    invisibleDesk();
    invisiblePacu();
  }
  desk.className = "location btn btn-primary btn-lg btn-block";
  pacu.className = "location btn btn-primary btn-lg btn-block";
  tspt.className = "location btn btn-success btn-lg btn-block";
  tspt.disabled=true;desk.disabled=false;pacu.disabled=false;
  invisibleClearAll();
  });

  //Toggle invisible on location
  function invisibleRoom() {
    for (let i = 0; i <100; i+=4) {
      let clearButton = clearButtons[i];
      let callButton = timeButtons[i];
      clearButton.classList.toggle('invisible');
      callButton.classList.toggle('invisible');
  };
  }
  function invisibleDesk() {
    for (let i = 1; i <100; i+=4) {
      let clearButton = clearButtons[i];
      let callButton = timeButtons[i];
      clearButton.classList.toggle('invisible');
      callButton.classList.toggle('invisible');
  };
  }
  function invisiblePacu() {
    for (let i = 2; i <100; i+=4) {
      let clearButton = clearButtons[i];
      let callButton = timeButtons[i];
      clearButton.classList.toggle('invisible');
      callButton.classList.toggle('invisible');
  };
  }
  function invisibleTspt() {
    for (let i = 3; i <100; i+=4) {
      let clearButton = clearButtons[i];
      let callButton = timeButtons[i];
      clearButton.classList.toggle('invisible');
      callButton.classList.toggle('invisible');
  };
  }
  function invisibleClearAll() {
    for (let i = 0; i <28; i++) {
      let clearAll = clearAlls[i];
      clearAll.classList.add('invisible');
  };
  }
  function visibleClearAll() {
    for (let i = 0; i <28; i++) {
      let clearAll = clearAlls[i];
      clearAll.classList.remove('invisible');
  };
  }
