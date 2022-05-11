import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/user/';

class UserService {

    async getUsers() {
        const response = await axios.get(USER_API_BASE_URL + 'users');
        
        return response;
    }

    async login(email, password) {
        const response = await axios.post(USER_API_BASE_URL + 'login',
            JSON.stringify({ email, password }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );

        return response;
    }

}

export default new UserService()