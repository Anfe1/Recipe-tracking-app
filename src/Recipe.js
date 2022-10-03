import React from "react";
import "./App.css";

function Recipe({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td className="content_td">
        <p>{recipe.name}</p>
      </td>
      <td className="content_td">
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} alt="Food" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
