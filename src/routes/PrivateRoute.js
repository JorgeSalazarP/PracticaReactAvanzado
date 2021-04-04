import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



const PrivateRoute = props => {
  const { isLogged } = React.useContext(AuthContext);

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;


// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';

// const PrivateRoute = ({isAuthenticated,component:Component,...rest}) => {

//     return (  

//         <Route {...rest}
//             component = { (props) => (
//                 (isAuthenticated)
//                 ? <Component {...props} />

//                 : <Redirect to='/login'/>

//             )}

//         />
//     );
// }
 
// export default PrivateRoute;