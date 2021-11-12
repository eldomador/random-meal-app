const getMealBtn = document.getElementById("get_meal");
const mealConteiner = document.getElementById("meal");

getMealBtn.addEventListener('click', ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res =>{
        createMeal(res.meals[0])
    })
})

function createMeal(meal){
    mealConteiner.innerHTML =`
    <div class="row">
        <div class ="column five">
            <img src="${meal.strMealThumb}" alt="Meal img"
        </div>
    </div>
    `
}
