/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.spoonacular.client/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.spoonacular.client/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpoonacularApi);
  }
}(this, function(expect, SpoonacularApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpoonacularApi.InlineResponse2004();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2004', function() {
    it('should create an instance of InlineResponse2004', function() {
      // uncomment below and update the code to test InlineResponse2004
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be.a(SpoonacularApi.InlineResponse2004);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property imageType (base name: "imageType")', function() {
      // uncomment below and update the code to test the property imageType
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property servings (base name: "servings")', function() {
      // uncomment below and update the code to test the property servings
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property readyInMinutes (base name: "readyInMinutes")', function() {
      // uncomment below and update the code to test the property readyInMinutes
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property sourceName (base name: "sourceName")', function() {
      // uncomment below and update the code to test the property sourceName
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property sourceUrl (base name: "sourceUrl")', function() {
      // uncomment below and update the code to test the property sourceUrl
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property spoonacularSourceUrl (base name: "spoonacularSourceUrl")', function() {
      // uncomment below and update the code to test the property spoonacularSourceUrl
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property aggregateLikes (base name: "aggregateLikes")', function() {
      // uncomment below and update the code to test the property aggregateLikes
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property healthScore (base name: "healthScore")', function() {
      // uncomment below and update the code to test the property healthScore
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property spoonacularScore (base name: "spoonacularScore")', function() {
      // uncomment below and update the code to test the property spoonacularScore
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property pricePerServing (base name: "pricePerServing")', function() {
      // uncomment below and update the code to test the property pricePerServing
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property analyzedInstructions (base name: "analyzedInstructions")', function() {
      // uncomment below and update the code to test the property analyzedInstructions
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property cheap (base name: "cheap")', function() {
      // uncomment below and update the code to test the property cheap
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property creditsText (base name: "creditsText")', function() {
      // uncomment below and update the code to test the property creditsText
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property cuisines (base name: "cuisines")', function() {
      // uncomment below and update the code to test the property cuisines
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property dairyFree (base name: "dairyFree")', function() {
      // uncomment below and update the code to test the property dairyFree
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property diets (base name: "diets")', function() {
      // uncomment below and update the code to test the property diets
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property gaps (base name: "gaps")', function() {
      // uncomment below and update the code to test the property gaps
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property glutenFree (base name: "glutenFree")', function() {
      // uncomment below and update the code to test the property glutenFree
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property ketogenic (base name: "ketogenic")', function() {
      // uncomment below and update the code to test the property ketogenic
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property lowFodmap (base name: "lowFodmap")', function() {
      // uncomment below and update the code to test the property lowFodmap
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property occasions (base name: "occasions")', function() {
      // uncomment below and update the code to test the property occasions
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property sustainable (base name: "sustainable")', function() {
      // uncomment below and update the code to test the property sustainable
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property vegan (base name: "vegan")', function() {
      // uncomment below and update the code to test the property vegan
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property vegetarian (base name: "vegetarian")', function() {
      // uncomment below and update the code to test the property vegetarian
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property veryHealthy (base name: "veryHealthy")', function() {
      // uncomment below and update the code to test the property veryHealthy
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property veryPopular (base name: "veryPopular")', function() {
      // uncomment below and update the code to test the property veryPopular
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property whole30 (base name: "whole30")', function() {
      // uncomment below and update the code to test the property whole30
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property weightWatcherSmartPoints (base name: "weightWatcherSmartPoints")', function() {
      // uncomment below and update the code to test the property weightWatcherSmartPoints
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property dishTypes (base name: "dishTypes")', function() {
      // uncomment below and update the code to test the property dishTypes
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property extendedIngredients (base name: "extendedIngredients")', function() {
      // uncomment below and update the code to test the property extendedIngredients
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property winePairing (base name: "winePairing")', function() {
      // uncomment below and update the code to test the property winePairing
      //var instane = new SpoonacularApi.InlineResponse2004();
      //expect(instance).to.be();
    });

  });

}));
