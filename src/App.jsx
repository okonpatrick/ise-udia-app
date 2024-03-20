import './App.css';
import LoginMenu from "./components/Login";
import TotalNumberComponent from "./components/TotalNumberComponent";
import AboutSection from "./components/AboutSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statement
import AgentsRegistrationForm from "./components/Agents/AgentsRegistrationForm";

function App() {
  return (
    <>
      <Router> {/* Changed Router */}
        <Routes>
          <Route path="/agent/registration" element={<AgentsRegistrationForm />} />

          <Route path="/" element={<>
            <LoginMenu /><TotalNumberComponent />
            <AboutSection />
          </>} />
          
        </Routes>
      </Router>


    </>
  );
}

export default App;
