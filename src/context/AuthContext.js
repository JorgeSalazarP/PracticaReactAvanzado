import React from 'react';

export const AuthContext = React.createContext();
const AuthContextProvider = (props) => {
    const [isLogged,setIsLogged] = React.useState(false);

    return (
        <AuthContext.Provider
            value ={{ isLogged, setIsLogged }}
        >
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;



