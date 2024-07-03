import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";


export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 1. Funtion wird definiert
  function handleCreateUser(name , email){
    // 5. state setzen
    setName(name)
    setEmail(email)
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      {/* 2. Funktion wird übergeben */}
      <Form onCreateUser={handleCreateUser}/>
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
