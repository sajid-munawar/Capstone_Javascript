const url = 'https://themealdb.com/api/json/v1/1/categories.php';

const getMealData = async () => {
  const getData = await fetch(`${url}`);
  const receivedMeals = await getData.json();
  return receivedMeals;
};

export default getMealData;
