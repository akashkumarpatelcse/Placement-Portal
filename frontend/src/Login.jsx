import { useState } from "react";
// Dashboard component ko Login ke baad dikhane ke liye import kar rahe hain
import Dashboard from "./Dashboard";
function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
      console.log("Login button clicked");
      console.log("FETCH START");
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
console.log("FETCH  COMPLETED");
    const data = await response.json();

    alert(data.message);
    console.log(data.student);
    localStorage.setItem("student", JSON.stringify(data.student));
    // login successful hone par App.jsx ko batata hain ki Dashboard dikhana hai
    onLogin();
  } catch (error) {
    alert("Backend se connection me error hai");
    console.error(error);
  }
};
  return (
    <section className="login-section">
      <div className="login-box">
        <h2>Student Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </section>
  );
}

export default Login;