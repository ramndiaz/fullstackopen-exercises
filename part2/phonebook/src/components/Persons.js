import React from "react";

const Persons = ({ persons, filterString, handlePersonDelete }) => {
  const filteredElements = persons
    .filter((person) => person.name.includes(filterString))
    .map((person) => (
      <div key={person.name}>
        {person.name} {person.number}{" "}
        <input
          type="button"
          value="delete"
          id={person.id}
          onClick={handlePersonDelete}
        />
      </div>
    ));

  return <div>{filteredElements}</div>;
};

export default Persons;
