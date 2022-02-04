import React, {useState} from "react";

function FormNumberComponent() {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(null);
   
  function handleNumberChange(event) {
    event.preventDefault();
    const newNumber = parseInt(event.target.value);

    if( newNumber >= 0 && newNumber <= 5) {
     setNumber(newNumber);
     setError(null);
   } else {
     setError(`${newNumber} is not a valid Number`);
   }

}

   return (
     <form>
       <input type="number" value={number} onChange={handleNumberChange}/>
       {error ? <span style={{color:"red"}}> {error} </span> : null}
     </form>
   );
}

export default FormNumberComponent;