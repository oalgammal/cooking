import React from 'react';
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard.js'

function AllRecipes(props){
	return(
	<div className='allRecipes'>
	<h1> Welcome to my Recipes</h1>
	{
		props.recipes.map(item=>{
		return(
			<RecipeCard plate={item} recSelector={props.recSelector} recDelete={props.recDelete} key={item.id}/>  
		)

	})
	}<br/>
	<Link className="add-new" to="/addNew" >Add a new recipe</Link>
	</div>
	)
}


export default AllRecipes;