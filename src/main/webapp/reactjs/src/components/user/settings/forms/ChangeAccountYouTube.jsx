import { useState, useEffect } from 'react';
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountYouTube({ currentYouTube, parentCallback }) {

    const [accountYouTube, setAccountYouTube] = useState(currentYouTube);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountYouTube]);

    const validateForm = () => {
        if(accountYouTube === currentYouTube)
        {
            setFormError('New YouTube URL is the same as the current one');
            return false;
        }
        else if(accountYouTube.length > 255)
        {
            setFormError('YouTube URL must be less than 255 characters');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {
        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountYoutube(accountYouTube);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating YouTube URL');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"YouTube URL"}
        value={accountYouTube}
        success={success}
        successMsg={"YouTube URL has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setAccountYouTube(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountYouTube