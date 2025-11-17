//1- Link to get a random meal
//let RandomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

//2- Link to lookup a specific meal with an id
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=

//3- Link to search for meals using a keyword
//https://www.themealdb.com/api/json/v1/1/search.php?s=

/*const getRandomMeal = () => {
    /*fetch(RandomMealURL)
        .then((response) => response.json())
        .then((data) => console.log(data.meals))
        .catch((error) => console.log('Error:', error));
};


getRandomMeal();
*/

const getRandomMeal = async (keyword) => {
     const response = await fetch(RandomMealURL);
        const data = await response.json();
        console.log(data.meals[0]);
};

getRandomMeal();

let randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
let lookUpUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

let mealsDiv = document.getElementById("meals");
let favUl = document.querySelector(".favorites");

getRandomMeal();

async function getRandomMeal() {
    let response = await fetch(randomMealUrl);
    let data = await response.json();
    let meal = data.meals[0];
    addMeal(meal);
    console.log(meal);
}

function addMeal(meal) {
    let mealDiv = document.createElement("div");
    mealDiv.classList.add("meal");
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info">
            <h3>${meal.strMeal}</h3>
            <button class="fav-btn">❤️</button>
        </div>
    `;
    mealsDiv.appendChild(mealDiv);
    let favBtn = mealDiv.querySelector(".fav-btn");
    favBtn.addEventListener("click", () => {
        addMealToFav(meal);
    });
}
function addMealToFav(meal) {
    addFavId(meal.idMeal); 
    loadFavMeals(); 
    let li = document.createElement("li");
    li.innerText = meal.strMeal;
    favUl.appendChild(li);
}
function getFavIds() {
    let ids = localStorage.getItem("favMeals");
    if (ids) {
        return JSON.parse(ids);
    } else {
        return [];
    }
}


function addFavId(id) {
    let ids = getFavIds();
    ids.push(id);
    localStorage.setItem("favMeals", JSON.stringify(ids));
}
function removeFavId(id) {
    let ids = getFavIds();
    ids = ids.filter((mealId) => mealId !== id);
    localStorage.setItem("favMeals", JSON.stringify(ids));
}
async function loadFavMeals() {
    favUl.innerHTML = ""; 
    let ids = getFavIds();

    for (let i = 0; i < ids.length; i++) {
        let meal = await getMealById(ids[i]);
        addFavItem(meal);
    }
}

async function getMealById(id) {
    let res = await fetch(lookUpUrl + id);
    let data = await res.json();
    return data.meals[0];
}

function addFavItem(meal) {
    let li = document.createElement("li");
    li.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <span>${meal.strMeal}</span>
        <button class="clear">X</button>
    `;

     let btn = li.querySelector(".clear");
    btn.addEventListener("click", function () {
        removeFavId(meal.idMeal);
        loadFavMeals(); 
    });
        favUl.appendChild(li);
}

loadFavMeals();