import React from 'react'

const Section = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className='flex-container'>
                <div className='flex-top'>
                    <p>{props.paragraph1}</p>
                    <p>{props.paragraph2}</p>
                    <p>{props.paragraph3}</p>
                </div>
                <div className='flex-bottom'>
                    <p>{props.paragraph4}</p>
                </div>
            </div>
        </div>
    )
}

export default Section