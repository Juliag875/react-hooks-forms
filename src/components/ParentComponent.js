import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./Displaydata";
import FormNumberComponent from "./FormNumberComponent";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  
  function handleFirstNameChange(event){
    event.preventDefault();
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
    event.preventDefault();
    setLastName(event.target.value)
  }

  return (
    <div>
    <Form
    firstName ={firstName}
    lastName={lastName}
    handleFirstNameChange = {handleFirstNameChange}
    handleLastNameChange = {handleLastNameChange}
    />
    <DisplayData 
    firstName ={firstName}
    lastName={lastName}
     />
     <FormNumberComponent />
    </div>
  );
}

export default ParentComponent;