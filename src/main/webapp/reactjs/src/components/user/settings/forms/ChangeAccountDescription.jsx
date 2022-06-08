import { useState, useEffect } from 'react';
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountDescription({ currentDescription, parentCallback }) {

    const [accountDescription, setAccountDescription] = useState(currentDescription);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountDescription]);

    const validateForm = () => {
        if(accountDescription === currentDescription)
        {
            setFormError('New Description is the same as the current one');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {

        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountDescription(accountDescription);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating Description');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"Description"}
        value={accountDescription}
        success={success}
        successMsg={"Description has been updated"}
        errorMsg={formError}
        loading={isLoading}
        isTextArea={true}
        onChange={(e) => setAccountDescription(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountDescription