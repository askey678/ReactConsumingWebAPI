import AdminNavbar from "./AdminNavbar";
import '../Table.css';
import * as Icon from 'react-bootstrap-icons';
import UserDetails from "../../Components/UserDetails";
import { useState } from "react";
import ArchivedUserDetails from "../../Components/ArchivedUserDetails";
import UpdateUser from "../../Components/UpdateUser";
import DeleteUser from "../../Components/DeleteUser";
import RestoreUser from "../../Components/RestoreUser";
import DeleteArchived from "../../Components/DeleteArchived";
import ForceDelete from "../../Components/ForceDelete";


function ManageUser() {

  const [currentPage, setCurrentPage] = useState(); // Default to UserList page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to render the current page based on the state variable
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "UserList":
        return <UserDetails />;
      case "ArchivedUserList":
        return <ArchivedUserDetails />;
      case "UpdateUser":
        return <UpdateUser />;
      case "DeleteUser":
        return <DeleteUser />;
      case "RestoreUser":
        return <RestoreUser />;
      case "DeleteArchived":
        return <DeleteArchived />;
      case "ForceDeleteUser":
        return <ForceDelete />;
      default:
        return null;
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="d-flex flex-column p-4 p-3 mb-0 bg-secondary text-white">

        <h1>User Management  <Icon.ChevronExpand /></h1>
        <br></br>
        <div className="d-flex flex-wrap gap-4">
          {/* <div className="d-flex flex-wrap gap-4" style={{ background: "grey", padding: "10px" }}> */}
          <button type="button" className="btn btn-primary" onClick={() => handlePageChange("UserList")}> User List</button>
          <button type="button" className="btn btn-info" onClick={() => handlePageChange("ArchivedUserList")}> Archived User List</button>
          <button type="button" className="btn btn-dark" onClick={() => handlePageChange("UpdateUser")}>Update User</button>
          <button type="button" className="btn btn-warning" onClick={() => handlePageChange("DeleteUser")}>Delete User</button>
          <button type="button" className="btn btn-success" onClick={() => handlePageChange("RestoreUser")}>Restore User</button>
          <button type="button" className="btn btn-light" onClick={() => handlePageChange("DeleteArchived")}>Delete Archived</button>
          <button type="button" className="btn btn-danger" onClick={() => handlePageChange("ForceDeleteUser")}>Force Delete</button>


        </div>
      </div>

      {renderCurrentPage()}

    </>
  )
}

export default ManageUser;