import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Modal from '../adverts/AdvertDetailPage/Modal';
import '../adverts/AdvertDetailPage/Modal.css';

import { useDispatch } from 'react-redux';
import { authLogoutAction } from '../../store/actions';

const Header = () => {
    const history = useHistory();
    const [isOpenModal,setIsOpenModal] = React.useState(false);
    const dispatch = useDispatch();

    const openModal = () =>(setIsOpenModal(!isOpenModal));

    const logoutSession = () => dispatch(authLogoutAction(history));
    const onClickDelete = () =>(logoutSession());
       

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse">
                <div className="navbar-nav "  
                    style={{fontSize: 20, padding: 8}}
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

            
                <div className="navbar-nav ml-auto">
                   
                    <button 
                        className="nav-item nav-link"
                        onClick = {openModal}
                        style={{ marginRight:15, fontSize: 20 }}
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
                </div>
            
        </nav>
    );
}

export default Header;