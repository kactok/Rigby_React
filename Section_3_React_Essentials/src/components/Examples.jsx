import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  const buttons = ["components", "jsx", "props", "state"];
  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        buttons={buttons.map((btn) => (
          <TabButton
            key={btn}
            isSelected={selectedTopic === btn}
            onClick={() => onSelect(btn)}
          >
            {btn}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
