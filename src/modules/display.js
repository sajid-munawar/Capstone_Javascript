const url = "https://themealdb.com/api/json/v1/1/categories.php";

const display = async () => {
    const display=document.querySelector('.display')
    const response = await fetch(url);
    const data = await response.json();
    data.categories.forEach(element => {
        display.innerHTML += `
        <img src="${element.strCategoryThumb}" alt="">
        <h2>${element.strCategory}</h2>
        <p>${element.strCategoryDescription}</p>`
    }); 
    
    // console.log(data.categories);
}
export {display}