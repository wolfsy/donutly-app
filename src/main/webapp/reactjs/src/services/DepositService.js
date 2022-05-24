import axios from 'axios';

const DEPOSIT_API_BASE_URL = 'http://localhost:8080/api/deposit/';

class DepositService {

    async getAllDepositsByUserId(userId) {
        return await axios.get(DEPOSIT_API_BASE_URL + `all/${userId}`);
    }

}

export default new DepositService()