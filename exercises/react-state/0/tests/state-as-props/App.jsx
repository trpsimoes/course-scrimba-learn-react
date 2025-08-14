import React from "react"
import Count from "./components/Count";

export default function App() {

    const [count, setCount] = React.useState(0);

    function add() {
      setCount(prevCount => prevCount + 1);
    }

    function subtract() {
      setCount(prevCount => prevCount - 1);
    }

  console.log("App rendered");

    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={subtract}>–</button>
                <Count number={count} />
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}