import AdminNavbar from "./AdminNavbar";
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";
import RoleDetails from "../../Components/RoleDetails";
import AddRole from "../../Components/AddRole";
import UpdateRole from "../../Components/UpdateRole";
import DeleteRole from "../../Components/DeleteRole";


function ManageRole() {

    const [currentPage, setCurrentPage] = useState(); // Default to UserList page

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to render the current page based on the state variable
    const renderCurrentPage = () => {
        switch (currentPage) {
            case "RoleList":
                return <RoleDetails />;
            case "AddRole":
                return <AddRole />;
            case "UpdateRole":
                return <UpdateRole />;
            case "DeleteRole":
                return <DeleteRole />;
            default:
                return null;
        }
    };
    return (
        <>
            <AdminNavbar />
            <div className="d-flex flex-column p-4 p-3 mb-0 bg-secondary text-white">

                <h1>Role Management  <Icon.ChevronExpand /></h1>
                <br></br>
                <div className="d-flex flex-wrap gap-4">
                    <button type="button" className="btn btn-dark" onClick={() => handlePageChange("RoleList")}> Role List</button>
                    <button type="button" className="btn btn-dark" onClick={() => handlePageChange("AddRole")}> Add Role</button>
                    <button type="button" className="btn btn-dark" onClick={() => handlePageChange("UpdateRole")}>Update Role</button>
                    <button type="button" className="btn btn-dark" onClick={() => handlePageChange("DeleteRole")}>Delete Role</button>

                </div>
            </div>

            {renderCurrentPage()}

        </>
    )
}

export default ManageRole;