// Ingredients Arrays for category
var alcohol = "tequila";
var ingVegetable = ["onion", "carrot", "garlic", "Eggplant", "red pepper"];
var ingDairy = ["milk", "cheese", "butter"];
var ingMeat = ["beef", "pork", "sausage", "ckicken"];

// FUNCTION TO CREATE ELEMENT CHECKBOX DYNAMICALLY
function init(ingredientArray) {
    console.log(ingredientArray);
    var ingredient = "";
    for (var i = 0; i < ingredientArray.length; i++) {
        ingredient = ingredientArray[i];
        console.log(ingredient);
        $(".ingredient-wrapper").append(
            `<label> <input type="checkbox" name=${ingredient} id="ingriedent-${ingredient}" class="ingredients"><span>${ingredient}</span> </label>`
        );
    }
}

// FUNCTION THAT CALLS COCKTAILDB API
function cocktailCall(ingredient) {
    //     // KEY
    //     let cocktailKey;

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
    // let spoonKey = "f4a4ed51a308475a8fb85619133c516e";
    // let spoonKey2 = "bea84f34b4344712ac67b92a9a93d39c";
    
    let inputIngredients = ["orange", "flour", "lemon", "butter"];

    // FETCH API
    fetch(
        "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        inputIngredients +
        "&number=5&apiKey=" +
        spoonKey2,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
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

// COCKTAILDB CALL
// cocktailCall("tequila");
// searchByIngredient();

// END OF JS

