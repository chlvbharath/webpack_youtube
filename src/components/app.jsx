import "../styles/index.scss";
import Recipes from "./recipes";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
};
export default App;
