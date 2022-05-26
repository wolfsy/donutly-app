import { useState, useEffect } from 'react'
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import UserDonationListItem from './UserDonationListItem';

import DepositService from '../../../services/DepositService';

import './UserDetails.css';

function UserDonationList({ userId, token }) {

    const [donations, setDonations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setError('');

            try {
              const response = await DepositService.getDepositsForRoleByUserId(userId, token.decoded?.name);
              setDonations(response.data);
            }
            catch(err) {
              setError('Error while loading donations');   
            }

            setIsLoading(false);
        }
        
        fetchData();
    }, [userId])

  return (
        <>
            <Row className="d-flex justify-content-center py-5">
                <Col xs={12} md={11}>
                    <h3 className="text-start ms-md-5">Last user deposits</h3>
                </Col>
                <Col xs={12} md={11}>
                    <Card body
                        id="donation-browser-container"
                        className="mx-xl-5 mb-5 bg-light-powder shadow-sm"
                    >
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
                                donations.length > 0 ? 
                                <div id="donation-list">
                                    {
                                        donations.map((donation) => 
                                        (
                                            <UserDonationListItem key={donation.id} 
                                                                  donation={donation}
                                                                  token={token} 
                                            />
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
                    </Card>
                </Col>
            </Row>
        </>
  )
}

export default UserDonationList