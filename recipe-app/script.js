// const meals = document.querySelector('#meals');
// const favoutireContainer = document.getElementById('fav-meals');


// getRandomMeal();
// fetchFavMeals();

// async function getRandomMeal() {
//   const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

//   const respData = await resp.json();
//   const randomMeal = respData.meals[0];
//   // console.log(randomMeal)
//   loadRandomMeal(randomMeal, true );
// }

// async function getMealById(id) {
//   const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' +id);

//   const respMeal = await resp;
//   const meal = resp.meals;
//   return meal;
//   console.log(respMeal)
// }

// async function getMealBySearch(name) {
//   const meals =  await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + name)
// }


// function loadRandomMeal(mealData, random = false) {
//   const meal = document.createElement('div');
//   meal.classList.add('meal');

//   meal.innerHTML = `
//      <div class="meal-header">
//      ${random ? `<span class="random"> Random Recipe </span>` : ""}
//        <img src="${mealData.strMealThumb}"/>
//        </div>
//        <div class="meal-body">
//        <h4>${mealData.strMeal}</h4>
//         <button class="fav-btn">
//           <i class="fas fa-heart"></i>
//         </button>`

//        meals.appendChild(meal);
//     ;

//     const btn = document.querySelector('.meal-body .fav-btn');

//     btn.addEventListener('click', () => {
//       if (btn.classList.contains('active')) {
//         removeMealFromLS(mealData.idMeal);
//         btn.classList.remove('active');
//       } else {
//         addMealToLS(mealData.idMeal);
//         btn.classList.add('active')
//       }
//       favoutireContainer.innerHTML='';
//       fetchFavMeals();
//     });
//         meals.appendChild(meal);
// }


// function addMealToLS(mealId) {
//   const mealIds = getMealfromLS();

//   localStorage.setItem('mealIds', JSON.stringify
//   ([...mealIds, mealId]));
// }

// function removeMealFromLS(mealId) {
//   const mealIds = getMealfromLS();
//   localStorage.setItem(
//     'mealIds',
//      JSON.stringify(mealIds.filter((id) => id !== mealId))
//   );
// }

// function getMealfromLS() {
//   const mealIds = JSON.parse(localStorage.getItem('mealIds'));
//   return mealIds === null ? [] : mealIds;
// }

// async function fetchFavMeals() {
//   const mealIds = getMealfromLS();

//   let meals = [];
//   for(let i=0; i < mealIds.length; i++) {
//     const mealId = mealIds[i];
//     meal = await getMealById(mealId);

//     addMealToFav(meals);
//   }
//   console.log(meals)
// }

// function addMealToFav(mealData) {
//   const favMeal = document.createElement('li');

//   favMeal.innerHTML = `
//     <li>
//     // <img src="${meals.strMealThumb}" alt="${meals.strMeal}"
//     /><span>${meals.strMeal}</span>
//     </li>`

//   favoutireContainer.appendChild(favMeal);
// }
