let allcalls = db.collection('orcalls');
let commentsArray = new Array();
// let yesterday = new Date()
// yesterday.setDate(yesterday.getDate()-1);
let yesterday = new Date(new Date().getUTCFullYear(),new Date().getUTCMonth() , new Date().getUTCDate()-1);

//stamp contructor
class Stamp {
  constructor(roomtype, time){
    roomtype;
    time;
  }

async addCall(roomtype, time, comment) {
    // format a new timestamp
    const now = new Date();
    const day = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
    console.log(day);
    const call = {
      roomtype: roomtype,
      time: time,
      created_at: firebase.firestore.Timestamp.fromDate(now),
      created_day: day,
      comment: comment
    };
    // save the call document
    const response = await allcalls.add(call);
    return response;
  }
}

function roomTimes(){
  for (const timeStamp of timeStamps) {
    allcalls
    .where("roomtype", "==", `${timeStamp.id}`)
    .orderBy("created_at", "desc")
    .limit(1)
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
          let times = change.doc.data();
            timeStamp.innerHTML =`${times.time}`;
            disabled();
        }
      });
    })
}
};


//Dashboarding functions
function getDashboard(){
  commentsList.innerHTML = '';
  allcalls
  .where("comment", ">", " ")
  .orderBy("comment", "desc")
  .limit(50)
  .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let comments = doc.data()
            const comment = comments.comment;
            commentsArray.push(comment);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    let commentsSet = new Set(commentsArray)
    
    let commentsArrays = [...commentsSet];

    commentsArrays = commentsArrays.slice(0,10)
    commentsArrays.forEach(function(value){
      let html =
      `
        <li class="list-group-item p-2 ">
          <span class="username ml-2">${value}</span>
        </li>
      `;
      commentsList.innerHTML += html
      callswcomments.innerText = commentsSet.size
    })
}
//Dashboarding functions
function getLastDay(){
  console.log('function fired');
  allcalls
  .where("created_day", "==", yesterday)
  .orderBy("created_at", "desc")
  .limit(50)
  .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let results = doc.data()
            console.log(results);

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    // let commentsSet = new Set(commentsArray)
    // let commentsArrays = [...commentsSet];
    // // console.log(commentsArrays);
    // commentsArrays.slice(0,10)
    // commentsArrays.forEach(function(value){
    //   let html =
    //   `
    //     <li class="list-group-item p-2 ">
    //       <span class="username ml-2">${value}</span>
    //     </li>
    //   `;
    //   commentsList.innerHTML += html
    // })
}
