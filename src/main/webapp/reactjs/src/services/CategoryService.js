import axios from 'axios';

const CATEGORY_API_BASE_URL = 'http://localhost:8080/api/category/';

class CategoryService {

    async getCategories() {
        return axios.get(CATEGORY_API_BASE_URL + 'categories');
    }

}

export default new CategoryService()