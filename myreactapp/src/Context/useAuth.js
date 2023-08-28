import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useEffect } from "react";


// helps us get the user data ('auth' and 'setauth') from the AuthProvider.
// It is like getting the information from a secret box that only AuthProvider knows about



const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
       console.log("auth is just changed its value");
        localStorage.setItem("auth", JSON.stringify(auth));

    }, [auth]); 

    return { auth, setAuth };
  
}



export default useAuth;