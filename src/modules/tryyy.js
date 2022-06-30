const url = "https://themealdb.com/api/json/v1/1/categories.php";

const getMealData = async () => {
    // const mealIdUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Biryani';
    const getData = await fetch(`${url}`);
    const receivedMeals = await getData.json();
    console.log(receivedMeals)
    return receivedMeals;
};

export default getMealData;