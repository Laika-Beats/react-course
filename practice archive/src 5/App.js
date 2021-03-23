import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Nav />
    </div>
  );
}

export default App;
