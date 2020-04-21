//Get Variables
let reload = document.querySelector('.btn');
let commentsList = document.querySelector('.commentsList')
let yesterday = new Date()
yesterday.setDate(yesterday.getDate()-1);

//event listeners
reload.addEventListener("click", getDashboard);

setTimeout(getDashboard, 3000);
setTimeout(getDashboard, 3000);
