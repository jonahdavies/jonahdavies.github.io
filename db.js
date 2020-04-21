let allcalls = db.collection('orcalls');

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
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate()-1);
  allcalls
  .where("created_at", "<", "yesterday")
  .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
