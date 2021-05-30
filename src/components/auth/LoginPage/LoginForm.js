import React from 'react';
import T from 'prop-types';


const LoginForm = ({ onSubmit, setIsChecked }) => {

    const [credentials,setCredentials] = React.useState({        
        email: '',
        password: ''
    });
    const {email,password} = credentials;

    const handleChange = ev =>{

        setCredentials(oldCredentials => ({
            ...oldCredentials,
            [ev.target.name]: ev.target.value,
          }));

    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();        
        onSubmit(credentials);
    }

    return (  

        <div className="container container_form ">

                <h1>Login in to Nodepop</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form_field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name="email"
                            className="loginForm-field"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form_field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="loginForm-field"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_field">
                        <label htmlFor="checkbox">Remember password</label>
                        <input 
                            type="checkbox"
                            name="checkbox"
                            onChange={(ev)=>setIsChecked(ev.target.checked)}
                        />
                    </div>

                    <div className="form_field">
                        <input 
                            type="submit" 
                            className="btn btn-primary btn-lg btn-block" 
                            value="Login in" 
                            disabled={!email || !password}
                        />
                    </div>
                    
                </form>

                
        </div>


    );
}

LoginForm.propTypes = {
    setIsChecked: T.func.isRequired,
    onSubmit: T.func.isRequired,

};
export default LoginForm;