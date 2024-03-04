import { CORE_CONCEPTS as cc } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {cc.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
