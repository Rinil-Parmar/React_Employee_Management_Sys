import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <>
      {/* header component */}
      <Header />
      <Routes>
        {/* route for the add home page */}
        <Route
          path="/"
          element={<Home employees={employees} setEmployees={setEmployees} />}
        />
        {/* route for the edit employee */}
        <Route
          path="/edit/:userid"
          element={
            <EditEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        {/* route for the add employee */}
        <Route
          path="/add"
          element={
            <AddEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        {/* route for the not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
