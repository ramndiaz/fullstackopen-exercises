import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [message, setMessage] = useState({ content: null, status: "ok" });

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const handlePersonSearch = (event) => {
    setFilterString(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newPhone,
      id: ""
    };

    if (persons.filter((persons) => persons.name === newName).length > 0) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Replace the old number with the new one?`
        )
      ) {
        const personToUpdate = persons.filter(
          (person) => person.name === newName
        );
        personService
          .update(personToUpdate[0].id, newPerson)
          .then((response) => {
            newPerson.id = response.id;
            setPersons(
              persons.map((person) =>
                person.name !== newPerson.name ? person : newPerson
              )
            );
          })
          .catch((error) => {
            setMessage({
              content: error.response.data.json,
              status: "ko",
            });
            setTimeout(() => {
              setMessage({ content: null, status: "ok" });
            }, 5000);
          });
      }
    } else {
      personService.create(newPerson)
        .then((response) => {
          newPerson.id = response.id;
          setPersons(persons.concat(newPerson));
          setMessage({
            content: `Added ${newPerson.name}`,
            status: "ok",
          });
          setTimeout(() => {
            setMessage({ content: null, status: "ok" });
          }, 5000)
        })
        .catch((error) => {
          setMessage({
            content: error.response.data.json,
            status: "ko",
          });
      });
    }
  };

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePersonPhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const deletePerson = (event) => {
    if (window.confirm("Are you sure you wish to delete this person?")) {
      personService.remove(event.target.id).then((response) => {
        setPersons(persons.filter((p) => p.id.toString() !== event.target.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification status={message.status} content={message.content} />

      <Filter handleChange={handlePersonSearch} />

      <h2>add a new</h2>
      <PersonForm
        handleSubmit={addPerson}
        valueNewName={newName}
        valueNewPhone={newPhone}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonPhoneChange={handlePersonPhoneChange}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterString={filterString}
        handlePersonDelete={deletePerson}
      />
    </div>
  );
};

export default App;
