
import AdminNavbar from "./AdminNavbar";
import * as Icon from "react-bootstrap-icons";
import UserDetails from "./ManageUser";
import Card from 'react-bootstrap/Card';

function AdminProfile() {
    const userDetails = JSON.parse(localStorage.getItem('login'))
    const profile = userDetails.details;
    return (
        <>
            <AdminNavbar />
            <div className="p-3 mb-2 bg-secondary text-white">

                <div className="d-flex flex-column p-5">

                    <h1>  <Icon.PersonBadge /> &nbsp;Profile</h1>
                    {/* <br></br> */}
                    <>
                        <Card style={{ width: "22rem" }}>
                            <Card.Body>
                                <Card.Title style={{ color: "green" }}><Icon.PersonCheck /> &nbsp;{profile.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <br></br>
                                    {profile.email}
                                </Card.Subtitle>
                                <Card.Text>
                                    {profile.about}
                                </Card.Text>
                                <Card.Link href="#"> {userDetails.roles}</Card.Link>
                            </Card.Body>
                        </Card>
                    </>
                </div>
            </div>
        </>
    )
}

export default AdminProfile;