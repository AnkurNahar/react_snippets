import "./App.css";

//destructuring
const [firstCity, second] = [
  "Tokyo",
  "Tahoe City",
  "Bend"
];

console.log(firstCity);
console.log(second);

//props
function App({ library }) { //can also do props
  return (
    <div className="App">
      <h1>Hello from {library}</h1>  {/* props.library */}
    </div>
  );
}

export default App;
