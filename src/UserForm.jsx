import { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
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
            setFullName(e.target.value + " " + lastName);
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
            setLastName(e.target.value)
            setFullName(firstName + " " + e.target.value);
        }}
        />
      </div>
      <div>
        <h1>User Details</h1>
        <h2>firstName: {firstName}</h2>
        <h2>lastName: {lastName}</h2>
        <h2>Fullname: {fullName}</h2>
      </div>
    </form>
  );
};

export default UserForm;
