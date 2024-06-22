import React from "react";
import "./styles.css";

export default function App() {
  return <Smily isHappy={false}/>;
}
function Smily ({isHappy}){
return (
  <span>
    {isHappy ? "I'm happy 😃" : "I'm sad 😔"}
  </span>
)
}