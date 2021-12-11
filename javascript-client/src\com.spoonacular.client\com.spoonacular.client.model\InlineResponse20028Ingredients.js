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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20028Ingredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients
 * @version 1.0
 */
class InlineResponse20028Ingredients {
    /**
     * Constructs a new <code>InlineResponse20028Ingredients</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients
     * @param name {String} 
     */
    constructor(name) { 
        
        InlineResponse20028Ingredients.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineResponse20028Ingredients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients} The populated <code>InlineResponse20028Ingredients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20028Ingredients();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('safety_level')) {
                obj['safety_level'] = ApiClient.convertToType(data['safety_level'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} description
 */
InlineResponse20028Ingredients.prototype['description'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20028Ingredients.prototype['name'] = undefined;

/**
 * @member {Object} safety_level
 */
InlineResponse20028Ingredients.prototype['safety_level'] = undefined;






export default InlineResponse20028Ingredients;

