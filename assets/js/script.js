

// Ingredients Arrays for category
var alcohol ="tequila";
var ingVegetable = ["onion","carrot","garlic","Eggplant","red pepper"];
var ingDairy = ["milk","cheese","butter"];
var ingMeat = ["beef","pork","sausage","ckicken"];



function init(ingredientArray){
    console.log(ingredientArray);
var ingredient ="";
for (var i=0; i < ingredientArray.length ; i++){
    
    ingredient = ingredientArray[i];
    console.log(ingredient);
    $(".ingredient-wrapper").append(`<label> <input type="checkbox" name=${ingredient} id="ingriedent-${ingredient}" class="ingredients"><span>${ingredient}</span> </label>`);
};

};




// call init to render ingridients

init(ingVegetable);
init(ingDairy);
init(ingMeat);




// END OF JS