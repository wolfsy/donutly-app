import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import UserListItem from './UserListItem';
import UserService from "../../../services/UserService";
import PaymentService from "../../../services/PaymentService";

import './UserBrowser.css';

function UserList({ categoryId, userLogin }) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            var response = null;
            var userList = [];
            setError('');

            try {
                if(userLogin !== '') {
                    response = await UserService.getUserByLogin(userLogin);
                    userList.push(response.data);
                }
                else {
                    response = await UserService.getUsersByCategoryId(categoryId)
                    userList = response.data;
                }

                for(var i = 0; i < userList.length; i++) {
                    response = await PaymentService.getPaymentByUserId(userList[i].id);
                    userList[i].payment = response.data.totalPaymentBalance;
                }
            }
            catch(err) {
                if(err.response?.status !== 404)
                    setError('Error while loading users');
            }

            setIsLoading(false);
            setUsers(userList);
        }
        
        fetchData();
    }, [categoryId, userLogin])

  return (
    <div>
            <div id="spinner-container">
            {
                isLoading && <Spinner animation="border" variant="secondary" />
            }
            </div>
            <div>
            {
                !isLoading && !error ?
                (
                    users.length > 0 ? 
                    <div id="user-list">
                        {
                            users.map((user) => 
                            (
                                <UserListItem key={user.id} user={user} />
                            ))
                        }
                    </div>
                    : <h2>No results</h2>
                )
                : ''
            }
            </div>
            {
                error && <h3 className="text-danger">{error}</h3>
            }
    </div>
  )
}

export default UserList