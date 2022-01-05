// HTML Element setup
var searchWrapper = document.querySelector("#search-wrapper");
var ingredientsSearchBar = document.getElementById("ingredients-search-bar")

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
function searchByIngredient(inputIngredients) {

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

//Get 5 autocomplete options for the ingredients list
function getAutocompleteOptions(ingredientQuery) {
    return fetch(
        "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + 
        ingredientQuery + 
        "&number=5&apiKey=" + 
        keys.spoon.daniel
    ).then(response => response.json());
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
    
    searchByIngredient(searchIngredientArray).then(function (results){
        console.log(results);
    });
  }

});

// Autocomplete:: NOT WORKING YET
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');

    ingredientsSearchBar.addEventListener("keyup", function(event) {
        var element = event.target;
        if (element.matches("#ingredients-search-bar") 
        && (event.code.startsWith('Key') || event.code == "Backspace" || event.code == "Space")) {
            var queryValue = ingredientsSearchBar.value;
    
            if (queryValue != "" && queryValue != null){
                console.log(queryValue);
                getAutocompleteOptions(queryValue).then( (results) => {
                    console.log(results)
                    var data = {}
                    for (i = 0; i < results.length; i++) {
                        data[results[i].name] = results[i].image;
                    }

                    console.log(data);
                    var options = data;
                    var instances = M.Autocomplete.init(elems, options);
                });  
            }
        }
    });
  });


// COCKTAILDB CALL
// cocktailCall("tequila");
// searchByIngredient();

// END OF JS
