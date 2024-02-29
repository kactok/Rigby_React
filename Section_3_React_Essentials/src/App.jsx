import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS as cc } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ image: i, title: t, description: d }) {
  return (
    <li>
      <img src={i} alt={t} />
      <h3>{t}</h3>
      <p>{d}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
