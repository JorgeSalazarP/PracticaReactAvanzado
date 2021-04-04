import React from 'react';

export const AuthContext = React.createContext();
const AuthContextProvider = ({isInitiallyLogged,...props}) => {
    const [isLogged,setIsLogged] = React.useState(isInitiallyLogged);

    return (
        <AuthContext.Provider
            value ={{ isLogged, setIsLogged }}
        >
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;



