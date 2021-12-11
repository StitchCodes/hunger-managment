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
import InlineResponse20031ComparableProductsProtein from './InlineResponse20031ComparableProductsProtein';

/**
 * The InlineResponse20031ComparableProducts model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
 * @version 1.0
 */
class InlineResponse20031ComparableProducts {
    /**
     * Constructs a new <code>InlineResponse20031ComparableProducts</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
     * @param calories {Array.<Object>} 
     * @param likes {Array.<Object>} 
     * @param price {Array.<Object>} 
     * @param protein {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} 
     * @param spoonacularScore {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} 
     * @param sugar {Array.<Object>} 
     */
    constructor(calories, likes, price, protein, spoonacularScore, sugar) { 
        
        InlineResponse20031ComparableProducts.initialize(this, calories, likes, price, protein, spoonacularScore, sugar);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, calories, likes, price, protein, spoonacularScore, sugar) { 
        obj['calories'] = calories;
        obj['likes'] = likes;
        obj['price'] = price;
        obj['protein'] = protein;
        obj['spoonacularScore'] = spoonacularScore;
        obj['sugar'] = sugar;
    }

    /**
     * Constructs a <code>InlineResponse20031ComparableProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} The populated <code>InlineResponse20031ComparableProducts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20031ComparableProducts();

            if (data.hasOwnProperty('calories')) {
                obj['calories'] = ApiClient.convertToType(data['calories'], [Object]);
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [Object]);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], [Object]);
            }
            if (data.hasOwnProperty('protein')) {
                obj['protein'] = ApiClient.convertToType(data['protein'], [InlineResponse20031ComparableProductsProtein]);
            }
            if (data.hasOwnProperty('spoonacularScore')) {
                obj['spoonacularScore'] = ApiClient.convertToType(data['spoonacularScore'], [InlineResponse20031ComparableProductsProtein]);
            }
            if (data.hasOwnProperty('sugar')) {
                obj['sugar'] = ApiClient.convertToType(data['sugar'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} calories
 */
InlineResponse20031ComparableProducts.prototype['calories'] = undefined;

/**
 * @member {Array.<Object>} likes
 */
InlineResponse20031ComparableProducts.prototype['likes'] = undefined;

/**
 * @member {Array.<Object>} price
 */
InlineResponse20031ComparableProducts.prototype['price'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} protein
 */
InlineResponse20031ComparableProducts.prototype['protein'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} spoonacularScore
 */
InlineResponse20031ComparableProducts.prototype['spoonacularScore'] = undefined;

/**
 * @member {Array.<Object>} sugar
 */
InlineResponse20031ComparableProducts.prototype['sugar'] = undefined;






export default InlineResponse20031ComparableProducts;

