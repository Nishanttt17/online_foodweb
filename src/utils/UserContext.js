import { createContext } from "react";

const UserContext= createContext(
    {
        loggedinuser : "Default User",
    }
);
export default UserContext;

