import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {name: "john", age: 15},
    {name: "boldo", age: 20},
    {name: "Nergui", age : 12},
    {name:"Tsogtoo", age : 21},
    {name:"Jijgee", age : 30}
]

// var sum = 0;
// for (var number of arr) {
//     sum += number;
// }
// average = sum / arr.length;
// console.log(average);
// console.log(age);

  return (
    <div className='App'>
      <h2>User: {users[1].name}</h2>
    </div>
  
  );
}

export default App;
