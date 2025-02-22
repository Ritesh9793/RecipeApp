import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'

const AddRecipe ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [steps, setSteps] = useState("");
  const [timeForEachStep, setTimeForEachStep] = useState(""); 
    const navigate = useNavigate();

    const handleAddRecipe = async () => {
        try {
          const res = await axios.post("http://localhost:5000/AddRecipe", { ingredients, steps, timeForEachStep, username, password });
          localStorage.setItem("username", res.data.username);
          setIsLoggedIn(true);
          navigate("/home");
        } catch (error) {
          alert("Invalid Credentials");
        }
    }
  return (
    <>
      <div className = "add-recipe">
        <h2>Add Recipe</h2>
        <input type="text" placeholder="RecipeName" onChange={(e) => setRecipeName(e.target.value) />
        <input type="text" placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value) />
        <input type="text" placeholder="Steps" onChange={(e) => setSteps(e.target.value) />
        <input type="text" placeholder="TimeForEachStep" onChange={(e) => setTimeForEachStep(e.target.value) />
        <input type="text" placeholder="Recipe" onChange={(e) => setRecipeName(e.target.value) />
        <button type="button" onClick={handleAddRecipe}>Add this recipe!...</button>
        <p>Delighted to see you here!...</p>
      </div>
    </>
  )
}

export default AddRecipe
