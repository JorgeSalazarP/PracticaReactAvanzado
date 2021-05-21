import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsTags,createNewAdvert } from '../../../api/adverts';
import NewAdvertForm from './NewAdvertForm';
import Spinner from '../../shared/Spinner';
import { createNewAdvertAction } from '../../../actions/advertsActions';


const NewAdvertPage = ({ history }) => {
    
    const [tagsAPI,setTagsAPI] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(false);

    const dispatch = useDispatch();
    
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
    
    
    const createNewAdvert = (newAdvert) => dispatch(createNewAdvertAction(newAdvert));

    const saveNewAdvert = async newAdvert =>{
        
        await createNewAdvert(newAdvert);

        // setIsLoading(true);
        // try {
        //     const data = new FormData();
        //     data.append('name',newAdvert.name);
        //     data.append('price',newAdvert.price);
        //     data.append('sale',newAdvert.sale);
        //     data.append('tags',newAdvert.tags);
        //     if(newAdvert.photo){
        //         data.append('photo',newAdvert.photo);
        //     }
            
        //    await createNewAdvert(data);

        //     setIsLoading(false);
        //     history.push('/');
          
        // } catch (error) {
        //     setIsLoading(false);
        //     history.replace('/404');
        // }

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