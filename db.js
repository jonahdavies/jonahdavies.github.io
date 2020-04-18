let allcalls = db.collection('orcalls');
class Stamp {
  constructor(room, type, time){
    room;
    type;
    time;
  }

async addCall(room, type, time) {
    // format a new timestamp
    const now = new Date();
    const call = {
      room: room,
      type: type,
      time: time,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the call document
    const response = await allcalls.add(call);
    return response;
  }

updateTimes(callback){
    allcalls
      .orderBy('room')
      .orderBy('type')
      .orderBy('created_at', "desc")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            callback(change.doc.data());}
          }
        );
    });
  }

}
