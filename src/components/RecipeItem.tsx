import React from 'react';
import { Link } from 'react-router-dom';


const RecipeItem = ( props:any ) => {
    // Destructure values from props
    const { id, title, servings, readyInMinutes,image } = props.obj;
    return (
        <div>
            {/* card creation for each recipe */}
            <div className="card" style={cardStyle}>
                <div className="card-body" style={{ background: '#78909C', color: 'white'}}>
                    <h5>{title}</h5>
                    <div id='par-container' >
                        <p style={parStyle}><span className="badge badge-light">Servings: {servings}</span></p>
                        <p style={parStyle}><span className="badge badge-light">Cook Time: {readyInMinutes}</span></p>
                    </div>
                    <img alt='dishes' style={{ height: '200px', width: '250px', border: '3px white solid' }} src={`https://spoonacular.com/recipeImages/${image}`} />
                </div>
                {/* Card body end */}
                <div style={{textAlign: 'center', margin: '0.4em 1em 1.4em 0.4em'}}><Link style={btnStyle} to={`/${id}`}>Details</Link></div>
            </div>
            {/* Card end */}
        </div>
    )
}

const parStyle = {
    display: 'inline-block',
    marginLeft: '1em',
    
}
const cardStyle = {
    boxShadow: '-3px 4px 3px 0px rgba(0,0,0,0.75)',
    width: '30%',
    margin: '0 auto',
    marginTop: '2em',
    border: '3px white solid',
    background: '#78909C'
}
const btnStyle = {
    border: '2px red white',
    backgroundColor: '#19B5FE',
    width: '40%',
    color: 'white'
}


export default RecipeItem;