import axios from 'axios';

const CHARITY_API_BASE_URL = 'http://localhost:8080/api/charity/';

class CharityService {

    async getActiveCharity() {
        return await axios.get(CHARITY_API_BASE_URL + 'active');
    }

}

export default new CharityService()