import React from 'react';
import {Link} from 'react-router-dom'


function RecipePage(props){
	console.log(props.data)
	return(
		<div className={props.plate.id}> 
		<p>Title: {props.plate.title}</p>
		<p>Ingredients: {props.plate.ingredients}</p>
		<p>Recipe: {props.plate.recipe}</p>
		<img alt={props.plate.title} src={props.plate.image} width="250rm" height="auto" />
		<Link className="delete-sign" to="/delete" _id={props.plate._id} onClick={()=>props.recDelete(props.plate.id)}>Delete</Link>
		</div>
		)
}

export default RecipePage