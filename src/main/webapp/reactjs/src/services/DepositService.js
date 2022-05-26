import axios from 'axios';

const DEPOSIT_API_BASE_URL = 'http://localhost:8080/api/deposit/';

class DepositService {

    async getAllDepositsByUserId(userId) {
        const response = await axios.get(DEPOSIT_API_BASE_URL + `all/${userId}`);

        return response;
    }

    async changeDepositVisibilityById(depositId, visibility) {
        const response = await axios.patch(DEPOSIT_API_BASE_URL +
             `visibility/${depositId}/${visibility}`);
            
        return response;
    }

}

export default new DepositService()