import AuthProcServices from "../Authentication/AuthProcServices";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DataRoleUpdateBox = ({ role, onClose }) => {
    const [updatedName, setUpdatedName] = useState(role.roleName);

    const { roleKey, ...updatedData } = role;

    const handleSave = (rolekey) => {
        // Get the updated user data from the input fields
        const updatedRole = {
            ...updatedData, // Spread the existing user data to retain unchanged properties
            roleName: updatedName,
        };

        AuthProcServices.updateRoleByKey(rolekey, updatedRole)
            .then(response => {
                onClose(); // Close the update box
                if (response.status === 200) {
                    console.warn(response);
                } else {
                    alert('Error while updating the role');
                }
            })
            .catch(error => {
                onClose();
                console.error('Error while updating the role:', error);
                alert('An error occurred while updating the role');
            });
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="form-control"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-success" onClick={() => handleSave(role.roleKey)}>
                    Save
                </Button>
                <Button className="btn btn-danger" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DataRoleUpdateBox;

