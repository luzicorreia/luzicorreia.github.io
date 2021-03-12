const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); //transforma objeto JSON em objeto JS
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //request.open("GET", 'todos.json');
  request.open("GET", resource);
  request.send();
};

//CALLBACK HELL - RESOURCE
//getTodos("todos/luigi.json", (err, data) => {
//  console.log(data);
//  getTodos("todos/mario.json", (err, data) => {
//    console.log(data);
//    getTodos("todos/shaun.json", (err, data) => {
//      console.log(data);
//    });
//  });
//});

//PROMISES BASICS
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    //resolve('some data');
    reject("some error");
  });
};

//Promise WITHOUT catch when err
getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

//Promise WITH catch when err
//getSomething().then(data => {
//  console.log(data);
//}).catch(err => {
//  console.log(err);
//});