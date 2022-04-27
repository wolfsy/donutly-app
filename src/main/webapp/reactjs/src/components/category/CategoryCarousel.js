import React, { Component } from 'react'
import CategoryService from '../../services/CategoryService'

class CategoryCarousel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        CategoryService.getCategories().then((response) => {
            this.setState({ categories: response.data })
        });
    }

    render() {
        return (
            <>CategoryCarousel</>
        )
    }

}

export default CategoryCarousel