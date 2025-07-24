import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

var b = "some text";

const brand = {
  name: "React",
  logoSrc: logo,
  logoSize : 350
};

const products = [
  { id: 1, name: "Product 1", price: 100, type: "Food" },
  { id: 2, name: "Product 2", price: 200, type: "Drink" },
  { id: 3, name: "Product 3", price: 300, type: "Snack" }
];

const listItems = products.map(product => (
  <li key={product.id}
      style= {{
        color : product.type === "Food" ? 'green' : product.type === "Drink" ? 'blue' : 'orange',
      }}>
    {product.name} - {product.price}€
  </li>
));

function MyButton({ count, onClick }) {
  return (
    <button 
    onClick = { onClick }
    style={{ backgroundColor: '#61dafb' }}> You clicked us {count} times!</button>
  );
}

function MyButton2() {
  const [count2, setCount2] = useState(0);
  return (
    <button 
    onClick = { () => setCount2(count2 + 1) }
    style={{ backgroundColor: '#00a3c2' }}>You clicked me {count2} times</button>
  );
}

function WelcomeMessage({count, onClick}) {
  return (
    <div>
      <h1>Welcome to {brand.name}!</h1>
      <img class="App-logo" src={brand.logoSrc} alt={`${brand.name} Logo`} style={{ width: brand.logoSize, height: brand.logoSize }} />
      <p>This is a simple {brand.name} application.</p>
      <MyButton count={count} onClick={onClick} />
      <MyButton count={count} onClick={onClick} />
      <br />
      <MyButton2 />
      <MyButton2 />
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my app.</p>
      <p>This is {b}</p>
    </div>
  );
}

function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul style= {{ listStyleType: "none" }}> {listItems} </ul>
    </div>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center"}}>
      <WelcomeMessage count = {count} onClick={handleClick} />
      <AboutPage />
      <ProductsPage />
    </div>
  );
}
