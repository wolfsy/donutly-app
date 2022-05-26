import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/user/';

class UserService {

    async getUsers() {
        const response = await axios.get(USER_API_BASE_URL + 'users');
        
        return response;
    }

    async getUsersByCategoryIdForRole(categoryId, currentUserLogin) {
        const response = await axios.get(USER_API_BASE_URL 
            + `users/${categoryId}/${currentUserLogin}`);

        return response;
    }

    async getUserByLogin(login) {
        const response = await axios.get(USER_API_BASE_URL + login);

        return response;
    }

    async getUserByLoginForRole(login, currentUserLogin) {
        const response = await axios.get(USER_API_BASE_URL + `${login}/${currentUserLogin}`);

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

    async register(email, firstName, lastName, login, password, repeatedPassword) {
        const response = await axios.post(USER_API_BASE_URL + 'register',
            JSON.stringify({ email, firstName, lastName, login, password, repeatedPassword }),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        return response;
    }

    async changeUserStatus(userId) {
        const response = await axios.patch(USER_API_BASE_URL + `status/${userId}`);
        
        return response;
    }

}

export default new UserService()