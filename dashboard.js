//Get Variables
let reload = document.querySelector('.btn');
let commentsList = document.querySelector('.commentsList')
let currentDate = document.querySelector('.currentdate')
let callswcomments =document.querySelector('.callswcomments')


//append currentdate

yesterdayOutput = yesterday.toString().slice(0,16);
currentDate.innerHTML += `${yesterdayOutput}`

//event listeners
reload.addEventListener("click", getDashboard);
window.addEventListener('load', getDashboard);
setTimeout(getDashboard, 2000);
setTimeout(getLastDay, 3000);
