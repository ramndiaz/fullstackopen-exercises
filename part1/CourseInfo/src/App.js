import "./styles.css";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = `Half Stack application development`;
  // intialized empty array for parts to be stored and accessed

  const partsArray = [];

  const parts = [
    { part: "Fundamentals of NodeJs", exercise: 8, id: 1 },
    { part: "Using data in Nodejs", exercise: 5, id: 2 },
    { part: "Mongo with NodeJs", exercise: 9, id: 3 },
    { part: "Routing with NodeJs", exercise: 6, id: 4 },
    { part: "Redux", exercise: 9, id: 5 },
    { part: "Mongo for beginners", exercise: 9, id: 6 },
    { part: "NodeJs for beginners", exercise: 9, id: 7 }
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