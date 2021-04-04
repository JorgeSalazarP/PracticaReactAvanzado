import React from 'react';

export const RememberContext = React.createContext();

const RememberPasswordProvider = (props) => {
    const [isChecked,setIsChecked] = React.useState(false);
    return ( 
        <RememberContext.Provider value ={{ isChecked,setIsChecked }}>
            {props.children}
        </RememberContext.Provider>
     );
}
 
export default RememberPasswordProvider;