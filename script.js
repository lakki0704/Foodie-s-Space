const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, no item available &#128549;";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}


// get recipe of the meal
function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}

function myFunction() {
    var ele = document.body;
    ele.classList.toggle("darkmode");


}


var listlength = document.querySelectorAll(".listwidth").length;

for (var i = 0; i < listlength; i++) {
    document.querySelectorAll(".listwidth")[i].addEventListener("click", function() {

        var bhtml = this.innerHTML;

        switch (bhtml) {
            case "Food reviews":
                alert("No food reviews available");
                document.getElementById("heading").innerHTML = "Food Reviews";
                break;
            case "Customer care reviews":
                alert("No Customer care  reviews available");
                document.getElementById("heading").innerHTML = "Customer care Reviews";
                break;
            case "Website interface reviews":
                alert("No Website reviews available");
                document.getElementById("heading").innerHTML = "Website Reviews";
                break;
            case "Suggestions":
                alert("Please put down your suggestions");
                var suggest = prompt("Suggestions...");
                document.getElementById("heading").innerHTML = "Suggestions";
                document.getElementById("suggestion").innerHTML = suggest;
                break;
            default:
                alert("Hey there!");
        }
    });
}
document.querySelector("#press").addEventListener("click", function() {

    var dy = document.getElementById("press");
    dy.classList.add("pressed");

    setTimeout(function() {
        dy.classList.remove("pressed");
    }, 1000);

});
$("h2").addClass("heading");



function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}