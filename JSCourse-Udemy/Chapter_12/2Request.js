const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data =JSON.parse(request.responseText);  //transforma objeto JSON em objeto JS
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //request.open("GET", 'todos.json');
  request.open("GET", 'todos/luigi.json');

  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

