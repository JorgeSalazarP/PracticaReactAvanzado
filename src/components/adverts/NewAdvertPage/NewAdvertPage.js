import React from 'react';
import { getAdvertsTags,createNewAdvert } from '../../../api/adverts';
import NewAdvertForm from './NewAdvertForm';
import Spinner from '../../shared/Spinner';


const NewAdvertPage = ({ history }) => {
    
    const [tagsAPI,setTagsAPI] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(false);
    
    
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

    const saveNewAdvert = async newAdvert =>{
        
        try {

            setIsLoading(true);

            const data = new FormData();
            data.append('name',newAdvert.name);
            data.append('price',newAdvert.price);
            data.append('sale',newAdvert.sale);
            data.append('tags',newAdvert.tags);
            if(newAdvert.photo){
                data.append('photo',newAdvert.photo);
            }
            await createNewAdvert(data);
            history.push('/');
          
        } catch (error) {
            history.replace('/404');
        }finally{
            setIsLoading(false);
        }

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