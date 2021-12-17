
var searchWrapper = document.querySelector("#search-wrapper");

// Ingredients Arrays for category
var alcohol ="tequila";
var ingVegetable = ["onion","carrot","garlic","Eggplant","red pepper"];
var ingDairy = ["milk","cheese","butter"];
var ingMeat = ["beef","pork","sausage","ckicken"];

function init(ingredientArray){
    console.log(ingredientArray);
var ingredient;
for (var i=0; i < ingredientArray.length ; i++){
    
    ingredient = ingredientArray[i].trim();
    console.log(ingredient);
    $(".ingredient-wrapper").append(`<label> <input type="checkbox" data-name="${ingredient}" id="${ingredient}" class="ingredients"> <span> ${ingredient} </span></label>`);
  };
};

// call init to render ingridients

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
// END OF JS