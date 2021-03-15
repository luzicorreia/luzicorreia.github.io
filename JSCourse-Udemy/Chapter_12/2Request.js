const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); //transforma objeto JSON em objeto JS
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resouce");
      }
    });

    //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    //request.open("GET", 'todos.json');
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json").then(data => {
 console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});


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

// .then: ok execution, show data
// .catch: nok execution, show error message