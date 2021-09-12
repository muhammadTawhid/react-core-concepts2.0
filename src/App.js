import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'photoshop', price: '$99'},
    {name: 'illustrator', price: '$77'},
    {name: 'pdf reader', price: '$37'},
    {name: 'ebook reader', price: '$37'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Starting React Journey Again yay !!!</h1>
        <p>haha it's working</p>
        <Counter></Counter>
        <Users></Users>

        {
          products.map(product => <Product pd = {product}></Product>)
        }

        {/* <Person name="rubel" job="thief"></Person>
        <Person name="kuber" job="sniper"></Person>
        <Person name="dudubel" job="bullet seller"></Person> */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10)
  const handleClicked = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClicked}>INcrease</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h1>Dynamic Users{users.length}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Product(props){
  // console.log(props);
  const {name, price} = props.pd;
  const productStyle ={
    width: "200px",
    height: "200px",
    margin: "10px", 
    padding: "10px",
    border: "1px solid orange"
  }
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>buy now</button>
    </div>
  )
}

// function Person(props){
//   const PersonStyle = {
//       border: "1px solid yellow",
//       margin: "10px"
      
//   }
//   return(
//     <div style={PersonStyle}>
//       <h1>Mr. {props.name}</h1>
//       <h4>{props.job}</h4>
//     </div>  
//   )
// }

export default App;
