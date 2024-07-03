import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button-01</Button>
      <Button>Button-02</Button>
      <Button>Button-03</Button>
      <Button>Button-04</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
