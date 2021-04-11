import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

const AdvertsPage = ({history}) => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(()=>{
        
        getAdverts().then(setAdverts).catch((error)=>{
          history.replace('/404')}
        );
       
    },[]);


  //   React.useEffect(() => {
        
  //     const getAds = async ()=>{
  //         try {
  //             setIsLoading(true);
  //             setAdverts(await getAdverts());
            
  //         } catch (error) {
  //             history.replace('/404');
  //         }finally{
  //             setIsLoading(false);
  //         }
  //     }

  //     getAds();
      
  // }, [setIsLoading,history]);
    
    return (
        
      <React.Fragment >
            {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </React.Fragment>
        
    )
}
export default AdvertsPage;