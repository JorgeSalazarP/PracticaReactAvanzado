import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../shared/Spinner';
import AdvertDetail from './AdvertDetail';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdvertAction, advertsDetailAction } from '../../../store/actions';
import { getUi, getSelectedAdvert } from '../../../store/selectors';



const AdvertDetailPage = ({history}) => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(getUi);
    const advertDetail = useSelector(getSelectedAdvert);
    
    React.useEffect(()=>{
        dispatch(advertsDetailAction(id));
    },[]);
   
    

    
    const onClickDelete = () => (dispatch(deleteAdvertAction(id,history)));

  
    return (

        <React.Fragment>
            { isLoading && <Spinner/>}
            <AdvertDetail 
                advertDetail {...advertDetail}
                onClickDelete={onClickDelete}
            /> 
        </React.Fragment>
    )
    
   
    
    
}
export default AdvertDetailPage;