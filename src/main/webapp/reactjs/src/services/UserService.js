import axios from 'axios';
import getAuthToken from './AuthService';

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

    async getUserInfo(login, currentUserLogin) {
        const response = await axios.get(USER_API_BASE_URL + `info/${login}/${currentUserLogin}`);
        
        return response;
    }

    async getUserInfoForUser(login) {
        const response = await axios.get(USER_API_BASE_URL + `info/${login}`);

        return response;
    }

    async updateUserAccountBankNumber(number) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/banknumber',
            number,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountPhoneNumber(number) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/phonenumber',
            number,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountAvatar(avatarUrl) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/avatarUrl',
            avatarUrl,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountInstagram(instagramUrl) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/instagram',
            instagramUrl,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountYoutube(youTubeUrl) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/youtube',
            youTubeUrl,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountTiktok(tikTokUrl) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/tiktok',
            tikTokUrl,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountDescription(description) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/description',
            description,
            {
                headers: 
                {
                     'Content-Type': 'text/plain',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountPassword(oldPassword, newPassword, repeatedPassword) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/password',
            JSON.stringify({ oldPassword, newPassword, repeatedPassword }),
            {
                headers: 
                {
                     'Content-Type': 'application/json',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountAddress(address) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/address',
            JSON.stringify(address),
            {
                headers: 
                {
                     'Content-Type': 'application/json',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountCategory(category) {
        const response = await axios.patch(USER_API_BASE_URL + 'account/category',
            JSON.stringify({ id: category }),
            {
                headers: 
                {
                     'Content-Type': 'application/json',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

    async updateUserAccountBalanceAndLastWithdraw() {
        const response = await axios.patch(USER_API_BASE_URL + 'account/withdraw',
            {},
            {
                headers: 
                {
                     'Content-Type': 'application/json',
                     'Authorization': getAuthToken()
                },
            }
        );
        
        return response;
    }

}

export default new UserService()