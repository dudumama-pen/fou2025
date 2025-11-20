let randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const mealsElement = document.getElementById("meals");
const favorites = document.getElementById("favorites");

const getRadnomMeal = async () => {
    const resp = await fetch(randomMealURL);
    const data = await resp.json();
    const randomMeal = data.meals[0];
    addMeal(randomMeal);
};

const addMeal = (mealData) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
        <div class="meal-header">
            <span class="random">Meal of the Day</span>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="meal-body">
            <h3>${mealData.strMeal}</h3>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    const favoriteButton = meal.querySelector(".fav-btn");

    favoriteButton.addEventListener('click', () => {
        if (favoriteButton.classList.contains('active')) {
            removeMealsFromLocalStorage(mealData.idMeal);
        } else {
            addMealsToLocalStorage(mealData.idMeal);
        }

        favoriteButton.classList.toggle('active');
        updateFavoriteMeals();
    });

    mealsElement.appendChild(meal);
};

const addMealsToLocalStorage = (mealId) => {
    const mealIds = getMealsFromLocalStorage();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
};

const removeMealsFromLocalStorage = (mealId) => {
    const mealIds = getMealsFromLocalStorage();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
};

const getMealsFromLocalStorage = () => {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
};

const getMealByID = async (id) => {
    const rep = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const data = await rep.json();
    return data.meals[0];
};

const updateFavoriteMeals = async () => {
    const mealIds = getMealsFromLocalStorage();
    favorites.innerHTML = "";

    for (let id of mealIds) {
        const meal = await getMealByID(id);
        addMealToFavorites(meal);
    }
};

const addMealToFavorites = (meal) => {
    const favoriteMeal = document.createElement('li');

    favoriteMeal.innerHTML = `
        <img class="fav-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <span>${meal.strMeal}</span>
        <button class="clear">
            <i class="fas fa-window-close"></i>
        </button>
    `;

    favoriteMeal.querySelector('.clear').addEventListener('click', () => {
        removeMealsFromLocalStorage(meal.idMeal);
        updateFavoriteMeals();
    });

    favorites.appendChild(favoriteMeal);
};

getRadnomMeal();
updateFavoriteMeals();


/*
const loadFavoriteMeals = async () => {
    const favContainer = document.querySelector(".favorites");
    favContainer.innerHTML = "";

    const mealIds = getMealsFromLocalStorage();

    for (let id of mealIds) {
        const mealData = await getMealByID(id);
        addMealToFavList(mealData);
    }
};
*/
