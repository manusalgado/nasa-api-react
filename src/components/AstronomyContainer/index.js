import React from 'react'
import axios from 'axios'

class AstronomyContainer extends React.Component {
    state = {astronomy: []}

    componentDidMount () {
        const API_KEY = 'q6OsSmMTqLJIT5cxFFtqf0bZoUCvh9pK10Sfouqu'
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

        axios.get(END_POINT+API_KEY)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                    
                })
    }
    render () {
        return (
            <div />
        )
    }
}

export default AstronomyContainer