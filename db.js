let allcalls = db.collection('orcalls');

class Stamp {
  constructor(roomtype, time){
    roomtype;
    time;
  }

async addCall(roomtype, time) {
    // format a new timestamp
    const now = new Date();
    const call = {
      roomtype: roomtype,
      time: time,
      created_at: firebase.firestore.Timestamp.fromDate(now)
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
          callback(change.doc.data());
          let times = change.doc.data();
            timeStamp.innerHTML =`${times.time}`;
        }
      });
    })
      // .get()
      // .then(function(querySnapshot) {
      //     querySnapshot.forEach(function(doc) {
      //       let times = doc.data();
      //         timeStamp.innerHTML =`${times.time}`;
      //     });
      // })
      // .catch(function(error) {
      //     console.log("Error getting documents: ", error);
      // });
}
// setTimeout("roomTimes()",500);
};
