import React from 'react'

const AstronomyCard = (props) => {
    const { title, url, explanation, date, copyright } = props.data
    return (
        <div>
            <img src={url} alt={title}/>
            <h3>{title}</h3>
            <p>{explanation}</p>
            <span>{date}</span>
            <article>{copyright}</article>
        </div>
    )
}

export default AstronomyCard