import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import UserListItem from './UserListItem';
import UserService from "../../../services/UserService";

function UserList({ categoryId }) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await UserService.getUsersByCategoryId(categoryId);
            setIsLoading(false);
            setUsers(response.data);
        }
        
        fetchData();
    }, [categoryId])

  return (
    <div>
            <div id="spinner-container">
                {
                    isLoading && <Spinner animation="border" variant="secondary" />
                }
            </div>
            <div>
            {
                !isLoading ?
                (
                    users.length > 0 ? 
                    users.map((user) => (
                        <UserListItem key={user.id} user={user} />
                    ))
                    : <h2>No results</h2>
                )
                : ''
            }
            </div>
    </div>
  )
}

export default UserList