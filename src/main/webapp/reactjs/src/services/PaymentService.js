import axios from 'axios';

const PAYMENT_API_BASE_URL = 'http://localhost:8080/api/payment/';

class PaymentService {

    async getPaymentByUserId(userId) {
        return await axios.get(PAYMENT_API_BASE_URL + userId);
    }

}

export default new PaymentService()