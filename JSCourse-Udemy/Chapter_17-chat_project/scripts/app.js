//DOM queries
const chatList = document.querySelector('.chat-list');

//chat instances
const ChatUI = new ChatUI(chatList);
const chatroom = new Chatroom("music", "mario");

//get class and render  (new get room)
chatroom.getChats((data) => {
  chatUI.render(data);
});
