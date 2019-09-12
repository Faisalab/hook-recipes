import React, { useState } from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import '../App.css';

const apiKey = 'API_KEY'

const Recipes = () => {
  // create functional state
  const [ query, setQuery ] = useState<string>('');
  const [ recipes, setRecipes ] = useState([]);
  
  // GET REQUEST TO RECIEVE RECIPES
  const getRecipes = async (e:any) => {
    // Prevent default submit action bahh this drove me crazy for a little 
    e.preventDefault();
    //Initialize variable so value assigned is done each get
    let recipes;
    //Make get request using axios with query state object
    axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&instructionsRequired=true&number=6`)
    .then(res => {
      //Assign response value to variable
      recipes = res.data.results;
      //Set response to recipes state
      setRecipes(recipes)
    })
  }

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <div style={{marginTop: '15vh'}}>
        <h1 style={fontStyle}>HAANGRY</h1>
        {/* Pass in event as arg to preventDefault action of form submit */}
        <form style={{marginTop: '10vh'}} onSubmit={(e) => getRecipes(e)}>
          <input style={inputStyles} type="text" placeholder="Steak, Mediterranean, green, etc..." onChange={(e) => setQuery(e.target.value)} />
          <div style={{margin:'1em'}}>
            <button className="btn btn-large" style={btnStyle} type='submit'>Feed Me!</button>
          </div>
        </form>
      </div>
      <div>
        {recipes.map((rec:any) => (
          <RecipeItem key={rec.id} obj={rec} />
        ))}
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#19B5FE'
}

const fontStyle = {
  fontSize: '5em',
  color: 'white',
  letterSpacing: '5px',
  textShadow: '-2px 2px 1px rgba(150, 150, 150, 1)'
}

const inputStyles = {
  width: '40%',
  padding: '0.6em',
  fontSize: '1.4em',
  backgroundColor: 'black',
  color: 'azure'
}

export default Recipes;


