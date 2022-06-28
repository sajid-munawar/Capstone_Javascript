const url = "https://themealdb.com/api/json/v1/1/categories.php";

const display = async () => {
    const display=document.querySelector('.display')
    const response = await fetch(url);
    const data = await response.json();
    data.categories.forEach(element => {
        display.innerHTML += `
        <div class='wrapper'>
        <img src="${element.strCategoryThumb}" alt="">
       <i style="font-size:24px" class="fa">&#xf004;</i>
        <h2>${element.strCategory}</h2> </div>
       
        `
    })
        ; 
    
    // console.log(data.categories);
}
export {display}