import './App.css';
import LoginMenu from "./components/Login";
import TotalNumberComponent from "./components/TotalNumberComponent";
import AboutSection from "./components/AboutSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statement
import AgentsRegistrationForm from "./components/Agents/AgentsRegistrationForm";
import AgentLoginScreen from './components/Agents/Forms/AgentLoginScreen';
import BeneficiaryLoginForm from './components/Beneficiary/BeneficiaryLoginForm';
import BeneficiaryDashboard from './components/Beneficiary/BeneficiaryDashboard';

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
          <Route path='/agent/login' element={<AgentLoginScreen/>}/>
          <Route path='/beneficiary/login' element={<BeneficiaryLoginForm/>}/>
          <Route path='/beneficiary/dashboard' element={<BeneficiaryDashboard/>}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;