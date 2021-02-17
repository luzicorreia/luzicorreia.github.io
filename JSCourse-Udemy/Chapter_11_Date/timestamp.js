//TIMESTAMPS
//Formato DATE: Tue Feb 02 2021 06:37:49 GMT-0300 (Horário Padrão de Brasília)
const before = new Date('Feb 2 2021 06:37:49');
const now2 = new Date();
console.log(before);


console.log(now2.getTime(), before.getTime());

const diff = now2.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);
console.log(`The blog was written ${days} days ago`);

//CONVERTING TIMESTAMPS INTO DATE OBJECTS
const timestamp = 1613123145395;
console.log(new Date(timestamp));
