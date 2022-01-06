// Variable declarations

// HTML Element setup
var searchWrapper = document.querySelector("#search-wrapper");

// Ingredients Arrays for category
var alcohol = "tequila";
var ingVegetable = [ "Brocoli", "Cabbage" ,"Carrot", "Celery", "Corn", "Eggplant", "Garlic","Green Beans","Pea", "Potatoes", "Onion", "Red Pepper", "Tomato", "Spinach", "Sweet Potato"];
var ingDairy = ["Cheedar","Cheese", "Cream" ,"Butter", "Milk"];
var ingMeat = ["Beef", "Chicken", "Pork","Ribs", "Sausage" ];



// Render ingridients
function init(ingredientArray){
    // console.log(ingredientArray);
var ingredient;
for (var i=0; i < ingredientArray.length ; i++){
    
    ingredient = ingredientArray[i].trim();
    // console.log(ingredient);
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
                $("#sug-bev-one").text("Suggested drink: " + data.drinks[0].strDrink);
                $("#sug-bev-two").text("Suggested drink: " + data.drinks[1].strDrink);
                $("#sug-bev-three").text("Suggested drink: " + data.drinks[2].strDrink);
                $("#sug-bev-four").text("Suggested drink: " + data.drinks[3].strDrink);
                $("#sug-bev-five").text("Suggested drink: " + data.drinks[4].strDrink);
            }
        });
}


function searchByIngredient(inputIngredients) {
    // API Key
    let spoonacularKey = keys.spoon.daniel;

    // FETCH API
    return fetch(
        "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        inputIngredients +
        "&number=5&apiKey=" +
        spoonacularKey ,
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
                // CARD ONE
                $("#dish-name-one").text(data[0].title);
                $("#image-one").attr("src", data[0].image);
                $("#used-ing-one").text(data[0].usedIngredients[0].name + ", " + data[0].usedIngredients[1].name + ", "+ data[0].usedIngredients[2].name);
                // CARD TWO
                $("#dish-name-two").text(data[1].title);
                $("#image-two").attr("src", data[1].image);
                $("#used-ing-two").text(data[1].usedIngredients[0].name + ", " + data[1].usedIngredients[1].name + ", "+ data[1].usedIngredients[2].name);
                // CARD THREE
                $("#dish-name-three").text(data[2].title);
                $("#image-three").attr("src", data[2].image);
                $("#used-ing-three").text(data[2].usedIngredients[0].name + ", " + data[2].usedIngredients[1].name + ", "+ data[2].usedIngredients[2].name);
                //  CARD FOUR
                $("#dish-name-four").text(data[3].title);
                $("#image-four").attr("src", data[3].image);
                $("#used-ing-four").text(data[3].usedIngredients[0].name + ", " + data[3].usedIngredients[1].name + ", "+ data[3].usedIngredients[2].name);
                //  CARD FIVE
                $("#dish-name-five").text(data[4].title);
                $("#image-five").attr("src", data[4].image);
                $("#used-ing-five").text(data[4].usedIngredients[0].name + ", " + data[4].usedIngredients[1].name + ", "+ data[4].usedIngredients[2].name);
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
    $("#card-holder").removeClass("hidden"); 

});




searchWrapper.addEventListener("click", function(event) {
  
  var element = event.target;
  var searchIngredientArray=[];

  if (element.matches("#search-button")) {
    event.preventDefault(event);
    
    var ingredientList = document.querySelectorAll("input[type=checkbox]:checked");
    console.log(ingredientList);
    for (var i=0 ; i < ingredientList.length ; i++){

    //   console.log(ingredientList[i].getAttribute("data-name"));
      searchIngredientArray.push(ingredientList[i].getAttribute("data-name"));
    
    }
    console.log(searchIngredientArray);
    
    searchByIngredient(searchIngredientArray).then(function (results){
        console.log(results);
    });
  }

});

// COCKTAILDB CALL
// cocktailCall("tequila");
// searchByIngredient();

// END OF JS
