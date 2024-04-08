import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";

const UserForm = () => {
  console.log("Userform component rendered");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;

  // #Note: State Change TRIGGERS re-render
  // Jab state change hogi tab re-render hoga
  // jab State change hogi to component aur uske child re-render hongge
  // lekin us component ka PARENT re-render nhi hoga
  // for ex-app

  // React :
  // Two types of component :
  // 1. Controlled component => value attribute state component ko control karti hain
  // 2. Uncontrolled component => value hata dene se control field ka, state se chut jata hain

  return (
    <form>
      <div>
        <label htmlFor="firstName">FirstName: </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>

      <br />
      <br />

      <div>
        <label htmlFor="lastName">LastName: </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
           onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>User Details</h1>
        <h2>firstName: {firstName}</h2>
        <h2>lastName: {lastName}</h2>
        <h2>
          fullName: <DisplayFullName fullName={fullName} />
        </h2>
        <TestComponent />
      </div>
    </form>
  );
};

export default UserForm;
