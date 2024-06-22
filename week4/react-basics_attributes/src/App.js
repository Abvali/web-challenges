import React from "react";
import "./styles.css";

export default function App() {
  return <Article/>;
}
function Article (){
  return (
    <article className="article">
    <h2 className="article__title">More Infos!</h2>
<label htmlFor="myInput">Input</label>
<input id="myInput" type="text"/>
<a className="article__link"
href="#"
>
  click here!
</a>
    </article>
  )
}
