import React from 'react';


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
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form_field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name="password"
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
 
export default LoginForm;