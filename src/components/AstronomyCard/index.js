import React from 'react'

const AstronomyCard = (props) => {
    const { title, url, hdurl, explanation, date, copyright } = props.data
    return (
        <div>
            <a href={hdurl}>
                <img src={url} alt={title}/>
            </a>
            <h3>{title}</h3>
            <p>{explanation}</p>
            <span>{date}</span>
            <article>{copyright}</article>
        </div>
    )
}

export default AstronomyCard