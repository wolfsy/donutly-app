import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CategoryService from '../../services/CategoryService'
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';

import './CategoryCarousel.css'

function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
      ];

    useEffect(() => {
        const fetchData = async () => {
            const response = await CategoryService.getCategories();
            setCategories(response.data);
            
        }

        fetchData();
    }, [])

    return (
        <>
            <Container fluid className="mb-5 mt-4">
                <Row className="mb-2">
                    <h1 className="text-start ms-5">Categories</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xl={10} className="carousel-container p-3">
                        <Carousel breakPoints={breakPoints}>
                            {
                                categories.map(function(x, idx)
                                {
                                    return (<CarouselItem key={idx} name={x.name} />)
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default CategoryCarousel