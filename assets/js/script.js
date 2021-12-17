// HTML Element setup
var searchWrapper = document.querySelector("#search-wrapper");

// Ingredients Arrays for category
var alcohol = "tequila";
var ingVegetable = ["onion", "carrot", "garlic", "Eggplant", "red pepper"];
var ingDairy = ["milk", "cheese", "butter"];
var ingMeat = ["beef", "pork", "sausage", "ckicken"];


// Render ingridients
function init(ingredientArray){
    console.log(ingredientArray);
var ingredient;
for (var i=0; i < ingredientArray.length ; i++){
    
    ingredient = ingredientArray[i].trim();
    console.log(ingredient);
    $(".ingredient-wrapper").append(`<label> <input type="checkbox" data-name="${ingredient}" id="${ingredient}" class="ingredients"> <span> ${ingredient} </span></label>`);
  };
};

// FUNCTION THAT CALLS COCKTAILDB API
function cocktailCall(ingredient) {

    //     // COCKATAIL API
    console.log(ingredient);
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
                console.log(data.drinks[i].strDrink);
            }
        });
}

// FUNCTION TO SEARCH BY INGREDIENT SPOONACULAR
function searchByIngredient() {
    
    let inputIngredients = ["orange", "flour", "lemon", "butter"];

    // FETCH API
    fetch(
        "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        inputIngredients +
        "&number=5&apiKey=" +
        keys.spoon.daniel ,
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
                console.log(data[i].title);
            }
        });
}

// EXECUTE THIS FUNCTION FIRST ALWAYS
// INITIALIZE CHECBOX GENERATOR FOR INGREDIENTS
init(ingVegetable);
init(ingDairy);
init(ingMeat);

searchWrapper.addEventListener("click", function(event) {
  
  var element = event.target;
  var searchIngredientArray=[];

  if (element.matches("#search-button")) {
    event.preventDefault(event);
    
    var ingredientList = document.querySelectorAll("input[type=checkbox]:checked");
    console.log(ingredientList);
    for (var i=0 ; i < ingredientList.length ; i++){

      console.log(ingredientList[i].getAttribute("data-name"));
      searchIngredientArray.push(ingredientList[i].getAttribute("data-name"));
    
    }
    console.log(searchIngredientArray); 
  }

});
// COCKTAILDB CALL
// cocktailCall("tequila");
// searchByIngredient();

// END OF JS
