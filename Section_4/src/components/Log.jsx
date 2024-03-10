export default function Log({ history }) {
  return (
    <ol id="log">
      {history.map((el, id) => {
        const {
          square: { row, col },
          player,
        } = el;
        return (
          <li key={id}>
            {player} selected {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
