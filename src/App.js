import React from "react";
import Cards from "./components/Cards"
import data from "./API/data"

function App() {

  const cardEl = data.map(item => 
    <Cards 
      key={item.id}
      {...item}
    />
    
    )

  return (
    <div id="page">
      {cardEl}
    </div>
  );
}

export default App;
