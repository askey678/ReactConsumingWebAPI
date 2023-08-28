
import * as Icon from 'react-bootstrap-icons';
import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';

const UserDetails = () => {

  const [users, setUsers] = useState([]);

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

  return (
    <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">

      <br></br>
      <div className="d-flex flex-column">
        <table className=" Table table table-striped table-bordered">
          <thead >

            <tr>
              <th>Sno.</th>
              {/* <th>Key</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>About</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>

            {users.map((u, index) =>
              <tr>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.about}</td>
                <td>
                  {/* <ul> */}
                  {u.roles.map((r) => (
                    <p>{r}</p>
                  ))}
                  {/* </ul> */}
                </td>
              </tr>

            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default UserDetails;