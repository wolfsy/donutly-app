import { useState, useEffect } from 'react'
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangePhoneNumber({ currentNumber, parentCallback }) {

    const [phoneNumber, setPhoneNumber] = useState(currentNumber);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [phoneNumber]);

    const validateForm = () => {
        if(phoneNumber === currentNumber)
        {
            setFormError('New phone number is the same as the current one');
            return false;
        }
        else if(phoneNumber.length > 30)
        {
            setFormError('Phone number must be less than 30 characters');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {
        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountPhoneNumber(phoneNumber);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating phone number');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"Phone number"}
        value={phoneNumber}
        success={success}
        successMsg={"Phone number has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangePhoneNumber