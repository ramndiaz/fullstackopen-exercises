import "./styles.css";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = `Half Stack application development`;
  // intialized empty array for parts to be stored and accessed
  const partsArray = [];

  const parts = [
    { part: "Fundamentals of React", exercise: 10, id: 1 },
    { part: "Using props to pass data", exercise: 7, id: 2 },
    { part: "State of a component", exercise: 14, id: 3 }
  ];
  parts.filter((item) =>
    item.exercise ? partsArray.push(item.exercise) : console.log("nope")
  );
  // displaysParts uses Content componenet to display section of learning and how many total exercises
  // const displayParts = parts.map((item) => (
  //   <Content key={item.id} part={item.part} exercise={item.exercise} />
  // ));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <Header course={course} />
      <Content parts={parts} />
      <Total partsArray={partsArray} />
    </div>
  );
};

export default App;