import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';


const AdvertDetail = ({ name,price,photo,sale,tags,onClickDelete }) => {
    
    const [isOpenModal,setIsOpenModal] = React.useState(false);
    const history = useHistory();
    
    const openModal = () =>{
        setIsOpenModal(!isOpenModal);
    }

    return (

            <div 
                className="row mt-5"
                style={{ height:780 }}
            >
                <div className="col-4">
                    <img 
                        src={`${process.env.REACT_APP_API_BASE_URL}${photo}`} alt=""
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                  
                </div>
    
                <div className="col-8 ">
                    <h3> { name } </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">  { price }€  </li>
                        <li className="list-group-item"> <b> </b> { sale ? 'Buy':'Sell' } </li>
                        <li className="list-group-item"> <b> Tag: </b>{`- ${ tags } -`} </li> 
                       
                    </ul>
                    <button 
                        className="btn btn-primary"
                        onClick={ ()=>(history.goBack()) }
                    >
                        Return
                    </button>
                    <button 
                        className="btn btn-outline-info" 
                        style={ {backgroundColor: 'red', marginLeft: 20, color:'white'} }
                        onClick = {openModal}
                    >
                        Delete
                    </button>
                    {isOpenModal && 
                        <Modal 
                            openModal={openModal}
                            onClickDelete={onClickDelete}
                        >
                            Are you sure to delete this advert?
                        </Modal>
                    }
                    
                    
    
                </div>
    
            </div>
    );
}

AdvertDetail.propTypes = {
    photo: T.string,
    name:T.string,
    price:T.number,
    sale:T.bool,
    tags:T.array,
    onClickDeleteAdvert: T.func,
};
  
AdvertDetail.defaultProps = {
    photo: null,
};


export default AdvertDetail;