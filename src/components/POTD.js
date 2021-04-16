
import React from 'react';
import styled from 'styled-components';

const POTD = props => {
    const { photo }=props;
    const POTDStyle = styled.img`
    border: 2px #a8b4bd solid;
    padding: 1px;
    border-radius: 10px;
    width: 90%;
    margin: 2%;
    `


    return (
        <div >
            <POTDStyle src={photo} alt='Nasa POTD' width="400" height="400"></POTDStyle>
        </div>
    );
};

export default POTD;