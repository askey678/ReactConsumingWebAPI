import * as Icon from 'react-bootstrap-icons';
import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteRole = () => {
    const [roles, setRoles] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null); // Add this state to store the user key for deletion

    useEffect(() => {
        console.log("all roles loaded");
        handleshowroledetails();
    }, []);

    const handleshowroledetails = () => {
        AuthProcServices.getListOfRoles().then(response => {
            if (response.status === 200) {
                console.warn(response.data);
                setRoles(response.data)
            }
            else {
                alert('error while loading list of services')
            }
        }
        )
    }

    const handleShowConfirm = (role) => { // Accept the userKey as a parameter
        setSelectedRole(role); // Store the selected user key for deletion
        setShowConfirm(true);
    };

    const handleCloseConfirm = () => {
        setShowConfirm(false);
    };

    const handleDelete = (key) => {
        handleCloseConfirm();
        AuthProcServices.DeleteRoleByKey(key)
            .then(response => {
                handleshowroledetails();
                if (response.status === 200) {
                    handleshowroledetails();
                    console.warn(response);
                } else {
                    alert('error while deleting role');
                }
            });
    };

    const ConfirmDialog = ({ title, message, show, onClose, onConfirm }) => {
        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message} <br></br> <br></br>
                    {selectedRole?.roleName}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => onConfirm(selectedRole.roleKey)}> {/* Pass the selectedUserKey to onConfirm */}
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return (
        <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">
            <br></br>
            <div className="d-flex flex-column">
                <table className=" Table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Name</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((u, index) =>
                            <tr key={index}> {/* Don't forget to add a key prop when using map */}
                                <td>{index + 1}</td>
                                <td>{u.roleName}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => handleShowConfirm(u)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <ConfirmDialog
                    title="Confirmation"
                    message="Are you sure you want to Delete?"
                    show={showConfirm}
                    onClose={handleCloseConfirm}
                    onConfirm={handleDelete}
                />
            </div>
        </div>
    );
}

export default DeleteRole;
