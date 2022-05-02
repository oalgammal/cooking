import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function AddRecipe (props) {

let navigate = useNavigate();
const [title, setTitle] = useState('');
const [ing, setIng] = useState('');
const [rec, setRec] = useState('');
const [imag, setImag] = useState('');
const [idNew, setIdNew] = useState(0);


let oldList= props.list
useEffect(() => {
    let x = 0 
	oldList.map((item)=>{
		if (item.id>x){
			x = item.id
		}
		return null
	})
	x++
	if (x>idNew){
		console.log(x)
		setIdNew(x)
	}

 },[oldList,idNew,setIdNew])

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

function addNew(e){
		fetch('https://stark-sierra-56547.herokuapp.com/addNew',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				title: title,
				ingredients: ing,
				recipe: rec,
				image:imag,
				id:idNew
			})
		}).then(navigate('./added'))
		
			
		e.preventDefault();
	}


return(

		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Add New Recipe</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="title">Title</label>
			        <input 
			        	onChange = {titleChange}
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="recipe-title"  
			        	id="recipe-title"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="ingredients">Ingredients</label>
			        <input 
			        	onChange= {ingChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="ingredients"  
			        	id="ingredients"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="recipe">Recipe</label>
			        <input 
			        	onChange = {recChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="recipe"  
			        	id="recipe"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="imageLink">Image Link</label>
			        <input 
			        	onChange = {imagChange}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="imageLink"  
			        	id="imageLink"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      	onClick={addNew} 
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="submit" 
			      	value="Add"/>
			    </div>
			  </form>
			</main>
		</article>
	

	)

}


export default AddRecipe;