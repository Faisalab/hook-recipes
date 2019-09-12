import React from 'react'

const RecipeInfo = (props:any) => {
    const { 
        servings,
        glutenFree,
        dairyFree,
        instructions,
        readyInMinutes,
        creditsText,
        image,
        title,
        vegan,
        vegetarian
    } = props.recipe;

    return (
        <React.Fragment>
            <div className="recipe-header">
                <div style={{textAlign: 'center'}}>
                    <img alt='dishes' src={image} style={imgStyles} />
                </div>
                <div style={{margin: '1em'}}>
                    <div style={{height: '100px'}} ><h1 style={{letterSpacing: '3px', color:'white',fontSize: '1.5em' }}>{title}</h1></div>
                    <ColorKey />
                    <div className="badge-grid" >
                        <p><span className="badge basic-info">Servings: {servings}</span></p>
                        <p><span className="badge basic-info">Total time: {readyInMinutes}</span></p>
                        <p><span className="badge basic-info">Thanks to: {creditsText}</span></p>
                        <p>{BadgeClasser(vegan, 'Vegan')}</p>
                        <p>{BadgeClasser(vegetarian,'Vegetarian')}</p>
                        <p>{BadgeClasser(dairyFree, 'Dairy-Free')}</p>
                        <p>{BadgeClasser(glutenFree, 'Gluten-Free')}</p>
                    </div>
                </div>
            </div>
            <IngredientList ingredients={props.ingredients} />
            <Instructions info={instructions} />
        </React.Fragment>
    )
}

const BadgeClasser = (val:any,label:string) => (
    <span className={"badge " + (val ? 'true':'false')} >{label}</span>
)

const ColorKey = () => (
    <div >
        <div style={{display: 'inline-block',height: '10px', width: '20px', backgroundColor: '#19B5FE'}}></div><p style={keyPStyles}>TRUE</p>
        <div style={{display: 'inline-block',height: '10px', width: '20px', backgroundColor:'#67809F'}}></div><p style={keyPStyles}>FALSE</p>
    </div>
)

const IngredientList = (props:any) => (
    <div style={ingredientStyles} >
        <h2>Ingredients: </h2>
        <ul>
            {props.ingredients.map((i:any) => (
                <li key={i.id}>{i.original}</li>
            ))}
        </ul>
    </div>
)

const Instructions = (props:any) => (
    <div className="recipe-main">
        <div style={fontStyles}>
            <h2 style={{marginLeft: '60px'}}>How it's done: </h2>
            <h5 style={{padding: '1.5em 2em 1.5em 85px', fontSize: '1em', lineHeight: '175%'}}>{props.info}</h5>
        </div>
    </div>
)

const keyPStyles = {
    display: 'inline-block',
    margin: '4px',
    color: 'white',
    fontSize: '0.5em'

}

const fontStyles = {
    letterSpacing: '6px',
    lineHeight: 1.6,
    color: 'white',
}

const ingredientStyles = {
    marginLeft: '60px',
    letterSpacing: '6px',
    lineHeight: 1.5,
    color: 'white'
}


const imgStyles = {
    height: '300px',
    width: '300px',
    margin: '1em',
    border: '4px solid white',
}

export default RecipeInfo;
