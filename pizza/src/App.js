import Pizza from "./Pizza";

import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((key) => (
          <Pizza pizzaObj={key} key={key.name} />
        ))}
      </ul>
    </main>
  );
}
function Footer() {
  const openTime = 8;
  const closeTime = 22;
  const nowTime = new Date().getHours();
  const isOpen = nowTime >= openTime && nowTime <= closeTime;

  console.log(isOpen);
  return (
    <footer className="footer">
      {/* {isOpen ? <p>currently open now</p> : <p>Sorry closed now</p>} */}
      {isOpen && (
        <div className="order">
          <p>we are open till {closeTime} : 00 , Come order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

export default App;
