import React from "react";

export default function Pizza(props) {
  return (
    <div className={`pizza ${props.pizzaObj.soldOut ? "pizza sold-out" : ""} `}>
      <img src={props.pizzaObj.photoName} alt=" " />
      <li>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? <p>Sold out</p> : props.pizzaObj.price}
        </span>
      </li>
    </div>
  );
}
