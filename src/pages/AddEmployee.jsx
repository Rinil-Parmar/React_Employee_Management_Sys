import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddEmployee({ employees, setEmployees }) {
  // State to manage form data
  const [employeeData, setEmployeeData] = useState({
    id: uuidv4(),
    fullName: "",
    birthdate: "",
    department: "",
    experience: "",
  });

  // Function to handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees([...employees, employeeData]);
    setEmployeeData({
      id: uuidv4(),
      fullName: "",
      birthdate: "",
      department: "",
      experience: "",
    });

    alert("Employee added successfully");
  };

  // Get today's date
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto mt-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          &larr; Back to Home
        </Link>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Full Name input field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              pattern="[A-Za-z ]+"
              value={employeeData.fullName}
              onChange={handleInputChange}
              required
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Birthdate input field */}
          <div>
            <label
              htmlFor="birthdate"
              className="block text-sm font-medium text-gray-700"
            >
              Birthdate
            </label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              value={employeeData.birthdate}
              onChange={handleInputChange}
              max={today} // Allow only past dates
              required
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Department input field */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <input
              id="department"
              name="department"
              type="text"
              value={employeeData.department}
              onChange={handleInputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Experience input field */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience (Years)
            </label>
            <input
              id="experience"
              name="experience"
              type="number"
              value={employeeData.experience}
              onChange={handleInputChange}
              required
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
