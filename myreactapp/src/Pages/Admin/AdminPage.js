import AdminNavbar from "./AdminNavbar";
import * as Icon from "react-bootstrap-icons";


function AdminPage() {

    return (
        <>
            <AdminNavbar />
            <div className="d-flex flex-column p-4 p-3 mb-2 bg-secondary text-white">
                <br></br>
                <div className="d-flex flex-column ">
                    <h1> &nbsp;Welcome ADMIN   <Icon.Pen /></h1>
                    <br></br>
                    <br></br>
                    <div>
                        <h4>You are logged in Successfully <Icon.HandThumbsUp /></h4>
                        <br></br>
                        <h5>Manage the User and Roles</h5>
                        <br></br>
                        <h6>Enjoy the application and its features</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage;