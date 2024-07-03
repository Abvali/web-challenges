// import Card from "./components/Card";

export default function App() {
  const fruits = [ "Ali" , "Maryam" , "Ahmad"
    // {id:0 , name:"Banana" , color:"yellow"},
    // {id:1 , name:"Apple", color:"green"},
    // {id:2 , name:"Watermelon" , color:"red"},
    // {id:3 , name:"Orange" , color:"orange"},
  ];

//   return (
//     <ul className="app">
//       {fruits.map((fruit)=> {
//         return (
//             <Card name={fruit.name} color={fruit.color} key={fruit.id}/>
//         )
//       })}
//     </ul>
//   );
return (
  <ul>
    {fruits.map((fruit)=> {
      <li>{fruit}</li>
    })}
  </ul>
 
)

}
 console.dir()