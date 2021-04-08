import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertDetail } from '../../../api/adverts';
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
  
    return (

        <React.Fragment>
            { isLoading && <Spinner/>}
            <AdvertDetail advertDetail {...advertDetail}/> 
        </React.Fragment>
    )
    
   
    
    
}
export default AdvertDetailPage;