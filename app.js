// List Variables
let timeButtons = document.querySelectorAll('.timeButton');
let clearButtons = document.querySelectorAll('.clear');
let clearAlls = document.querySelectorAll('.clearall');
let timeStamps = document.querySelectorAll('.timestamp');
let container = document.querySelector('.container')
let locationButtons = document.querySelectorAll('.location');
let timeCol = document.querySelectorAll('.time');
let desk = document.getElementById('desk');
let pacu = document.getElementById('pacu');
let tspt = document.getElementById('tspt');
let submitComments = document.querySelector('.submitComments');
let commentsBox = document.getElementById('commentsbox');
let login = document.querySelector('.login')
let logout = document.querySelector('#logout')

//Initiate functions
gettime();

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    roomTimes();
    showUI(user);

  } else {
    console.log('logged out');
    showUI();
  }
})


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
  setTimeout("gettime()",1000)
}

//Button click functions
container.addEventListener('click', function(e) {
  if(e.target.className === 'timeButton btn btn-primary btn-sm'){

    let id = e.target.id;
    let timeStamp = (timeStamps[`${id}`-10]);

    stamp.addCall(timeStamp.id,currentTime,' ')
      .then(() => e.target.disabled = true)
      .catch(err => console.log(err));
  }
  if(e.target.className === 'clear btn btn-secondary btn-sm'){
    let id = e.target.id;
    let timeStamp = (timeStamps[`${id}`-110]);

    stamp.addCall(timeStamp.id,' ',' ')
      .then(() => e.target.previousSibling.disabled = false)
      .catch(err => console.log(err));
  }
  if(e.target.className === 'clearall btn btn-secondary btn-sm'){

    let id = e.target.id;
    submitComments.id = id;

  }
});

//submit commentsbox
submitComments.addEventListener('click',function(e){

  let id = e.target.id;
  let comments = commentsBox.value;
  for (let i = `${id}`-210; i <`${id}`-206; i++) {
    let alltimeStamps = timeStamps[i];
    let allTimeButtons = timeButtons[i];

    stamp.addCall(alltimeStamps.id,' ',`${comments}`)
      .then(() => allTimeButtons.disabled=false)
      .catch(err => console.log(err));
    }
    commentsBox.value = '';

})

//login
login.addEventListener('submit',(e) =>{
  e.preventDefault();
  const email = login['username'].value;
  const password = login['password'].value;
  const loginButton = login['loginButton']
  //auth.signin
  auth.signInWithEmailAndPassword(email, password).then((cred) => {

  })
  login.reset();

} )

//logout
logout.addEventListener('click',(e) => {
  e.preventDefault();
  auth.signOut()
  location.reload();

} )
