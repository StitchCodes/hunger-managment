// KEYS
let rapidKey = "05c4d9282bmsh4ed8686956d1ab9p1c0498jsnab41b0ad1ccb";
let spoonKey = "f4a4ed51a308475a8fb85619133c516e"

fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=" +spoonKey, {
	"method": "GET",
    "headers": {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data));