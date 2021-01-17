import React from "react";
import PropTypes from "prop-types";

function Food({ name, country, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>Made By {country}</h3>
      <h4>{rating}/5.0</h4>
    </div>
    );
}

Food.propTypes={
  name:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
  rating:PropTypes.string.isRequired
};
const foodILike = [
  {id :1, name:"kimchi", country:"korea" ,rating:"5.0"},
  {id :2, name:"lamen", country:"japan",rating:"4.7"},
  {id :3, name:"pizza", country:"italy",rating:"4.3"}
];

function App() {
  return( 
  <div> 
    <h1>HELLO!!</h1>
    {foodILike.map(dish => (
      <Food key ={dish.id} name={dish.name} country={dish.country} rating ={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
