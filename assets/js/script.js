// Variable declarations

// HTML Element setup
var searchWrapper = document.querySelector("#search-wrapper");

// Ingredients Arrays for category
var alcohol = "tequila";
var ingVegetable = ["onion", "carrot", "garlic", "Eggplant", "red pepper"];
var ingDairy = ["milk", "cheese", "butter"];
var ingMeat = ["beef", "pork", "sausage", "chicken"];


// Render ingredients
function init(ingredientArray){
    var ingredient;
    for (var i=0; i < ingredientArray.length ; i++){     
        ingredient = ingredientArray[i].trim();
        $(".ingredient-wrapper").append(`<label> <input type="checkbox" data-name="${ingredient}" id="${ingredient}" class="ingredients"> <span> ${ingredient} </span></label>`);
    };
};


// FUNCTION THAT CALLS COCKTAILDB API
function cocktailCall(ingredient) {

    //     // COCKATAIL API
    // console.log(ingredient);
    fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    )
        .then((response) => response.json())
        .then((data) => {
            // CALLS ALL DRINK NAMES
            for (var i = 0; i < data.drinks.length; i++) {
                // console.log(data.drinks[i].strDrink);
            }
        });
}


function searchByIngredient(inputIngredients) {
    // API Key

    let spoonacularKey = keys.spoon.mario;

    // FETCH API
    return fetch(
        "https://api.spoonacular.com/recipes/complexSearch?includeIngredients=" +
        inputIngredients +
        "&fillIngredients=true&number=5&apiKey=" +
        spoonacularKey  + 
        "&sort=min-missing-ingredients",

        {
            method: "GET",
            headers: {
                Accept: "application/json",
            }
        }
    )
        .then((response) => response.json())

        .then((data) => {
            // CALLS ALL DISH NAMES
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].title);
            }
        });

}

// EXECUTE THIS FUNCTION FIRST ALWAYS
// INITIALIZE CHECBOX GENERATOR FOR INGREDIENTS
init(ingVegetable);
init(ingDairy);
init(ingMeat);

// CLEAR SECTION TO DISPLAY RESULTS
$("#search-button").click(function (e) { 
    e.preventDefault();
    cocktailCall("tequila");
    $("#instructions-wrapper").empty(); 
    $("#card-holder").removeClass("hidden");; 
});


searchWrapper.addEventListener("click", function(event) {
  
  var element = event.target;
  var searchIngredientArray=[];
  var searchIngredientString="";

  if (element.matches("#search-button")) {
    event.preventDefault(event);
    
    var ingredientList = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i=0 ; i < ingredientList.length ; i++){
      searchIngredientArray.push(ingredientList[i].getAttribute("data-name"));

      if (i==0){
        searchIngredientString=ingredientList[i].getAttribute("data-name");
      }else{
        searchIngredientString=searchIngredientString+","+ingredientList[i].getAttribute("data-name");
      }
      
    }    
    console.log(searchIngredientString);
        searchByIngredient(searchIngredientString).then(function (results){
        console.log(results);
    });
    // searchByIngredient(searchIngredientArray).then(function (results){
    //    console.log(results);
    //});

  }

});

// COCKTAILDB CALL
// cocktailCall("tequila");
// searchByIngredient();

// END OF JS
