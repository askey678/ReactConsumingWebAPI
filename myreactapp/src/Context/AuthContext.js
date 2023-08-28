import { createContext, useState } from "react";

// creating a Authcontext as a empty container that holds information about the current user but starts with no information
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    //  using hook useState creates a special place to store information inside AuthProvider.
    //    The auth variable is where we put the user's data,
    //     and the setAuth function helps us update that data.
    const [auth, setAuth] = useState({});

    return (
        // providing user data to all the components inside it.
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
