import axios from 'axios';

const DEPOSIT_API_BASE_URL = 'http://localhost:8080/api/deposit/';

class DepositService {

    async getDepositsForRoleByUserId(userId, currentUserLogin) {
        const response = await axios.get(DEPOSIT_API_BASE_URL 
            + `role/${currentUserLogin}/${userId}`);

        return response;
    }

    async changeDepositVisibilityById(depositId, visibility) {
        const response = await axios.patch(DEPOSIT_API_BASE_URL +
             `visibility/${depositId}/${visibility}`);
            
        return response;
    }

    async addDeposit(userId, deposit) {
        const response = await axios.post(DEPOSIT_API_BASE_URL + `add/${userId}`,
            JSON.stringify(deposit),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        
        return response;
    }

}

export default new DepositService()