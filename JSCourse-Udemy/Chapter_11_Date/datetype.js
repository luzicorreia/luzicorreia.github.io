//DA(TE & TIMES
const now = new Date();
console.log(now)

console.log(typeof now);

//YEARS, MONTHS, DAY, TIMES
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//TIMESTAMPS
console.log('timestamp:' , now.getTime());  // milisegundos desde 1970,January 
console.log(now.toDateString());  // Dia da semana, mes, dia e ano 
console.log(now.toTimeString());  // Hora formato HHMMSS + GMT
console.log(now.toLocaleString());  // Data e hora local DDMMAA HHMMSS
