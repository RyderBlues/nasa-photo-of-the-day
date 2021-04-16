import React from 'react';
import styled from 'styled-components';

const Details = (props) => {
    
    const DetailStyles = styled.div`
        color: #f0f0f0;
        width: 80%;
        margin: 0 auto;
    `
    const DateStyles = styled.h4`
        margin-bottom: 2%;
        letter-spacing: 5px;
        font-weight: bold;
    `

    const ExplanationStyles = styled.p`
        letter-spacing: 2px;
        text-align: center;
        font-size: 14px;
    `

    const ExplanationDivStyles = styled.div`
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Source Sans Pro', sans-serif;
        letter-spacing: 5px;
        line-height: 1.3;
    `
    
    
    
    
    
    
    const { date, copyright, explanation } = props;

    return (
        <DetailStyles>
            <div>
                <h3>{copyright}</h3>
                <DateStyles>{date}</DateStyles>
            </div>
            <ExplanationDivStyles>
                <ExplanationStyles>{explanation}</ExplanationStyles>
            </ExplanationDivStyles>
        </DetailStyles>
    );

};


export default Details;