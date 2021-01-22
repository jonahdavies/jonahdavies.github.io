//variable

let dropDownBox = document.getElementById('dropdownMenu');
let delay = document.getElementById('maxTime');

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let date = new Date

dropDownBox.addEventListener('change', (e)=>{

  if (dropDownBox.value == "European Union"){
    let day = date.addDays(7).getDate();
    let month = date.addDays(7).getMonth()+1;
    let year = date.addDays(7).getFullYear();
    delay.innerHTML = `<h5>Flight must leave on or after: ${day}/${month}/${year}</h5>`;
  }

  else if (dropDownBox.value == "United States"){
    let day = date.addDays(9).getDate();
    let month = date.addDays(9).getMonth()+1;
    let year = date.addDays(9).getFullYear();
    delay.innerHTML = `<h5>Flight must leave on or after: ${day}/${month}/${year}</h5>`;
  }
  else if (dropDownBox.value == "Mexico"){
    let day = date.addDays(10).getDate();
    let month = date.addDays(10).getMonth()+1;
    let year = date.addDays(10).getFullYear();
    delay.innerHTML = `<h5>Flight must leave on or after: ${day}/${month}/${year}</h5>`;
  }
  else {
    delay.innerHTML = '';
  }
}  )
