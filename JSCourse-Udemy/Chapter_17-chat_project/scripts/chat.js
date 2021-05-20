//ADDING NEW CHAT DOCUMENTS                             => addChat
//SETTING UP A REAL-TIME LISTENER TO GET NEW CHATS      => GetChats
//UPDATING THE USERNAME
//UPDATING THE ROOM

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
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
    console.log(response);
    return response;
  }
  getChats(callback){
      this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(onSnapshot => {
          onSnapshot.docChanges().forEach(change => {
              if(change.type ==='added'){
                  //UPDATE THE UI
                  callback(change.doc.data());
              }
          });
      });
  }
}

const chatroom = new Chatroom("general", "mario");
chatroom.getChats((data) => {
      console.log(data);
  });