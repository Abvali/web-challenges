import "./styles.css";

export default function App() {
  return <Greeting name="Maryam"/>;
}
function Greeting ({name}){
  return <p>Hello {name==="Maryam" ? "Coach" : name}!</p>;
}