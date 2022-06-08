import { useState, useEffect } from 'react'
import FormTemplate from './FormTemplate';

import UserService from '../../../../services/UserService';

function ChangeAccountNumber({ currentNumber, parentCallback }) {
    
    const [accountNumber, setAccountNumber] = useState(currentNumber);
    const [currentAccountNumber, setCurrentAccountNumber] = useState(currentNumber);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [accountNumber]);

    const validateForm = () => {
        if(!accountNumber)
        {
            setFormError('Account number is required');
            return false;
        }
        else if(isNaN(accountNumber))
        {
            setFormError('Account number must be a number');
            return false;
        }
        else if(accountNumber === currentAccountNumber)
        {
            setFormError('New account number is the same as the current one');
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {

        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountBankNumber(accountNumber);
                setCurrentAccountNumber(accountNumber);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating account number');
            }
        }

        e.preventDefault();

        if(validateForm())
            apiCall();
    }

  return (
    <FormTemplate 
        label={"Account number"}
        value={accountNumber}
        success={success}
        successMsg={"Account number has been updated"}
        errorMsg={formError}
        loading={isLoading}
        onChange={(e) => setAccountNumber(e.target.value)}
        onSubmit={handleSubmit}
    />
  )
}

export default ChangeAccountNumber