const meals = document.querySelector('#meals');


getRandomMeal();

async function getRandomMeal() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

  const respData = await response.json();
  const randomMeal = respData.meals[0];
  // console.log(randomMeal)
  loadRandomMeal(randomMeal, true );
}

async function getMealById(id) {
  const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' +id);

}

async function getMealBySearch(name) {
  const meals =  await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + name)
}


function loadRandomMeal(mealData, random = false) {
  const meal = document.createElement('div');
  meal.classList.add('meal');

  meal.innerHTML = `
     <div class="meal-header">
     ${random ? `<span class="random"> Random Recipe </span>` : ""}
       <img src="${mealData.strMealThumb}"
       alt="${mealData.strMeal}"/>
       </div>
       <div class="meal-body">
       <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
          <i class="fas fa-heart"></i>
        </button>`

       meals.appendChild(meal);
    ;

    const btn = document.querySelector('.meal-body .fav-btn');

    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        removeMealFromLS(mealData.idMeal);
        btn.classList.remove('active');
      } else {
        addMealToLS(mealData.idMeal);
        btn.classList.add('active');
      }
      btn.classList.toggle('active');
    });
    meals.appendChild(meal);
}


function addMealToLS(mealId) {
  const mealIds = getMealfromLS();

  localStorage.setItem('mealIds', JSON.stringify
  ([...mealIds, mealId]));
}

function removeMealFromLS(mealId) {
  const mealIds = getMealfromLS();
  localStorage.setItem(
    'mealIds',
     JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getMealfromLS() {
  const mealIds = JSON.parse(localStorage.getItem('mealIds'));
  return mealIds === null ? [] : mealIds;
}
