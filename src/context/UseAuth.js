import { useContext } from "react";
import { Auth } from "./AuthProvider";

const UseAuth = () => {
    return useContext(Auth)
}

export default UseAuth;