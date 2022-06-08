import { useState, useEffect } from 'react';
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountInstagram({ currentInstagram, parentCallback }) {

    const [accountInstagram, setAccountInstagram] = useState(currentInstagram);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountInstagram]);

    const validateForm = () => {
        if(accountInstagram === currentInstagram)
        {
            setFormError('New Instagram URL is the same as the current one');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {
        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountInstagram(accountInstagram);
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
        label={"Instagram URL"}
        value={accountInstagram}
        success={success}
        successMsg={"Instagram URL has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setAccountInstagram(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountInstagram