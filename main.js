const URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

const writeRandomCocktail = () => {
  window
    .fetch(URL, { method: "GET" })
    .then((r) => r.json())
    .then((r) => {
      const drinkName = r.drinks[0].strDrink;
      //   outputEl.innerText = JSON.stringify(r, undefined, 2);
      outputEl.innerText = drinkName;
    })
    .catch((e) => console.error(e));

  const outputEl = document.getElementById("cocktail-name");
};

document
  .getElementById("random")
  .addEventListener("click", writeRandomCocktail);
