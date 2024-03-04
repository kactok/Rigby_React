function CoreConcept({ image: i, title: t, description: d }) {
  return (
    <li>
      <img src={i} alt={t} />
      <h3>{t}</h3>
      <p>{d}</p>
    </li>
  );
}

export default CoreConcept;
