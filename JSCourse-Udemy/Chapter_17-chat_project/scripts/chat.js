//ADDING NEW CHAT DOCUMENTS                             => addChat
//SETTING UP A REAL-TIME LISTENER TO GET NEW CHATS      => GetChats
//UPDATING THE USERNAME
//UPDATING THE ROOM

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
  }

  async addChat(message) {
    //FORMAT A CHAT OBJECT
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    //SAVE THE CHAT DOCUMENTS
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((onSnapshot) => {
        onSnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            //UPDATE THE UI
            callback(change.doc.data());
          }
        });
      });
  }
  updateName(username) {
    this.username = username;
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if(this.unsub){
      this.unsub();
    }
  }
}

const chatroom = new Chatroom("music", "mario");

chatroom.getChats((data) => {
  console.log(data);
});

//Visualizar a alteração após 3 segundos - teste
//setTimeout(() => {
//  chatroom.updateRoom('gaming');
//  chatroom.updateName('yoshi');
//  chatroom.getChats((data) => {
//    console.log(data);
//  });
//   chatroom.addChat('hello'); 
//}, 3000);
