// FUNCTION THAT CALL TASTY API
function tastyCall(){
    // KEY
    let tastyKey = "05c4d9282bmsh4ed8686956d1ab9p1c0498jsnab41b0ad1ccb";

    // TASTY API
    fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup", {
	    "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": tastyKey,
            'Accept': 'application/json'
	        }
})
.then(response => response.json())
.then(data => console.log(data));
};

// FUNCTION THAT CALLS SPOONACULAR API
function spoonCall() {
    // KEY
    let spoonKey = "f4a4ed51a308475a8fb85619133c516e";

    // SPOONACULAR API
    fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=" + spoonKey, {
        "method": "GET",
        "headers": {
        "Accept": 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

// FUNCTION THAT CALLS COCKTAILDB API
function cocktailCall(ingredient) {
//     // KEY
//     let cocktailKey;

//     // COCKATAIL API
    console.log(ingredient);
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient, {
        "method": "GET",
        "headers": {
            'Accept': 'application/json'
        }
        })
    .then(response => response.json())
    .then(data => { 
        // CALLS ALL DRINK NAMES
        for (var i= 0; i < data.drinks.length; i++) {
            console.log(data.drinks[i].strDrink)}
        });
};

// FUNCTION TO SEARCH BY INGREDIENT SPOONACULAR
function searchByIngredient() { 
    let spoonKey = "f4a4ed51a308475a8fb85619133c516e";
    let inputIngredients = ["bannana", "flour", "sugar"];

    // FETCH API
    fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + inputIngredients +"&number=10&apiKey=" + spoonKey, {
        "method": "GET",
        "headers": {
        "Accept": 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { 
        // CALLS ALL DISH NAMES
        for (var i= 0; i < data.length; i++) {
            console.log(data[i].title)}
        });
};

// COCKTAILDB CALL
cocktailCall("tequila");
searchByIngredient();
// END OF JS