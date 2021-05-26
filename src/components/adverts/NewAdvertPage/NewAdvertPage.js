import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewAdvertForm from './NewAdvertForm';
import Spinner from '../../shared/Spinner';
import { createNewAdvertAction } from '../../../store/actions';
import { getTagsAPI, getUi } from '../../../store/selectors';


const NewAdvertPage = ({ history }) => {
    
    const dispatch = useDispatch();
    const { loading } = useSelector(getUi);
    const tagsAPI = useSelector(getTagsAPI);
   
        
    const createAdvert = newAdvert => dispatch(createNewAdvertAction(newAdvert,history));
    const saveNewAdvert = async newAdvert => (await createAdvert(newAdvert));
    

    return (

        <main className="container">
            <h1>NEW ADVERT</h1>    
            { loading && <Spinner/>}
            {(tagsAPI.length > 0) 
                && <NewAdvertForm 
                tagsAPI={tagsAPI}
                saveNewAdvert={saveNewAdvert}
            />}
        </main>
    );
}
export default NewAdvertPage;