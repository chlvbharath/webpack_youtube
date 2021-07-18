import "./styles/index.scss";
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
