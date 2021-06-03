//RENDER CHAT TEMPLATES TO THE DOM
//CLEAR THE LIST OF CHATS (WHEN THE ROOM CHANGES)

class ChatUI {
    constructor(list){
        this.list = list;
    }
    render(data){
        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
}