import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    const { headerText } = props;

const HeaderStyles = styled.div`
    color: #f0f0f0;
    padding-top: 2%;
`
const H1Styles = styled.h1`
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 1.2%;
`

const H3Styles = styled.h3`
    letter-spacing: 5px;
    font-weight: bold;
`


    return (
        <HeaderStyles>
            <div>
                <H1Styles>NASA's Photo of the Day!</H1Styles>
                <H3Styles>{headerText}</H3Styles>
            </div>
        </HeaderStyles>
    );
}

export default Header;