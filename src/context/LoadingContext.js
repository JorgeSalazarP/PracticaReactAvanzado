import React from 'react';

export const LoadingContext = React.createContext();

const LoadingContextProvider = (props) => {
    const [isLoading,setIsLoading] = React.useState(false);
    return ( 
        <LoadingContext.Provider
            value = {{isLoading,setIsLoading}}
        >
            {props.children}
        </LoadingContext.Provider>

     );
}
 
export default LoadingContextProvider;