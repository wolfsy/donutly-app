import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CategoryService from '../../services/CategoryService'
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';

import './CategoryCarousel.css'

function CategoryCarousel() {

    const [categories, setCategories] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    const breakPoints = [
        { width: 350, itemsToShow: 1, itemsToScroll: 1 },
        { width: 450, itemsToShow: 2, itemsToScroll: 2 },
        { width: 650, itemsToShow: 3, itemsToScroll: 3 },
        { width: 900, itemsToShow: 4, itemsToScroll: 4 },
        { width: 1200,itemsToShow: 5, itemsToScroll: 5 }
      ];

    useEffect(() => {
        const fetchData = async () => {
            const response = await CategoryService.getCategories();
            setCategories(response.data);
            setIsLoading(false);       
        }

        fetchData();
    }, [])

    return (
        <>
            <Container fluid className="py-5 mb-3">
                <Row className="mb-2 w-25 py-4">
                    <h1 className="text-start ms-5">Categories</h1>
                </Row>
                <Row className="d-flex justify-content-center pb-4">
                    <Col xs={10} xl={9} className="carousel-container p-3 d-flex flex-column justify-content-center">
                        {
                            isLoading ?
                            <Row className="justify-content-center align-content-center w-100 text-secondary">
                                <Spinner
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                    id="loading-spinner"
                                />
                            </Row>
                            :
                            <Carousel breakPoints={breakPoints}>
                                {
                                    categories.map(function(x, idx)
                                    {
                                        return (<CarouselItem key={idx} category={x} />)
                                    })
                                }
                            </Carousel>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default CategoryCarousel