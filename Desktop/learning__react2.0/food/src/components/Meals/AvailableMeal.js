import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import MealItem from "./MealsItem/MealItem";

const AvailableMeal = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const fetchData = async () => {
    let response = await fetch(
      "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    );

    if (!response.ok) {
      throw new Error("Error message");
      // return;
    }
    response = await response.json();

    for (const key in response) {
      setMeals(response[key]);
    }
  };
  useEffect(() => {
    fetchData().catch((error) => {
      setError(true);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading....</p>
      </section>
    );
  }
  if (Error) {
    return (
      <section className={classes.MealsLoading}>
        <p>error</p>
      </section>
    );
  }
  const meal = meals.map((me) => {
    return (
      <MealItem
        id={me.id}
        name={me.name}
        description={me.description}
        key={me.id}
        price={me.price}
      />
    );
  });
  // console.log(meal);
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{meal}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
