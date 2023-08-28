import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";
import AuthProcServices from '../Authentication/AuthProcServices';
import { useEffect } from "react";



function RoleDetails() {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        AuthProcServices.getListOfRoles().then(response => {
            if (response.status === 200) {
                setRoles(response.data)
            }
            else {
                alert('error while loading list of services')
            }
        }
        )
    }, []);

    return (
        <>

            <div className="d-flex flex-column p-4 p-3 mb-2 bg-secondary text-white">
                <br></br>
                <div className="d-flex flex-column">
                    <table className=" Table table table-striped table-bordered">
                        <thead>

                            <tr>
                                <th>Sno.</th>
                                {/* <th>Key</th> */}
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((u, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    {/* <td>{u.roleKey}</td> */}
                                    <td>{u.roleName}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default RoleDetails;