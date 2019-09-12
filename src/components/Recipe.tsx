import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeInfo from './RecipeInfo';
import './Recipe.css';

const apiKey = '43e64b26a7ea42ab9a949128d243ac64';


const Recipe = (props:any) => {

    //create state for recipe information
    const [ recipe, setRecipe ] = useState<object>({});
    const [ ingredients, setIngredients ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const getRecipeInfo = async () => {
        // Initialize variables
        let recipeInfo;
        let ingredients;
        // set loading to true while data is being returned
        setIsLoading(true);
        await axios.get(`https://api.spoonacular.com/recipes/${props.match.params.id}/information?apiKey=${apiKey}`)
        .then(res => {
            // assign values to earlier variables.
            recipeInfo = res.data;
            ingredients = res.data.extendedIngredients;
            setRecipe(recipeInfo)
            setIngredients(ingredients)
            // set loading to false once data is retrieved and placed in respective 'state'
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getRecipeInfo();
    },[])

    // const {  } = recipe;
    return (
        <div className="container shadow">
            {/* show loading message until data is resolved */}
            {!isLoading  ? <RecipeInfo recipe={recipe} ingredients={ingredients} /> : <h1 style={{textAlign: 'center'}}>Loading...</h1>}
        </div>
    )
}


export default Recipe;