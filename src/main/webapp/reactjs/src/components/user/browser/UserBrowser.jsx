import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import UserList from './UserList';
import CategoryService from "../../../services/CategoryService";

import './UserBrowser.css';

function UserBrowser({ categoryId }) {

    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [userLogin, setUserLogin] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await CategoryService.getCategories();
            setCategories(response.data);       
        }

        fetchData();
        if(categoryId)
            setSelectedCategoryId(categoryId);
    }, [categoryId])

    const handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
        setUserLogin('');
    }
    
  return (
    <>
        <Container>
            <Row className="mt-5 mb-2 w-50">
                    <h3 className="text-start ms-md-5">Available users</h3>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={12}>
                    <Card body
                        id="user-browser-container"
                        className="mx-xl-5 mb-5 bg-light-powder shadow-sm"
                    >
                        <Row className="d-flex justify-content-center mt-3 mb-4">
                            <Col xs={10} xl={5} className="mx-1 mb-4">
                                <Form>
                                    <Form.Group>
                                        <Row>
                                            <Col xs={12} sm={5} md={4} xl={5} className="d-flex justify-content-start justify-content-lg-end align-items-end">
                                                <Form.Label>Select category:</Form.Label>
                                            </Col>
                                            <Col xs={12} sm={7} xl={7}>
                                                <Form.Select 
                                                    aria-label="Default select example"
                                                    onChange={handleCategoryChange}
                                                    value={selectedCategoryId}
                                                >
                                                    {
                                                        categories.map((category) => (
                                                            <option
                                                            value={category.id}
                                                            key={category.id}
                                                            >
                                                                {category.name}
                                                            </option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col xs={10} xl={5} className="mx-4">
                                <Form>
                                    <Form.Group>
                                        <Row>
                                            <Col xs={12} sm={5} md={4} xl={5} className="d-flex justify-content-start justify-content-lg-end align-items-end">
                                                <Form.Label>Find user by login:</Form.Label>
                                            </Col>
                                            <Col xs={12} sm={7} xl={7}>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder=""
                                                    onChange={(e) => setUserLogin(e.target.value)}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <hr />
                            <UserList 
                                key={selectedCategoryId} 
                                categoryId={selectedCategoryId}
                                userLogin={userLogin}
                            />
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default UserBrowser