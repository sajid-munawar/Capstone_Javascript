import { itemCounter, commentCounter } from "../modules/itemCounter.js";


test('Should output the total number items displayed on homepage', () => {
    const meals = [{
        idCategory: "1",
        strCategory: "Beef",
        strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
        strCategoryThumb: "https://www.themealdb.com/images/category/beef.png"
    }, {
        idCategory: "2",
        strCategory: "Chicken",
        strCategoryDescription: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
        strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png"
    }, {
        idCategory: "3",
        strCategory: "Dessert",
        strCategoryDescription: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
        strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png"
    }]
    expect(itemCounter(meals)).toBe(3);
});

test('To test comment counter', () => {
    const commentsFromApi = [
        { creation_date: '2022-06-29', comment: 'Nice', username: 'James' },
        { creation_date: '2022-06-29', comment: 'lovely', username: 'Dan' },
        { creation_date: '2022-06-30', username: 'Killy', comment: 'Fine' },

    ];

    // const numberOfComment = commentCounter(commentsFromApi);
    expect(commentCounter(commentsFromApi)).toBe(3);
    // document.body.innerHTML = `<h2>Comments(${numberOfComment})</h2>`;

    // expect(document.querySelector('h2').textContent).toBe('Comments(3)');
}); 