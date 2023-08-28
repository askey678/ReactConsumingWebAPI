import { useState } from "react";
import "../customcss/AddRole.css";
import AuthProcServices from "../Authentication/AuthProcServices";
import { useNavigate } from "react-router";

function AddRole() {
  const [roleName, setRoleName] = useState("");
  const navigate = useNavigate();

  const handleSaveRole = () => {
    const role = { roleName }; // Wrap roleName in an object
    AuthProcServices.AddNewRole(role)
      .then(response => {
        if (response.status === 200) {
          navigate("/admin/", { replace: true });
          console.warn(response);
        } else {
          alert('Error while updating the user');
        }
      })
      .catch(error => {
        console.error('Error while adding the role:', error);
        alert('An error occurred while adding the role');
      });
  };

  return (
    <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">
      <br />
      <div className="d-flex flex-column align-items-center">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th colSpan="2">Add New Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <div className="form-group col-md-14">
                  <label htmlFor="name">Name:</label><br />
                  <input
                    id="name"
                    type="text"
                    onChange={(e) => setRoleName(e.target.value)}
                    className="form-control custom-input"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button className="btn btn-success custom-button" onClick={handleSaveRole}>
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddRole;
