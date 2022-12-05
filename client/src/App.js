import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/employeeList";
import EditEmployee from "./components/EditEmployee";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/api/user/signup" element={<Signup/>}/>
          <Route path="/api/emp/employees" element={<EmployeeList/>}/>
          <Route path="/api/emp/employees/add" element={<AddEmployee/>}/>
          <Route path="/api/emp/employees/:id" element={<EditEmployee/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
