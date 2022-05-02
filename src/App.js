// db.myRecipes.insert({"id":1,"title":"fool","ingrediants":"fool,zeet,tamtatem","recipe":"sa5an el fool","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200318-seo-how-to-cook-beans-horizontal-final-14288-eb-1585337558.jpg?crop=0.6668421052631579xw:1xh;center,top&resize=480:*"})

// vp5SYX6J8f$e3G5

import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route,Link } from 'react-router-dom'
import AllRecipes from './components/AllRecipes.js';
import RecipePage from './components/RecipePage.js';
import AddRecipe from './components/AddRecipe.js';
import EditRecipe from './components/EditRecipe.js';


// loadRecipes()
function App(props) {
  const [plate,setPlate] = useState({});
  const [list, setList] = useState([]);



  useEffect(() => {
    fetch('https://stark-sierra-56547.herokuapp.com/')
        .then(response => response.json())
        .then(data=>setList(data))

 },[])

  // console.log(list)

  function recSelector(data){
    list.map(recipe=>{
      if(recipe.id===data){
        setPlate(recipe)
      }
        return null

    }
      )
    }
function recDelete(data){
    fetch('https://stark-sierra-56547.herokuapp.com/delete',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({"id":data})
    })
    
  }

function reGet(){
  setList([])
  fetch('https://stark-sierra-56547.herokuapp.com/')
        .then(response => response.json())
        .then(data=>setList(data))

}







  return (
    <div className="App">
      <Routes>
        <Route exact path='./' element={
            <AllRecipes recSelector={recSelector} recDelete={recDelete} recipes={list}/>
           }
        />        
        <Route path='./viewrecipe' element={
              <RecipePage plate={plate} recDelete={recDelete}/>
              }
        />
        <Route exact path='./delete' element={
          <div>
            <div>Deleted</div>
            <Link className="go-back" to="./" onClick={()=>{reGet()}}>Go back to Home</Link>
          </div>
        }
        />
        <Route path='./addNew' element={
              <AddRecipe list={list}/>
              }
        />
        <Route exact path='./added' element={
          <div>
            <div>Added successfully</div>
            <Link className="go-back" to="./" onClick={()=>{reGet()}}>Go back to Home</Link>
          </div>
        }
        />
        <Route path='./editrecipe' element={
              <EditRecipe  plate={plate} />
              }
        />
        <Route exact path='./edited' element={
          <div>
            <div>Edited successfully</div>
            <Link className="go-back" to="./" onClick={()=>{reGet()}}>Go back to Home</Link>
          </div>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
