import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signup = () => {
    axios.post('http://localhost:8080/adduser', null, {
      params: {
        username,
        first_name: firstName,
        last_name: lastName,
        password
      }
    })
    .then(response => {
      setMessage("User successfully created!");
      console.log(response.data);
      // Optionally clear inputs or redirect here
    })
    .catch(error => {
      setMessage("Failed to create user: " + (error.response?.data || error.message));
      console.error(error);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={signup}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;