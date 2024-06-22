import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={7}/>;
}
function Sum({valueA , valueB}){
  const sum = valueA + valueB;
return (
  <p>
    {valueA} + {valueB} = {sum}
  </p>
);
}