import { useState, useEffect } from 'react';
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountAvatar({ currentAvatar, parentCallback }) {

    const [accountAvatar, setAccountAvatar] = useState(currentAvatar);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountAvatar]);

    const validateForm = () => {
        if(accountAvatar === currentAvatar)
        {
            setFormError('New Avatar URL is the same as the current one');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {

        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountAvatar(accountAvatar);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating Avatar URL');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"Avatar URL"}
        value={accountAvatar}
        success={success}
        successMsg={"Avatar URL has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setAccountAvatar(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountAvatar