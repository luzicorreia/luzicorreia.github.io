//const content = document.querySelector('p');
//console.log(content.classList)
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('sucess');

const work = document.querySelectorAll('p');
work.forEach(line => {
//    console.log(textContent);
//    console.log(innerText);

    if(line.textContent.includes('error')){
        line.classList.add('error');
    } 
    if(line.innerText.includes('success')){
        line.classList.add('success');
    }
});

// Method: classList.toggle: if find = remove else add
const title = document.querySelector('.title');
title.classList.toggle('test'); // adicionou
title.classList.toggle('test'); // removeu
