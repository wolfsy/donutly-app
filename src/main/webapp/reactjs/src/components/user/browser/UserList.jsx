import { useState, useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import UserListItem from './UserListItem';
import UserService from "../../../services/UserService";
import PaymentService from "../../../services/PaymentService";

import TokenContext from '../../../context/TokenProvider';

import './UserBrowser.css';

function UserList({ categoryId, userLogin }) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const { token } = useContext(TokenContext);
 
    useEffect(() => {
        const fetchData = async () => {
            var response = null;
            var userList = [];
            setError('');

            try {
                if(userLogin !== '') {
                    response = await UserService.getUserByLoginForRole(userLogin, token.decoded?.name);
                    userList.push(response.data);
                }
                else {
                    response = await UserService.getUsersByCategoryIdForRole(categoryId, token.decoded?.name)
                    userList = response.data;
                }

                for(var i = 0; i < userList.length; i++) {
                    response = await PaymentService.getPaymentByUserId(userList[i].id);
                    userList[i].payment = response.data.totalPaymentBalance 
                        ? response.data.totalPaymentBalance : 0;
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
    }, [categoryId, userLogin, token]);

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