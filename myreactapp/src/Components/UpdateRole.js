import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect, useState } from 'react';
import DataRoleUpdateBox from './RoleDataBox';

const UpdateRole = () => {

    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);
    const [showUpdateBox, setShowUpdateBox] = useState(false);

    useEffect(() => {
        console.log("all roles loaded");
        handleshowroledetails();
    }, []);

    const handleshowroledetails = () => {
        AuthProcServices.getListOfRoles()
            .then(response => {
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

    const handleUpdate = (role) => {
        console.log(role);
        setSelectedRole(role);
        setShowUpdateBox(true);
        console.log(selectedRole, showUpdateBox);
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

                        {roles.map((r, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{r.roleName}</td>
                                <td> <button className='btn btn-dark' onClick={() => handleUpdate(r)}>Update</button></td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
            {/* Place DataUpdateBox component here, outside the table */}
            {showUpdateBox && selectedRole && (
                <DataRoleUpdateBox
                    role={selectedRole}
                    onClose={() => setShowUpdateBox(false)}
                />
            )}
        </div>
    )
}

export default UpdateRole;
