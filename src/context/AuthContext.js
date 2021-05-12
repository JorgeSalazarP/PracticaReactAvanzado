import React from 'react';
import T from 'prop-types';

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

AuthContextProvider.propTypes = {
    children: T.node,
    isInitiallyLogged:T.bool
};
  
AuthContextProvider.defaultProps = {
    children: null,
};
 
export default AuthContextProvider;



