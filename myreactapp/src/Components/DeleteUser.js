import * as Icon from 'react-bootstrap-icons';
import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Add this state to store the user key for deletion

  useEffect(() => {
    console.log("All users loaded")
    handleShowUserDetails()
  }, []);

  const handleShowUserDetails = () => {
    AuthProcServices.getAllUnArchivedUsers()
      .then(response => {
        if (response.status === 200) {
          setUsers(response.data)
        }
        else {
          alert('error while loading list of serices')
        }
      });
  }


  const handleShowConfirm = (user) => { // Accept the userKey as a parameter
    setSelectedUser(user); // Store the selected user key for deletion
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleDelete = (key) => {
    handleCloseConfirm();
    AuthProcServices.deleteUserByKey(key)
      .then(response => {
        if (response.status === 200) {
          console.warn(response);

          // After successful deletion, you may want to update the user list to reflect the changes
          // For example, call handleShowUserDetails() again to refresh the user list
          handleShowUserDetails();
        } else {
          alert('error while deleting user');
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
          {selectedUser?.name} with Email: {selectedUser?.email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => onConfirm(selectedUser.userKey)}> {/* Pass the selectedUserKey to onConfirm */}
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
              <th>Email</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) =>
              <tr key={index}> {/* Don't forget to add a key prop when using map */}
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
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

export default DeleteUser;
