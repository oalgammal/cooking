import React from 'react';
import {Link} from 'react-router-dom'


function RecipePage(props){
	console.log(props.data)
	return(
		<div className={props.plate.id}> 
		<p>Title:<br/> {props.plate.title}</p>
		<p>Ingredients:<br/> {props.plate.ingredients}</p>
		<p>Recipe:<br/> {props.plate.recipe}</p>
		<img alt={props.plate.title} src={props.plate.image} width="250rm" height="auto" /><br/>
		<Link className="delete-sign" to="/delete" _id={props.plate._id} onClick={()=>props.recDelete(props.plate.id)}>Delete</Link><br/>
		<Link className="edit-sign" to="/editrecipe" _id={props.plate._id}>Edit</Link>
		</div>
		)
}

export default RecipePage