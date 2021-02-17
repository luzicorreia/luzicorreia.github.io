const clock = document.querySelector('.clock');

const tic = () => {
    const now3 = new Date();

    const h = now3.getHours();
    const m = now3.getMinutes();
    const s = now3.getSeconds();
//    console.log(h, m, s);

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
    `;

    clock.innerHTML = html;
};

setInterval(tic, 1000);
