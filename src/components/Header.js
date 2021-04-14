import React from 'react';

const Header = (props) => {
    const { headerText } = props;


    return (
        <div className="header-wrapper">
            <section className ="header">
                <h1>NASA's Photo of the Day!</h1>
                <h3>{headerText}</h3>
            </section>
        </div>
    );
}

export default Header;