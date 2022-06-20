import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.valueNewName} onChange={props.handlePersonNameChange} />
          phone: <input value={props.valueNewPhone} onChange={props.handlePersonPhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
