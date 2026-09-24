import { useState} from "react";
// Dashboard component student ko login ke baad main dashboard dikhayega
function Dashboard() {
  // localStorage se login ke time save kiya hua student data nikal rahe hain
  const student = JSON.parse(localStorage.getItem("student"));
//Kaunsi companies ki jobs dekhani hain uska naam store karega
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      {/* Agar student ka naam available hai to yahan show hoga */}
      <h2>
        Welcome, {student?.name || "Student"} 👋
      </h2>

      <p>Welcome to your Placement Portal Dashboard.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>📄 My Profile</h3>
          {/* Logged-in student ki profile details */}
<div className="profile-details">
  <p><strong>Name:</strong> {student?.name}</p>
  <p><strong>Email:</strong> {student?.email}</p>
  <p><strong>Course:</strong> {student?.course}</p>
  <p><strong>Skills:</strong> {student?.skills?.join(", ")}</p>
</div>
          <p>View and manage your student profile.</p>
        </div>

        <div className="card">
          <h3>💼 Jobs</h3>
          {/* Available jobs ki list */}
<div className="jobs-list">

  {/* Job 1 */}
  <div className="job-card">
    <h4>Software Developer</h4>
    <p><strong>Company:</strong> TCS</p>
    <p><strong>Location:</strong> Noida</p>
    <p><strong>Skills:</strong> C++, JavaScript</p>

    {/* Future me is button ko actual Apply system se connect karenge */}
    <button>Apply Now</button>
  </div>

  {/* Job 2 */}
  <div className="job-card">
    <h4>Frontend Developer</h4>
    <p><strong>Company:</strong> Infosys</p>
    <p><strong>Location:</strong> Bengaluru</p>
    <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>

    <button>Apply Now</button>
  </div>

  {/* Job 3 */}
  <div className="job-card">
    <h4>Backend Developer</h4>
    <p><strong>Company:</strong> Wipro</p>
    <p><strong>Location:</strong> Hyderabad</p>
    <p><strong>Skills:</strong> Node.js, MongoDB</p>

    <button>Apply Now</button>
  </div>

</div>
          <p>Explore available placement opportunities.</p>
        </div>

        <div className="card">
          <h3>🏢 Companies</h3>
          {/* Placement Portal par available companies ki list */}
<div className="companies-list">

  {/* Company 1 */}
  <div className="company-card">
    <h4>TCS</h4>
    <p><strong>Industry:</strong> IT Services</p>
    <p><strong>Location:</strong> Noida</p>
    <p><strong>Hiring For:</strong> Software Developer</p>

    {/* Abhi ye demo button hai */}
    <button>View Jobs</button>
  </div>

  {/* Company 2 */}
  <div className="company-card">
    <h4>Infosys</h4>
    <p><strong>Industry:</strong> Information Technology</p>
    <p><strong>Location:</strong> Bengaluru</p>
    <p><strong>Hiring For:</strong> Frontend Developer</p>

    <button>View Jobs</button>
  </div>

  {/* Company 3 */}
  <div className="company-card">
    <h4>Wipro</h4>
    <p><strong>Industry:</strong> IT Services</p>
    <p><strong>Location:</strong> Hyderabad</p>
    <p><strong>Hiring For:</strong> Backend Developer</p>

    <button>View Jobs</button>
  </div>

</div>
          <p>View companies hiring students.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;