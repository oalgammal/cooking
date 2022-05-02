import React from 'react';
import {Link} from 'react-router-dom'

function RecipeCard (props){
	return(
		<div className='bg-light-green dib br3 pa3 ma2  bw2 shadow-5'> 
		<p>{props.plate.title}</p>
		<p>{props.plate.ingredients}</p>
		<img alt={props.plate.title} src={props.plate.image} width="250rm" height="auto" /><br/>
		<Link className="edit-sign" to="./viewrecipe" id={props.plate.id} onClick={()=>props.recSelector(props.plate.id)}>Details</Link><br/>
		<Link className="delete-sign" to="./delete" _id={props.plate._id} onClick={()=>props.recDelete(props.plate.id)}>Delete</Link>
		</div>
		)

}

export default RecipeCard;