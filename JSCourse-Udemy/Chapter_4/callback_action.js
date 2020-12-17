// get a reference to the 'ul'
const ul = document.querySelector('.people2');

const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people2.forEach = (person) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
};

console.log(html);
ul.innerHTML = html;