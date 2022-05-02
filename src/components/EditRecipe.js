import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function EditRecipe (props) {

let navigate = useNavigate();
const [title, setTitle] = useState(props.plate.title);
const [ing, setIng] = useState(props.plate.ingredients);
const [rec, setRec] = useState(props.plate.recipe);
const [imag, setImag] = useState(props.plate.image);
const [idNew] = useState(props.plate.id);


function titleChange  (event){
	setTitle(event.target.value)
}

function ingChange (event){
	setIng(event.target.value)
}

function recChange  (event){
	setRec(event.target.value)
}

function imagChange (event){
	setImag(event.target.value)
}

function editRec(e){
		fetch('https://stark-sierra-56547.herokuapp.com/editrecipe',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				title: title,
				ingredients: ing,
				recipe: rec,
				image:imag,
				id:idNew
			})
		}).then(navigate('/edited'))
		
			
		e.preventDefault();
	}



return(

		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Edit {props.plate.title}</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="title">Title</label>
			        <input 
			        	value={title}
			        	onChange = {titleChange}
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="recipe-title"  
			        	id="recipe-title"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="ingredients">Ingredients</label>
			        <input 
			        	value={ing}
			        	onChange= {ingChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="ingredients"  
			        	id="ingredients"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="recipe">Recipe</label>
			        <input 
			        	value={rec}
			        	onChange = {recChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="recipe"  
			        	id="recipe"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="imageLink">Image Link</label>
			        <input 
			        	value={imag}
			        	onChange = {imagChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="imageLink"  
			        	id="imageLink"/>
			      </div>
			    </fieldset>
			    <div className="butedit">
			      <input 
			      	onClick={editRec} 
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="submit" 
			      	value="Edit"/>
			    </div>
			  </form>
			</main>
		</article>
	

	)

}


export default EditRecipe;