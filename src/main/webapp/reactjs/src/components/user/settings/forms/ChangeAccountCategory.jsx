import { useState, useEffect } from 'react'
import { Row, Form, Col, Spinner } from 'react-bootstrap';

import UserService from '../../../../services/UserService';
import CategoryService from '../../../../services/CategoryService';

function ChangeAccountCategory({ currentCategory, parentCallback }) {

    const [category, setCategory] = useState(currentCategory);
    const [categories, setCategories] = useState([]);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormError('');
        setSuccess(false);
    }, [category]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CategoryService.getCategories();
                setCategories(response.data);     
            } 
            catch (err) {
                setFormError('Failed to load categories');
            }
        }

        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const validateForm = () => {
        console.log(category, currentCategory);
        if (category === '') {
            setFormError('Please select a category');
            return false;
        }
        if(category === currentCategory) {
            console.log(category === currentCategory);
            setFormError('New Category is the same as the current one');
            return false;
        }
        
        return true;
    }

    const handleSubmit = async (e) => {
        const apiCall = async () => {
            try {
                setIsLoading(true);
                await UserService.updateUserAccountCategory(category);
                setSuccess(true);
                setIsLoading(false);
                parentCallback(true);
            }
            catch(err) {
                setFormError('Error while updating Category');
            }
        }

        e.preventDefault();
        setSuccess(false);
        if(validateForm())
            apiCall();
    }

  return (
    <Row>
        <Col xs={8} xl={9} className="">
            <fieldset disabled={isLoading}>
                <Form validated={success}>
                    <Form.Group className="text-start">
                        <Form.Label>Category</Form.Label>
                        <Form.Select 
                            onChange={handleCategoryChange}
                            value={category}
                            isInvalid={!!formError}
                        >
                            <option value=""></option>
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
                        <Form.Control.Feedback type="invalid">
                            {formError}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                            Category has been updated
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </fieldset>
        </Col>
        <Col xs={3}>
            <button className="app-button form-confirm-button"
                        onClick={handleSubmit}
                        disabled={isLoading}
            >
            {
                isLoading ?
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> : 
                <span>Confirm</span>
            }
            </button>
        </Col>
    </Row>
  )
}

export default ChangeAccountCategory