import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" disable={false} text="click me!"/>;
}

function Button ({color , disabled , text}){
return (
  <button style={{color}} disabled={disabled} >
     {text}
     </button>
)
}