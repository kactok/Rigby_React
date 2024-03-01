import { CORE_CONCEPTS as cc } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  function onSelect() {
    console.log("Hello");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts {...cc[0]} />
            <CoreConcepts {...cc[1]} />
            <CoreConcepts {...cc[2]} />
            <CoreConcepts {...cc[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={onSelect}>Components</TabButton>
            <TabButton onSelect={onSelect}>JSX</TabButton>
            <TabButton onSelect={onSelect}>Props</TabButton>
            <TabButton onSelect={onSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
