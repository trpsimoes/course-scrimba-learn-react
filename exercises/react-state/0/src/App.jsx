import React from "react";
import Header from "./Header";
import Main from "./Main";

const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

console.log(apiKey);

function App() {


  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  )
}

export default App
