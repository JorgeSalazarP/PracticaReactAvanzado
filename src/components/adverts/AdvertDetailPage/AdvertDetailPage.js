import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertDetail } from '../../../api/adverts';
import Spinner from '../../shared/Spinner';
import AdvertDetail from './AdvertDetail';
import { useDispatch } from 'react-redux';
import { deleteAdvertAction } from '../../../actions/advertsActions';


const AdvertDetailPage = ({ history }) => {
    
    const { id } = useParams();
    const [isLoading,setIsLoading] = React.useState(false);
    const [advertDetail, setAdvertDetail] = React.useState([]);
    
    const dispatch = useDispatch();

    React.useEffect(()=>{
        const getAdvertById = async ()=>{
            try {
                setIsLoading(true);
                setAdvertDetail(await getAdvertDetail(id));
            } catch (error) {
                history.replace('/404');
            }finally{
                setIsLoading(false);
            }
        }

        getAdvertById();
        
    },[setIsLoading,history,id]);

    
    const onClickDelete = async ()=>{
       
        dispatch(deleteAdvertAction(id));
        history.push('/');
        // try {
        //     await deleteAdvert(id);
        //     history.push('/');
        // } catch (error) {
        //     history.replace('/404');
        // }
       
    }

  
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