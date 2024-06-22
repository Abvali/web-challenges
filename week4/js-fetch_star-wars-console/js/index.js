console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData (){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const getValues = data.results;
    console.log(getValues);

    const firstPerson = data.results[0];
    const secondPerson = data.results[1];
    console.log(firstPerson.name);
    console.log(secondPerson.height);

    const r2D2 = data.results.find((person) =>
         person.name === "R2-D2");
    console.log("Eye color is:" , r2D2.eye_color)
}
fetchData()
