import AuthProcServices from "../Authentication/AuthProcServices";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DataUpdateBox = ({ user, onClose }) => {
  const [updatedName, setUpdatedName] = useState(user.name);
  const [updatedEmail, setUpdatedEmail] = useState(user.email);
  const [updatedAbout, setUpdatedAbout] = useState(user.about);

  const { password, userKey, ...updatedData } = user;

  const handleSave = (userkey) => {
    // Get the updated user data from the input fields
    const updatedUser = {
      // ...updatedData, // Spread the existing user data to retain unchanged properties
      name: updatedName,
      email: updatedEmail,
      about: updatedAbout
    };

    AuthProcServices.updateUserByKey(userkey, updatedUser)
      .then(response => {
        onClose(); // Close the update box
        if (response.status === 200) {
          console.warn(response);
        } else {
          alert('Error while updating the user');
        }
      })
      .catch(error => {
        onClose();
        console.error('Error while updating the user:', error);
        alert('An error occurred while updating the user');
      });
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
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
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="about">About:</label>
          <input
            id="about"
            type="text"
            value={updatedAbout}
            onChange={(e) => setUpdatedAbout(e.target.value)}
            className="form-control"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-success" onClick={() => handleSave(user.userKey)}>
          Save
        </Button>
        <Button className="btn btn-danger" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataUpdateBox;

