const list = document.querySelector("ul");

const addRecipe = (recipe) => {
  let html = `
    <li>
    <div>${recipe.title}</div>
    </li>
    `;
  console.log(html);
};

db.collection("recipes")
  .get()
  .then((snapshot) => {
    //WHEN WE HAVE THE RESPONSE DATA
    snapshot.docs.forEach((doc) => {
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });
