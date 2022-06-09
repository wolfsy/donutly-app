import { useState, useEffect } from 'react';
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountTikTok({ currentTikTok, parentCallback }) {

    const [accountTikTok, setAccountTikTok] = useState(currentTikTok);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountTikTok]);

    const validateForm = () => {
        if(accountTikTok === currentTikTok)
        {
            setFormError('New TikTok URL is the same as the current one');
            return false;
        }
        else if(accountTikTok.length > 255)
        {
            setFormError('TikTok URL must be less than 255 characters');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {
        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountTiktok(accountTikTok);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating Instagram URL');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"TikTok URL"}
        value={accountTikTok }
        success={success}
        successMsg={"TikTok URL has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setAccountTikTok(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountTikTok