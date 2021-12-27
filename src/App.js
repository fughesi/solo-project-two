import React from "react";
import Cards from "./components/Cards"
import data from "./API/data"
import Navbar from "./components/Navbar"

function App() {

  const cardEl = data.map(item => 
    <Cards 
      key={item.id}
      {...item}
    />
    
    )

  return (
    <>
    <div id="page">
      <Navbar />
      {cardEl}
    </div>
    </>
  );
}

export default App;
