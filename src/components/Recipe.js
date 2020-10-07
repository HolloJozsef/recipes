import React from 'react'; 
import style from '../recipe.module.css';

const Recipe = ({title,calories,image,ingredients,shareAs}) =>{
    return (
      
        <div  className={style.recipe}>
            <h2 >{title}</h2>
            <ol>
                {ingredients.map(ingredient=>(
                   <li>{ingredient.text}</li> 
                ))}
            </ol>
            <h2 className={style.calories}  type="number" step="1"> {calories} Kcal</h2>
            <a href={shareAs}><img className={style.recipe} src={image} alt=""/>  </a>
        </div>
      
    )
}
export default Recipe;