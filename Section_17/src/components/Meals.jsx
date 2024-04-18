import { fetchData } from "../httpRequests";
import useFetch from "../hooks/useFetch";
import Meal from "./Meal";

export default function Meals() {
  const { fetchedData, isError, isFetching } = useFetch(fetchData, []);
  if (isFetching) {
    return <p className="meals-text">Please wait, fetching the data!</p>;
  }
  if (isError) {
    return (
      <>
        <p className="meals-text">
          Error while fetching data, please try again!
        </p>
        <p className="meals-text error">{isError}</p>
      </>
    );
  }

  return (
    <ul id="meals">
      {fetchedData.map((meal) => {
        return <Meal key={meal.id} data={meal} />;
      })}
    </ul>
  );
}
