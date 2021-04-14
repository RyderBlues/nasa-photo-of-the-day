import React from 'react';

const Details = (props) => {
    const { date, copyright, explanation } = props;
    return (
        <div className ='details-wrapper'>
            <div className='child-wrapper'>
                <h3>{copyright}</h3>
                <h4>{date}</h4>
            </div>
            <div className='child-wrapper'>
                <p>{explanation}</p>
            </div>
        </div>
    );

};


export default Details;