import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import { LoadingContext } from '../../../context/LoadingContext';
import Spinner from '../../shared/Spinner';
import AdvertDetail from './AdvertDetail';

const AdvertDetailPage = ({ history }) => {
    
    const { id } = useParams();
    const {isLoading,setIsLoading} = React.useContext(LoadingContext);
    const [advertDetail, setAdvertDetail] = React.useState([]);
   
    React.useEffect(()=>{
        async function getAdvertById(){
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
        
    },[]);

    
    const onClickDeleteAdvert = async ()=>{
        const deleteConfirmed = window.confirm('Are you sure to delete this advert?');
        if (deleteConfirmed) {
           await deleteAdvert(id);
           history.push('/');
        }
    }

  
    return (

        <React.Fragment>
            { isLoading && <Spinner/>}
            <AdvertDetail 
                advertDetail {...advertDetail}
                onClickDeleteAdvert={onClickDeleteAdvert}
            /> 
        </React.Fragment>
    )
    
   
    
    
}
export default AdvertDetailPage;