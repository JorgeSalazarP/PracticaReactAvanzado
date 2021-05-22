import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../shared/Spinner';
import AdvertDetail from './AdvertDetail';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdvertAction, advertsDetailAction } from '../../../actions/advertsActions';



const AdvertDetailPage = ({ history }) => {
    
    const { id } = useParams();
    const dispatch = useDispatch();

    React.useEffect(()=>{

        const loadedAdvert = () => dispatch(advertsDetailAction(id));
        loadedAdvert();
      },[]);
    
    const advertDetail = useSelector(state =>state.adverts.detailAdvert);
    const loading = useSelector(state =>state.adverts.loading);

    // React.useEffect(()=>{
    //     const getAdvertById = async ()=>{
    //         try {
    //             setIsLoading(true);
    //             setAdvertDetail(await getAdvertDetail(id));
    //         } catch (error) {
    //             history.replace('/404');
    //         }finally{
    //             setIsLoading(false);
    //         }
    //     }

    //     getAdvertById();
        
    // },[setIsLoading,history,id]);

    
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
            { loading && <Spinner/>}
            <AdvertDetail 
                advertDetail {...advertDetail}
                onClickDelete={onClickDelete}
            /> 
        </React.Fragment>
    )
    
   
    
    
}
export default AdvertDetailPage;