import React from "react";
import { Link } from "react-router-dom";

function Home({ employees, setEmployees }) {
  // Function to handle employee deletion
  function handleDelete(id) {
    const ans = window.confirm("Do you want to proceed?");
    if (ans) {
      const temp = employees.filter((emp) => emp.id !== id);
      setEmployees(temp);
    }
  }

  return (
    <>
      {/* Add employee button */}
      <div className="flex justify-center mt-4">
        <Link to="add">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md py-2 px-4 transition duration-300 ease-in-out">
            + Add Employee
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Employee List</h1>
        <table className="w-full border-collapse border border-blue-500">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                #
              </th>
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                Full Name
              </th>
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                Birthdate
              </th>
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                Department
              </th>
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                Experience (Years)
              </th>
              <th className="border border-blue-500 px-4 py-2 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through employees array to render each employee */}
            {employees.map((employee, index) => (
              <tr key={employee.id} className="bg-gray-100">
                <td className="border border-blue-500 px-4 py-2 text-sm">
                  {index + 1}
                </td>
                <td className="border border-blue-500 px-4 py-2 text-sm">
                  {employee.fullName}
                </td>
                <td className="border border-blue-500 px-4 py-2 text-sm">
                  {employee.birthdate}
                </td>
                <td className="border border-blue-500 px-4 py-2 text-sm">
                  {employee.department}
                </td>
                <td className="border border-blue-500 px-4 py-2 text-sm">
                  {employee.experience}
                </td>
                <td className="border border-blue-500 px-4 py-2 flex space-x-2">
                  {/* Link to edit employee details */}
                  <Link
                    to={`/edit/${employee.id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </Link>
                  {/* Button to delete employee */}
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
