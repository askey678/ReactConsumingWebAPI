import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';
import DataUpdateBox from './DataBox';

const UpdateUser = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateBox, setShowUpdateBox] = useState(false);

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

  const handleUpdate = (user) => {
    console.log(user);
    setSelectedUser(user);
    setShowUpdateBox(true);
    console.log(selectedUser, showUpdateBox);
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
              <tr>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td> <button className='btn btn-dark' onClick={() => handleUpdate(u)}>Update</button></td>
              </tr>

            )}

          </tbody>
        </table>
      </div>
      {/* Place DataUpdateBox component here, outside the table */}
      {showUpdateBox && selectedUser && (
        <DataUpdateBox
          user={selectedUser}
          onClose={() => setShowUpdateBox(false)}
        />
      )}
    </div>
  )
}

export default UpdateUser;
