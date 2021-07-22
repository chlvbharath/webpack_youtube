import { useState } from "react";

const elvenRecipe = {
  strips: 2,
  ironIgnot: 1,
  refine: 4,
};
const sample = {
  ...elvenRecipe,
  qty: 23,
  store: "costcos",
  address: "unavailables",
};
console.log(elvenRecipe, sample, "hellp");

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <h3>current Recipe</h3>
      <button onClick={() => setRecipe(elvenRecipe)}>Elven recipe</button>
      <button onClick={() => setRecipe(sample)}>Sample</button>
      <ul>
        {Object.keys(recipe).map((r, index) => (
          <li key={index}>
            {r}:{recipe[r]}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Recipes;
