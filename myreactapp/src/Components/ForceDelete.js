
import * as Icon from 'react-bootstrap-icons';
import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ForceDelete = () => {

  const [users, setUsers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Add this state to store the user key for deletion


  useEffect(() => {
    console.log("All users loaded")
    handleShowUserDetails()
  }, []);


  const handleShowUserDetails = () => {
    AuthProcServices.getAllUsers()
      .then(response => {
        if (response.status === 200) {
          setUsers(response.data)
        }
        else {
          alert('error while loading list of serices')
        }
      }
      )
  }
  const handleShowConfirm = (user) => { // Accept the userKey as a parameter
    setSelectedUser(user); // Store the selected user key for deletion
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleForceDelete = (key) => {
    handleCloseConfirm();
    AuthProcServices.ForceDeleteUser(key)
      .then(response => {
        if (response.status === 200) {
          console.warn(response);
          handleShowUserDetails();
        } else {
          alert('error while deleting user')
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
              {/* <th>Key</th> */}
              <th>Name</th>
              <th>Email</th>
              {/* <th>About</th> */}
              {/* <th>Roles</th> */}
              <th>Option</th>
            </tr>
          </thead>
          <tbody>

            {users.map((u, index) =>
              <tr>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td> <button className='btn btn-danger' onClick={() => handleShowConfirm(u)}>Force Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
        <ConfirmDialog
          title="Confirmation"
          message="Are you sure you want to Force Delete User?"
          show={showConfirm}
          onClose={handleCloseConfirm}
          onConfirm={handleForceDelete}
        />
      </div>
    </div>

  )
}

export default ForceDelete;