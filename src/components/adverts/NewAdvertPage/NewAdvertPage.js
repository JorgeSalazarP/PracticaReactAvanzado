import React from 'react';
import { LoadingContext } from '../../../context/LoadingContext';
import { getAdvertsTags } from '../../../api/adverts';
import NewAdvertForm from './NewAdvertForm';
import Spinner from '../../shared/Spinner';
import './NewAdvertPage.css';

const NewAdvertPage = ({history}) => {
    
    const [tagsAPI,setTagsAPI] = React.useState([]);
    const {isLoading,setIsLoading} = React.useContext(LoadingContext);
    
    
    React.useEffect(() => {
        
        const getTags = async ()=>{
            try {
                setIsLoading(true);
                setTagsAPI(await getAdvertsTags());
              
            } catch (error) {
                history.replace('/404');
            }finally{
                setIsLoading(false);
            }
        }

        getTags();
        
    }, [setIsLoading,history]);

    const saveNewAdvert = newAdvert =>{

        console.log(newAdvert);

        if(newAdvert.sale==="true"){
            newAdvert.sale=true;
        }else{
            newAdvert.sale=false;
        }
        console.log(newAdvert);

    }

    return (

        <main className="container">
            <h1>NEW ADVERT</h1>    
            { isLoading && <Spinner/>}
            {(tagsAPI.length > 0) 
                && <NewAdvertForm 
                tagsAPI={tagsAPI}
                saveNewAdvert={saveNewAdvert}
            />}
        </main>
    );
}
export default NewAdvertPage;