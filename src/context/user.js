import { createContext, useState } from "react";

export const UserContext = createContext(null);
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);


    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const userExists = (user) => {
        const query = users.filter(u => u.email == user.email && u.password == user.password);
        const exists = query.length > 0;

        return exists;
    }

    return (
        <UserContext.Provider
            value={{
                users,
                userExists,
                addUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}