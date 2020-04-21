let allcalls = db.collection('orcalls');
let commentsArray = new Array();
class Stamp {
  constructor(roomtype, time){
    roomtype;
    time;
  }

async addCall(roomtype, time, comment) {
    // format a new timestamp
    const now = new Date();
    const call = {
      roomtype: roomtype,
      time: time,
      created_at: firebase.firestore.Timestamp.fromDate(now),
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

    let commentsSets = new Set(commentsArray);

    function addComments(){
    for (let i = 0; i <10; i++) {
      let commentsSet = commentsSets[i];
      let html =
      `
        <li class="list-group-item">
          <span class="username">${commentsSet}</span>
        </li>
      `;
      commentsList.innerHTML += html
    }
console.log(html);
}
}
