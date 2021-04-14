
import React from 'react';

const POTD = props => {
    const { photo }=props;
    


    return (
        <div className='potd-Container'>
            <img src={photo} alt='Nasa POTD' width="500" height="600"></img>
        </div>
    );
};

export default POTD;