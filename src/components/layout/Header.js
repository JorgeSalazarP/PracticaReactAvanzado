import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../adverts/AdvertDetailPage/Modal';
import '../adverts/AdvertDetailPage/Modal.css';



const Header = () => {

    const history = useHistory();
   
    const { setIsLogged } = React.useContext(AuthContext);
    const [isOpenModal,setIsOpenModal] = React.useState(false);

    const openModal = () =>{
        setIsOpenModal(!isOpenModal);
    }
    
    const onClickDelete = () =>{
        logout();
        setIsLogged(false);
        history.replace('/login');
            
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

            <div className="navbar-collapse">
                <div className="navbar-nav "  
                    style={{fontSize: 20, padding: 5}}
                >

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link "
                        
                        exact
                        to='/'
                    >
                        Adverts
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to='/advert/new'
                       
                    >
                        New
                    
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <div className="nav-item nav-link text-info">
                        <span>
                            
                        </span>
                    </div>
                    <button 
                        className="nav-item nav-link btn"
                        onClick = {openModal}
                    >
                        Logout
                    </button>
                    {isOpenModal && 
                        <Modal 
                            openModal={openModal}
                            onClickDelete={onClickDelete}
                        >
                            Are you sure?
                        </Modal>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header;